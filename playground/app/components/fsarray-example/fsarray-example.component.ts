import { Component } from '@angular/core';
import { FsArray } from './../../../../src/services/fsarray.service';
// import { } from '../../../../package/format/currency';
import { round } from '../../../../package/round'
import { KEY_4 } from '../../../../src/services/fsutil.service';

@Component({
  selector: 'fsarray-example',
  templateUrl: 'fsarray-example.component.html',
  styleUrls: [ 'fsarray-example.component.css' ]
})
export class FsArrayExampleComponent {

  array = [{ "id": 1, "name": "Will" }, { "id": 2, "name": "Bob" }, { "id": 3, "name": "Tom" }];
  examples = [];

  constructor(public FsArray: FsArray) {
    const array = this.array;
    this.examples = [ {  name: 'Indexed array',
                          code: "FsArray.index(array,'id')",
                          result: FsArray.index(array.slice(),'id') },
                      {  name: 'IndexOf Name==Tom (Property)',
                          code: "FsArray.indexOf(array,{ name: 'Tom'})",
                          result: FsArray.indexOf(array.slice().slice(),function(value) { return value.name=='Tom'; }) },
                      {  name: 'Filtered By Property',
                          code: "FsArray.filter(array,{ name: 'Will' })",
                          result: FsArray.filter(array,{ name: 'Will' }) },
                      {  name: 'Filtered By Function',
                          code: "FsArray.filter(array,function(value) { return value.name=='Will'; })",
                          result: FsArray.filter(array.slice(),function(value) { return value.name=='Will'; }) },
                      {  name: 'Sort By Property',
                          code: "FsArray.sort(array,'name')",
                          result: FsArray.sort(array.slice(),'name') },
                      {  name: 'Sort By Function',
                          code: "FsArray.sort(array,function(a,b) { if(a.name>b.id) { return 1; } if(a.name<b.id) { return -1; } return 0; })",
                          result: FsArray.sort(array.slice(),function(a,b) { if(a.name>b.id) { return 1; } if(a.name<b.id) { return -1; } return 0; }) },
                      {  name: 'Reverse Sort',
                          code: "FsArray.rsort(array,'name')",
                          result: FsArray.rsort(array.slice(),'name') },
                      {  name: 'Removed by Property',
                          code: "FsArray.remove(array,{ name: 'Tom' })",
                          result: FsArray.remove(array.slice(),{ name: 'Tom' }) },
                      {  name: 'Removed By Function',
                          code: "FsArray.remove(array,function(value) { return value.name=='Will'; })",
                          result: FsArray.remove(array.slice(),function(value) { return value.name=='Will'; }) },
                      {  name: 'List',
                          code: "FsArray.list(array,'name')",
                          result: FsArray.list(array.slice(),'name') },
                      {  name: 'List Indexed',
                          code: "FsArray.list(array,'name','id')",
                          result: FsArray.list(array.slice(),'name','id') },
                      {  name: 'Name Value',
                          code: "FsArray.nameValue(array,'name','id')",
                          result: FsArray.nameValue(array.slice(),'name','id') },
                      {  name: 'Name Value Function',
                          code: "FsArray.nameValue(array,function(item) { return item.name; },function(item) { return item.id; })",
                          result: FsArray.nameValue(array.slice(),function(item) { return item.name; },function(item) { return item.id; }) },
                      {  name: 'In Array',
                          code: "FsArray.inArray([2,10],[2,4,6,8])",
                          result: FsArray.inArray([2,10],[2,4,6,8]) },
                      {  name: 'In Array',
                          code: "FsArray.inArray(2,[2,4,6,8])",
                          result: FsArray.inArray(2,[2,4,6,8]) }
                      ];


    this.examples.forEach((example) => {
      example.result = JSON.stringify(example.result);
    })
  }

}
