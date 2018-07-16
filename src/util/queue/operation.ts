import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { guid } from '../guid';


export class Operation {

  public name: string;
  public target: Observable<any>;
  public ready$ = new Subject();

  constructor(target, name?) {
    this.name = name ? name : guid();
    if (target instanceof Observable) {
      this.target = target;
    } else {
      this.target = of(target);
    }
  }
}
