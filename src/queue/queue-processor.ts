import { Subject } from 'rxjs/Subject';
import { Operation } from './operation';


export class QueueProcessor {

  public allDone$ = new Subject();

  private _queue = [];
  private _asyncQueue = [];

  private _currentOperation = null;
  private _inProgress = false;
  private _total = 0;
  private _completed = 0;
  private _errors = 0;
  private _pending = 0;

  constructor() {}

  get total() {
    return this._total;
  }

  get completed() {
    return this._completed;
  }
  
  get pending() {
    return this._pending;
  }

  get errors() {
    return this._errors;
  }

  get inProgress() {
    return this._inProgress;
  }

  get allDone() {
    return !this.inProgress && this.errors === 0 && this.total === this.completed;
  }

  get allDoneIgnoreErrors() {
    return !this.inProgress && this.total === (this.completed + this.errors);
  }

  get inProgressOperations() {
    return this._asyncQueue.concat(this._queue).concat(this._currentOperation)
      .reduce((acc, op) => {

        if (op) {
          acc.push(op.name);
        }

        return acc;
      }, [])
  }

  public push(target, name?) {
    const operation = new Operation(target, name);
    this._queue.push(operation);

    this._total++;

    if (!this._inProgress) {
      this.startQueue();
    }

    return operation.ready$;
  }

  public pushAsync(target, name?) {
    const operation = new Operation(target, name);
    this._asyncQueue.push(operation);
    this._total++;

    target.subscribe((data) => {
      const opIndex = this._asyncQueue.indexOf(operation);
      this._asyncQueue.splice(opIndex, 1);

      operation.ready$.next(data);
      operation.ready$.complete();

      this._completed++;
    }, (error) => {
      const opIndex = this._asyncQueue.indexOf(operation);
      this._asyncQueue.splice(opIndex, 1);

      operation.ready$.error(error);

      this._errors++;
    });

    return operation.ready$;
  }

  public clear() {
    this._queue = [];
    this._asyncQueue = [];
    this._total = 0;
    this._errors = 0;
    this._completed = 0;
    this._inProgress = false;
  }

  public destroy() {
    this.clear();
    this.allDone$.complete();
  }

  private startQueue() {
    if (this._queue.length > 0) {
      this._inProgress = true;
      this._currentOperation = this._queue.shift();

      this._currentOperation.target.subscribe((data) => {
        this._currentOperation.ready$.next(data);
        this._currentOperation.ready$.complete();

        this._completed++;

        this.startQueue();
      }, (error) => {
        this._currentOperation.ready$.error(error);

        this._errors++;
      });
    } else {
      this._currentOperation = null;
      this.allDone$.next();
      this._inProgress = false;
    }
  }
}
