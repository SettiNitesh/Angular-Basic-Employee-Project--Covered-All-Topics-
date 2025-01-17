import { Component } from '@angular/core';
import {
  concatWith,
  count,
  filter,
  from,
  groupBy,
  map,
  max,
  mergeMap,
  mergeWith,
  min,
  Observable,
  of,
  race,
  reduce,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-rxjs-learning',
  imports: [ParentComponent],
  templateUrl: './rxjs-learning.component.html',
  styleUrl: './rxjs-learning.component.css',
})
export class RxjsLearningComponent {
  constructor() {
    var observable$ = new Observable((observer) => {
      try {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
      } catch (e) {
        observer.error(e);
      }
    });
    observable$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err),
    });
    let obs$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    let case1 = obs$.pipe(
      filter((value) => value % 2 === 0),
      map((value) => value * 2),
      reduce((acc, one) => acc + one, 0)
    );
    case1.subscribe((x) => console.log(x));
    var ajax$ = ajax('https://jsonplaceholder.typicode.com/users');
    ajax$.pipe(map((e) => e.response)).subscribe({
      next: (value) => console.log(value),
    });
    var num$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
    var num1$ = of(10, 11, 12, 13, 14, 15, 16, 17, 18, 19);
    num$.pipe(count((a) => a % 2 == 0)).subscribe((data) => console.log(data));
    num$.pipe(max((a, b) => a - b)).subscribe((data) => console.log(data));
    num$.pipe(min((a, b) => a - b)).subscribe((data) => console.log(data));
    num$
      .pipe(reduce((a, b) => a + b, 0))
      .subscribe((data) => console.log(data));
    num$.pipe(concatWith(num1$)).subscribe((data) => console.log(data));
    num$.pipe(mergeWith(num1$)).subscribe((data) => console.log(data));
    race(num$, num1$).subscribe((data) => console.log(data));
    const data = [
      { groupId: 'QA', value: 1 },
      { groupId: 'Development', value: 3 },
      { groupId: 'QA', value: 5 },
      { groupId: 'Development', value: 6 },
      { groupId: 'QA', value: 2 },
    ];
    from(data)
      .pipe(groupBy((item) => item.groupId))
      .subscribe((x) => console.log(x));
    let text = of('Welcome To');
    let case3 = text.pipe(mergeMap((value) => of(value + ' Tutorialspoint!')));
    case3.subscribe((value) => {
      console.log(value);
    });
  }
}
