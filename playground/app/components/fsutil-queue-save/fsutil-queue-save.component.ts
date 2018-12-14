import {Component} from '@angular/core';
import { of } from "rxjs/observable/of";
import { delay, map } from 'rxjs/operators';
import { Queue } from '../../../../src/util/queue';
import { FsMessage } from '@firestitch/message';

@Component({
  selector: 'fsutil-queue-save',
  templateUrl: 'fsutil-queue-save.component.html',
  styleUrls: ['fsutil-queue-save.component.scss']
})
export class FsUtilQueueSaveComponent {
  
  queue = new Queue();
  constructor(private fsMessage: FsMessage) {}

  public save() {

    if (this.queue.isProcessing()) {
      this.fsMessage.info('Your changes will be saved as soon as the upload as finished');
    }

    this.queue.complete(() => {
      this.fsMessage.success('Save Successful');
    }, (err) => {
      
    });
  }

  public uploadFile(error) {
    this.queue.push(
      of(1).pipe(
        delay(3000),
        map((res) => {
          if (error) {
            this.fsMessage.error('Error uploading the file');
            throw 'Error uploading the file';
          }

          return res;
        })
      )
    );
  }
}
