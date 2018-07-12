import {Component} from '@angular/core';
import { of } from "rxjs/observable/of";
import { delay } from 'rxjs/operators';
import { QueueProcessor } from '../../../../src/queue/queue-processor';
import { FsMessage } from '@firestitch/message';

@Component({
  selector: 'fsqueue-processor',
  templateUrl: 'fsqueue-processor.component.html',
  styleUrls: ['fsqueue-processor.component.scss']
})
export class FsQueueProcessorComponent {

  queue = new QueueProcessor();
  operationCount = 0;
  public queueForm = {
    name: '',
    delay: 2000
  };

  constructor(private fsMessage: FsMessage) {}

  public addQueueOperation() {
    const operations = [];
    for (let i = 0; i < this.operationCount; i++) {

      this.queue.pushAsync(of(1).pipe(delay(this.queueForm.delay || 0)), this.queueForm.name)
      .subscribe(() => {
        this.fsMessage.success('All operations completed successfully');
        console.log('All operations completed successfully');
      }, () => {
        this.fsMessage.error('There was an error in the operations');
      });
    }
  }
}
