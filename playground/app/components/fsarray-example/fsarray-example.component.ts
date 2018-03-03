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
  templateUrl: 'fsarray-example.component.html'
})
export class FsArrayExampleComponent {

  array = [{id: 1, name: 'Will'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Tom'}];
  examples = [];

  constructor() {
    const array = this.array;
    this.examples = [
      {
        name: 'Indexed array',
        code: `import { index } from '@firestitch/common/array';\nindex(array,'id')`,
        result: index(array.slice(), 'id')
      },
      {
        name: 'IndexOf Name==Tom (Property)',
        code: `import { indexOf } from '@firestitch/common/array';\nindexOf(array,{ name: 'Tom'})`,
        result: indexOf(array.slice(), function (value) {
          return value.name == 'Tom';
        })
      },
      {
        name: 'Filtered By Property',
        code: `import { filter } from '@firestitch/common/array';\nfilter(array,{ name: 'Will' })`,
        result: filter(array.slice(), {name: 'Will'})
      },
      {
        name: 'Filtered By Function',
        code: `import { filter } from '@firestitch/common/array';\nfilter(array,function(value) { return value.name=='Will'; })`,
        result: filter(array.slice(), function (value) {
          return value.name == 'Will';
        })
      },
      {
        name: 'Sort By Property',
        code: `import { sort } from '@firestitch/common/array';\nsort(array,'name')`,
        result: sort(array.slice(), 'name')
      },
      {
        name: 'Sort By Function',
        code: `import { sort } from '@firestitch/common/array';\nsort(array,function(a,b) { if(a.name>b.id) { return 1; } if(a.name<b.id) { return -1; } return 0; })`,
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
        code: `import { rsort } from '@firestitch/common/array';\nrsort(array,'name')`,
        result: rsort(array.slice(), 'name')
      },
      {
        name: 'Removed by Property',
        code: `import { remove } from '@firestitch/common/array';\nremove(array,{ name: 'Tom' })`,
        result: remove(array.slice(), {name: 'Tom'})
      },
      {
        name: 'Removed By Function',
        code: `import { remove } from '@firestitch/common/array'; \nremove(array,function(value) { return value.name=='Will'; })`,
        result: remove(array.slice(), function (value) {
          return value.name == 'Will';
        })
      },
      {
        name: 'List',
        code: `import { list } from '@firestitch/common/array';\nlist(array,'name')`,
        result: list(array.slice(), 'name')
      },
      {
        name: 'List Indexed',
        code: `import { list } from '@firestitch/common/array';\nlist(array,'name','id')`,
        result: list(array.slice(), 'name', 'id')
      },
      {
        name: 'Name Value',
        code: `import { nameValue } from '@firestitch/common/array';\nnameValue(array,'name','id')`,
        result: nameValue(array.slice(), 'name', 'id')
      },
      {
        name: 'Name Value Function',
        code: `import { nameValue } from '@firestitch/common/array';\nnameValue(array,function(item) { return item.name; },function(item) { return item.id; })`,
        result: nameValue(array.slice(), function (item) {
          return item.name;
        }, function (item) {
          return item.id;
        })
      },
      {
        name: 'In Array',
        code: `import { inArray } from '@firestitch/common/array';\ninArray(2,[2,4,6,8])`,
        result: inArray(2, [2, 4, 6, 8])
      },
      {
        name: 'In Array of Array',
        code: `import { inArray } from '@firestitch/common/array';\ninArray([2,10],[2,4,6,8])`,
        result: inArray([2, 10], [2, 4, 6, 8])
      }
    ];

    this.examples.forEach((example) => {
      example.result = JSON.stringify(example.result);
    })
  }

}
