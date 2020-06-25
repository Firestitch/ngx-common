import { Observable, Subject } from 'rxjs';
import { Operation } from './operation';
import { QueueState } from './queue.enum';
import { delay, takeUntil } from 'rxjs/operators';

export class Queue {

  private _done = new Subject();

  private _queue: Operation[] = [];
  private _inProgress: Operation[] = [];

  private _total = 0;
  private _completed = 0;
  private _errors = 0;

  private _state: QueueState = QueueState.Idle;

  private _destroy$ = new Subject<void>();

  constructor(private _limit = Infinity) {}

  get total() {
    return this._total;
  }

  get completed() {
    return this._completed;
  }

  get pending() {
    return this._queue.length;
  }

  get inProgress() {
    return this._inProgress.length;
  }

  get errors() {
    return this._errors;
  }

  get state() {
    return this._state;
  }

  get empty() {
    return !this._queue.length && !this._inProgress.length
  }

  get pendingOperations(): string[] {
    return this._queue
      .map((operation) => operation.name);
  }

  get inProgressOperations(): string[] {
    return this._inProgress
      .map((operation) => operation.name);
  }

  public isProcessing(): boolean {
    return this._state === QueueState.Processing;
  }

  public isIdle(): boolean {
    return this._state === QueueState.Idle;
  }

  public setLimit(value: number) {
    this._limit = value;
  }

  public subscribe(fun, err?, complete?) {
    this._done
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(fun, err, complete);
  }

  public complete(fun, err?, complete?) {

    Observable.create(observer => {

      if (!this.isProcessing()) {
          observer.next();
          observer.complete();
          return;
      }

      this.subscribe(() => {
        observer.next();
        observer.complete();
      }, (error) => {
        observer.error(error);
        this.clear();
      });
    }).subscribe(fun, err, complete);
  }

  public push(target, name?) {
    const operation = new Operation(target, name);

    this._total++;
    this._state = QueueState.Processing;

    if (this._inProgress.length < this._limit) {
      this._processOperation(operation);
    } else {
      this._queue.push(operation);
    }

    return operation.ready$;
  }

  public clear() {
    this._queue = [];
    this._total = 0;
    this._errors = 0;
    this._completed = 0;
    this._state = QueueState.Idle;
    this._done = new Subject();
  }

  public destroy() {
    this.clear();
    this._done.complete();
  }

  private _processOperation(operation: Operation) {
    this._inProgress.push(operation);

    operation.target
      .pipe(
        delay(200), // Hack to prevent extra quick proccess execution
        takeUntil(this._destroy$),
      ).subscribe({
        next: (data) => {
          operation.ready$.next(data);
        },

        error: (error) => {
          const opIndex = this._inProgress.indexOf(operation);
          this._inProgress.splice(opIndex, 1);

          this._errors++;

          operation.ready$.error(error);

          if (this.empty) {
            this._state = QueueState.Idle;
            this._done.error(error);
          }
        },

        complete: () => {
          const opIndex = this._inProgress.indexOf(operation);
          this._inProgress.splice(opIndex, 1);

          this._completed++;

          operation.ready$.complete();

          if (this.empty) {
            this._state = QueueState.Idle;
            this._done.next();
          } else {
            if (this._queue.length) {
              const queueItem = this._queue.shift();
              this._processOperation(queueItem);
            }
          }
        }
      });
  }
}
