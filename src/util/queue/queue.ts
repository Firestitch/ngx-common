import { Subject } from 'rxjs/Subject';
import { Operation } from './operation';
import { Observable } from 'rxjs/Observable';

export class Queue {

  private _done = new Subject();
  private _queue = [];
  private _total = 0;
  private _completed = 0;
  private _errors = 0;
  private _state: 'idle' | 'processing' = 'idle';

  constructor() {}

  get total() {
    return this._total;
  }

  get completed() {
    return this._completed;
  }

  get pending() {
    return this._queue.length;
  }

  get errors() {
    return this._errors;
  }

  get state() {
    return this._state;
  }

  isProcessing(): boolean {
    return this._state === 'processing';
  }

  isIdle(): boolean {
    return this._state === 'idle';
  }

  get pendingOperations() {
    return this._queue
      .reduce((acc, op) => {

        if (op) {
          acc.push(op.name);
        }

        return acc;
      }, [])
  }

  public subscribe(fun, err?, complete?) {
    return this._done.subscribe(fun, err, complete);
  }
  
  public complete(fun, err?, complete?) {
    
    Observable.create(observer => {
            
      if(!this.isProcessing()) {
          observer.next();
          observer.complete();
          return;
      }

      this.subscribe(() => {
        observer.next();
        observer.complete();
      },(err) => {
        observer.error(err);
        this.clear();
      });
    }).subscribe(fun, err, complete);
  }

  public push(target, name?) {
    const operation = new Operation(target, name);
    this._queue.push(operation);
    this._total++;
    this._state = 'processing';

    target.subscribe((data) => {
      const opIndex = this._queue.indexOf(operation);
      this._queue.splice(opIndex, 1);

      operation.ready$.next(data);
      operation.ready$.complete();

      this._completed++;

      if (!this._queue.length) {
        this._state = 'idle';
        this._done.next();
      }

    }, (error) => {
      const opIndex = this._queue.indexOf(operation);
      this._queue.splice(opIndex, 1);

      operation.ready$.error(error);

      this._errors++;

      if (!this._queue.length) {
        this._state = 'idle';
        this._done.error(error);
      }
    });

    return operation.ready$;
  }

  public clear() {
    this._queue = [];
    this._total = 0;
    this._errors = 0;
    this._completed = 0;
    this._state = 'idle';
    this._done = new Subject();
  }

  public destroy() {
    this.clear();
    this._done.complete();
  }
}
