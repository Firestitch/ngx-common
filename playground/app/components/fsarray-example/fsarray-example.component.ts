import {Component} from '@angular/core';
import {
  index,
  indexOf,
  filter,
  sort,
  rsort,
  remove,
  list,
  nameValue,
  inArray
} from '../../../../src/array';

@Component({
  selector: 'fsarray-example',
  templateUrl: 'fsarray-example.component.html',
  styleUrls: ['fsarray-example.component.css']
})
export class FsArrayExampleComponent {

  array = [{id: 1, name: 'Will'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Tom'}];
  examples = [];

  constructor() {
    const array = this.array;
    this.examples = [
      {
        name: 'Indexed array',
        deprecatedCode: "FsArray.index(array,'id')",
        code: `
          import { index } from '@firestitch/common/array'; \n
          index(array,'id')
        `,
        result: index(array.slice(), 'id')
      },
      {
        name: 'IndexOf Name==Tom (Property)',
        deprecatedCode: "FsArray.indexOf(array,{ name: 'Tom'})",
        code: `
          import { indexOf } from '@firestitch/common/array'; \n
          indexOf(array,{ name: 'Tom'})
        `,
        result: indexOf(array.slice(), function (value) {
          return value.name == 'Tom';
        })
      },
      {
        name: 'Filtered By Property',
        deprecatedCode: "FsArray.filter(array,{ name: 'Will' })",
        code: `
          import { filter } from '@firestitch/common/array'; \n
          filter(array,{ name: 'Will' })
        `,
        result: filter(array.slice(), {name: 'Will'})
      },
      {
        name: 'Filtered By Function',
        deprecatedCode: "FsArray.filter(array,function(value) { return value.name=='Will'; })",
        code: `
          import { filter } from '@firestitch/common/array'; \n
          filter(array,function(value) { return value.name=='Will'; })
        `,
        result: filter(array.slice(), function (value) {
          return value.name == 'Will';
        })
      },
      {
        name: 'Sort By Property',
        deprecatedCode: "FsArray.sort(array,'name')",
        code: `
          import { sort } from '@firestitch/common/array'; \n
          sort(array,'name')
        `,
        result: sort(array.slice(), 'name')
      },
      {
        name: 'Sort By Function',
        deprecatedCode: "FsArray.sort(array,function(a,b) { if(a.name>b.id) { return 1; } if(a.name<b.id) { return -1; } return 0; })",
        code: `
          import { sort } from '@firestitch/common/array'; \n
          sort(array,function(a,b) { if(a.name>b.id) { return 1; } if(a.name<b.id) { return -1; } return 0; })
        `,
        result: sort(array.slice(), function (a, b) {
          if (a.name > b.id) {
            return 1;
          }
          if (a.name < b.id) {
            return -1;
          }
          return 0;
        })
      },
      {
        name: 'Reverse Sort',
        deprecatedCode: "FsArray.rsort(array,'name')",
        code: `
          import { rsort } from '@firestitch/common/array'; \n
          rsort(array,'name')
        `,
        result: rsort(array.slice(), 'name')
      },
      {
        name: 'Removed by Property',
        deprecatedCode: "FsArray.remove(array,{ name: 'Tom' })",
        code: `
          import { remove } from '@firestitch/common/array'; \n
          remove(array,{ name: 'Tom' })
        `,
        result: remove(array.slice(), {name: 'Tom'})
      },
      {
        name: 'Removed By Function',
        deprecatedCode: "FsArray.remove(array,function(value) { return value.name=='Will'; })",
        code: `
          import { remove } from '@firestitch/common/array'; \n
          remove(array,function(value) { return value.name=='Will'; })
        `,
        result: remove(array.slice(), function (value) {
          return value.name == 'Will';
        })
      },
      {
        name: 'List',
        deprecatedCode: "FsArray.list(array,'name')",
        code: `
          import { list } from '@firestitch/common/array'; \n
          list(array,'name')
        `,
        result: list(array.slice(), 'name')
      },
      {
        name: 'List Indexed',
        deprecatedCode: "FsArray.list(array,'name','id')",
        code: `
          import { list } from '@firestitch/common/array'; \n
          list(array,'name','id')
        `,
        result: list(array.slice(), 'name', 'id')
      },
      {
        name: 'Name Value',
        deprecatedCode: "FsArray.nameValue(array,'name','id')",
        code: `
          import { nameValue } from '@firestitch/common/array'; \n
          nameValue(array,'name','id')
        `,
        result: nameValue(array.slice(), 'name', 'id')
      },
      {
        name: 'Name Value Function',
        deprecatedCode: "FsArray.nameValue(array,function(item) { return item.name; },function(item) { return item.id; })",
        code: `
          import { nameValue } from '@firestitch/common/array'; \n
          nameValue(array,function(item) { return item.name; },function(item) { return item.id; })
        `,
        result: nameValue(array.slice(), function (item) {
          return item.name;
        }, function (item) {
          return item.id;
        })
      },
      {
        name: 'In Array',
        deprecatedCode: "FsArray.inArray([2,10],[2,4,6,8])",
        code: `
          import { inArray } from '@firestitch/common/array'; \n
          inArray([2,10],[2,4,6,8])
        `,
        result: inArray([2, 10], [2, 4, 6, 8])
      },
      {
        name: 'In Array',
        deprecatedCode: "FsArray.inArray(2,[2,4,6,8])",
        code: `
          import { inArray } from '@firestitch/common/array'; \n
          inArray(2,[2,4,6,8])
        `,
        result: inArray(2, [2, 4, 6, 8])
      }
    ];


    this.examples.forEach((example) => {
      example.result = JSON.stringify(example.result);
    })
  }

}
