import { Injectable } from '@angular/core';

@Injectable()
export class FsArray {
    public nameValue(array, name, value): Array<any> {

        let list = [];
        if (name || value) {

            let nameFn = typeof name === 'function' ? name : function (item) { return item[name] };
            let valueFn = typeof value === 'function' ? value : function (item) { return item[value] };

            array.forEach(function (item) {
                list.push({ name: nameFn(item), value: valueFn(item) });
            });

        } else {
            array.forEach(function (name, value) {
                list.push({ name: name, value: value });
            });
        }

        return list;
    }

    public remove(array, query): any {

        let idx = this.indexOf(array, query);

        if (idx >= 0) {
            return array.splice(idx, 1);
        }

        return idx;
    }



    public indexOf(array, query): number {

        if (typeof query !== 'function') {
            let queryObj = query;
            query = (item) => {

                return this.compare(queryObj, item);
            }
        }

        for (let i = 0, len = array.length; i < len; i++) {
            if (query(array[i])) {
                return i;
            }
        }

        return -1;
    }

    public compare(query, item): boolean {

        let value = true;
        for (let key in query) {
            value = value && item[key] == query[key];
        }

        return value;
    }

    public filter(array, query): Array<any> {

        if (typeof query !== 'function') {
            let queryObj = query;
            query = (item) => {

                return this.compare(queryObj, item);
            }
        }

        let isarray = Array.isArray(array);
        let list: any = isarray ? [] : {};
        if (isarray)
            array.forEach(function (item, idx) {
                if (query(item)) {
                    list.push(item);
                }
            });
        else Object.keys(array).forEach(key => {
            if (query(array[key])) {
                list[key] = array[key];
            }
        })
        return list;
    }

    public index(array, property): Object {
        let list = {};
        array.forEach(function (item, idx) {
            list[item[property]] = item;
        });
        return list;
    }


    public sort(array, query, reverse = false): Array<any> {
        if (typeof query !== 'function') {
            let queryStr = query;
            query = function (a, b) {
                if (reverse) {
                    if (a[queryStr] < b[queryStr]) {
                        return 1;
                    } else if (a[queryStr] > b[queryStr]) {
                        return -1;
                    }
                } else {
                    if (a[queryStr] > b[queryStr]) {
                        return 1;
                    } else if (a[queryStr] < b[queryStr]) {
                        return -1;
                    }
                }
                return 0;
            };
        }

        array.sort(query);
        return array;
    }

    public rsort(array, query): Array<any> {
        return this.sort(array, query, true);
    }


    public list(array, property, index = null): Object {
        let list: any = index ? {} : [];
        array.forEach(function (item, idx) {
            if (index) {
                list[item[index]] = item[property];
            } else {
                list.push(item[property]);
            }
        });
        return list;
    }

    public applyDepth(objects, parent_property, id_property = 'id', depth_property = 'depth') {

        let keyed = {};
        objects.forEach(function (object) {
            if (!object[parent_property])
                object[depth_property] = 0;

            keyed[object[id_property]] = object;
        });
        Object.keys(keyed).forEach(key => {
            Object.keys(keyed).forEach(key => {
                let object = keyed[key];
                if (!keyed[key][depth_property]) {
                    if (keyed[key][parent_property]) {
                        keyed[key][depth_property] = keyed[keyed[key][parent_property]][depth_property] + 1;
                    }
                }
            })
        })

        return keyed;
    }

    inArray(values, array) {

        if (!Array.isArray(values)) {
            values = [values];
        }

        for (let i = 0, len = values.length; i < len; i++) {
            if (array.indexOf(values[i]) >= 0) {
                return true;
            }
        }

        return false;
    }

    keyExists(array, key) {
        return array.hasOwnProperty(key);
    }

    length(array) {
        return array.length;
    }

    ksort(unordered) {
        Object.keys(unordered).sort().forEach(function (key) {
            let value = unordered[key];
            delete unordered[key];
            unordered[key] = value;
        });
    }


}
