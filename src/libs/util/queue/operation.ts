import { Observable, Subject, of } from 'rxjs';
import { guid } from '../guid';


export class Operation {

  public name: string;
  public target: Observable<any>;
  public ready$ = new Subject();

  constructor(target: Observable<any>, name?: string) {
    this.name = name ? name : guid();

    if (target instanceof Observable) {
      this.target = target;
    } else {
      this.target = of(target);
    }
  }
}
