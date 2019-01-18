import {Component} from '@angular/core';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Queue } from '@firestitch/common';
import { FsMessage } from '@firestitch/message';

@Component({
  selector: 'fs-util-queue-save',
  templateUrl: 'util-queue-save.component.html',
  styleUrls: ['util-queue-save.component.scss']
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

  public uploadFile(error = null) {
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
