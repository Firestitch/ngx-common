import { Component } from '@angular/core';
import { FsUtil } from './../../../../src/services/fsutil.service';

@Component({
  selector: 'fsutil-example',
  templateUrl: 'fsutil-example.component.html',
  styleUrls: [ 'fsutil-example.component.css' ]
})
export class FsUtilExampleComponent {

  examples = [];

  constructor(public FsUtil: FsUtil) {
    this.examples = [ {  name: 'GUID',
                          code: "FsUtil.guid()",
                          result: FsUtil.guid() },
                      {  name: 'UUID',
                          code: "FsUtil.uuid()",
                          result: FsUtil.uuid() },
                      {  name: 'Int',
                          code: "FsUtil.int('123')",
                          result: FsUtil.int('123') },
                      {  name: 'Float',
                          code: "FsUtil.float('54.66')",
                          result: FsUtil.float('54.66') },
                      {  name: 'String',
                          code: "FsUtil.string(123)",
                          result: FsUtil.string(123) },
                      {  name: 'Is Empty Array',
                          code: "FsUtil.isEmpty([])",
                          result: FsUtil.isEmpty([]) },
                      {  name: 'Is Array',
                          code: "fsUtil.isArray([])",
                          result: FsUtil.isArray([]) },
                      {  name: 'Is Object',
                          code: "FsUtil.isObject({})",
                          result: FsUtil.isObject({}) },
                      {  name: 'Is isNumeric',
                          code: "FsUtil.isNumeric(123)",
                          result: FsUtil.isNumeric(123) },
                      {  name: 'Is Int',
                          code: "FsUtil.isInt(123)",
                          result: FsUtil.isInt(123) }
                      ];


      this.examples.forEach((example) => {
        example.result = JSON.stringify(example.result);
      })
  }

}
