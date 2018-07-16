import {Component} from '@angular/core';
import { of } from "rxjs/observable/of";
import { delay } from 'rxjs/operators';
import { Queue } from '../../../../src/util/queue';
import { FsMessage } from '@firestitch/message';

@Component({
  selector: 'fsutil-queue',
  templateUrl: 'fsutil-queue.component.html',
  styleUrls: ['fsutil-queue.component.scss']
})
export class FsUtilQueueComponent {

  // {  concurrent / consecutive }
  queue = new Queue();
  operationCount = 0;
  public queueForm = {
    name: '',
    delay: 2000
  };

  constructor(private fsMessage: FsMessage) {
    this.init();
  }

  public queueOperation(count, error) {
    const operations = [];
    for (let i = 0; i < count; i++) {
      this.queue.push(of(1).pipe(delay(this.queueForm.delay || 0))
      .map((res) => {
        if (error) {
          throw 'Error';
        }
        return res;
      }), this.queueForm.name);
    }
  }

  public isProcessing() {
    if (this.queue.isProcessing()) {
      this.fsMessage.info('The queue IS processing');
    } else {
      this.fsMessage.info('The queue IS NOT processing');
    }
  }

  public clear() {
    this.queue.clear();
    this.init();
    this.fsMessage.info('The queue has been cleared');
  }

  public init() {
    this.queue.subscribe(() => {
      this.fsMessage.success('All operations completed successfully');
      console.log('Next');
    }, (err) => {
      this.fsMessage.error('There was an error: ' + err);
      console.log('Error: ' + err);
    }, () => {
      console.log('Complete');
    });
  }
}
