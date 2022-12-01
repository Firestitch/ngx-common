import { Observable, of, Subject } from 'rxjs';
import { delay, finalize, map, take, takeUntil } from 'rxjs/operators';

import { Operation } from './operation';
import { QueueStats } from './queue-stats';
import { QueueState } from './queue.enum';


export class Queue {

  private _queueStats: QueueStats = {
    completed: 0,
    total: 0,
    errors: [],
  };

  private _doneQueueStats: QueueStats = {
    completed: 0,
    total: 0,
    errors: [],
  };

  private _completeQueueStats: QueueStats = {
    completed: 0,
    total: 0,
    errors: [],
  };

  private _done = new Subject<QueueStats>();
  private _queue: Operation[] = [];
  private _inProgress: Operation[] = [];
  private _state: QueueState = QueueState.Idle;
  private _destroy$ = new Subject<void>();
  
  constructor(
    private _limit = Infinity,
    //private _targets?: Observable<any>[],
  ) {
    // if(_targets) {
    //   _targets.forEach((target) => {
    //     this.push(target);
    //   }); 
    // }
  }

  public get total() {
    return this._queueStats.total;
  }

  public get completed() {
    return this._queueStats.completed;
  }

  public get pending() {
    return this._queue.length;
  }

  public get inProgress() {
    return this._inProgress.length;
  }

  public get errors() {
    return this._queueStats.errors;
  }

  public get state() {
    return this._state;
  }

  public get empty() {
    return !this._queue.length && !this._inProgress.length
  }

  public get pendingOperations(): string[] {
    return this._queue
      .map((operation) => operation.name);
  }

  public get inProgressOperations(): string[] {
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

  /**
   * @depreated
   */
  public subscribe(fun, err?, complete?): void {
    this.observe$
      .subscribe(fun, err, complete);
  }

  public get observe$(): Observable<QueueStats> {
    return this._done
      .pipe(
        takeUntil(this._destroy$),
      );
  }

  public get complete$(): Observable<QueueStats> {
    if (!this.isProcessing()) {
      return of({ total: 0, completed: 0, errors: [] });
    }

    return this.observe$
      .pipe(
        take(1),
        map(() => (this._completeQueueStats)),
      );
  }

  public complete(fun, err?, complete?): void {
    this.complete$.subscribe(fun, err, complete);
  }

  public push(target: Observable<any>, name?: string) {
    const operation = new Operation(target, name);

    this._queueStats.total++;
    this._doneQueueStats.total++;
    this._completeQueueStats.total++;
    this._state = QueueState.Processing;

    if (this._inProgress.length < this._limit) {
      this._processOperation(operation);
    } else {
      this._queue.push(operation);
    }

    return operation.ready$;
  }

  public clear(): void {
    this._queue = [];
    this._state = QueueState.Idle;       
    this._queueStats = {
      total: 0,
      errors: [],
      completed: 0,
    };
    this._clearDoneQueueStats();
  }

  public destroy(): void {    
    this._done.complete();
    this.clear();
  }

  private _processOperation(operation: Operation): void {
    this._inProgress.push(operation);

    operation.target
      .pipe(
        delay(200), // Hack to prevent extra quick proccess execution
        finalize(() => {
          const opIndex = this._inProgress.indexOf(operation);
          this._inProgress.splice(opIndex, 1);
          
          if (this.empty) {
            this._state = QueueState.Idle;
            this._done.next(this._doneQueueStats);
            this._clearDoneQueueStats();
          } else {
            if (this._queue.length) {
              const queueItem = this._queue.shift();
              this._processOperation(queueItem);
            }
          }
        }),
        takeUntil(this._destroy$),
      ).subscribe({
        next: (data) => {
          operation.ready$.next(data);
        },
        error: (error) => {
          this._queueStats.errors.push(error);
          this._doneQueueStats.errors.push(error);
          this._completeQueueStats.errors.push(error);

          operation.ready$.error(error);
        },
        complete: () => {
          this._queueStats.completed++;
          this._doneQueueStats.completed++;
          this._completeQueueStats.completed++;

          operation.ready$.complete();
        }
      });
  }

  private _clearDoneQueueStats(): void {
    this._doneQueueStats = {
      total: 0,
      errors: [],
      completed: 0,
    };
  }
}
