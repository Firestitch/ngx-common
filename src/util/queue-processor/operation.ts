import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


export class Operation {

  public name: string;
  public target: Observable<any>;
  public ready$ = new Subject();

  constructor(name, target) {
    this.name = name;
    if (target instanceof Observable) {
      this.target = target;
    } else {
      this.target = of(target);
    }
  }
}
