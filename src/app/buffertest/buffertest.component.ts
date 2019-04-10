import { Component, OnInit } from '@angular/core';
// 创建 Observable 的方法、types、schedulers 和一些工具方法
import { EMPTY, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver, observable, Subscription } from 'rxjs';
// 操作符 operators
import { take, map, filter, catchError, mapTo, startWith, scan,buffer } from 'rxjs/operators';

@Component({
  selector: 'app-buffertest',
  templateUrl: './buffertest.component.html',
  styleUrls: ['./buffertest.component.css']
})
export class BuffertestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    interval(300).pipe(
      take(30),
      buffer(interval(1200))
    ).subscribe(
      x => console.log(x)
    )
  }

}
