import { Component, inject } from '@angular/core';
import { FsMessage } from '@firestitch/message';

import { of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Queue, QueueStats } from '@firestitch/common';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { JsonPipe } from '@angular/common';


@Component({
    selector: 'fs-util-queue',
    templateUrl: 'util-queue.component.html',
    styleUrls: ['util-queue.component.scss'],
    standalone: true,
    imports: [FormsModule, MatFormField, MatInput, MatButton, JsonPipe]
})
export class FsUtilQueueComponent {
  private _message = inject(FsMessage);


  public queue: Queue;
  public queueForm = {
    name: '',
    delay: 500
  };
  public queueLimit = Infinity;

  constructor() {
    const targets = [
      // throwError('There was an error').pipe(delay(100)),
      // throwError('There was an error').pipe(delay(100)),
      // throwError('There was an error').pipe(delay(100)),
      // throwError('There was an error').pipe(delay(100)),
      // of(true).pipe(delay(2000)),
      // of(true).pipe(delay(2000)),
      // of(true).pipe(delay(2000)),
      // throwError('There was an error'),
      // of(true).pipe(delay(2000)),
    ];
    
    this.queue = new Queue(5);
    this.queue.complete$
      .subscribe((queueStats: QueueStats) => {
        console.log('Complete', queueStats);
      });

    this.init();
  }

  public queueOperation(count, error) {
    const operations = [];
    for (let i = 0; i < count; i++) {
      this.queue.push(
        of(1)
          .pipe(
            delay(this.queueForm.delay || 0),
            map((res) => {
              if (error) {
                throw 'Error';
              }
              return res;
            })
          )
      );
    }
  }

  public isProcessing() {
    if (this.queue.isProcessing()) {
      this._message.info('The queue IS processing');
    } else {
      this._message.info('The queue IS NOT processing');
    }
  }

  public clear() {
    this.queue.clear();
    this._message.info('The queue has been cleared');
  }

  public changeLimit() {
    this.queue.setLimit(this.queueLimit | Infinity);
  }

  public init() {
    this.queue.observe$
      .subscribe((queueState: QueueStats) => {
        this._message.success('All operations completed successfully');
        console.log('Observe', queueState);
      });
  }
}
