import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// 创建 Observable 的方法、types、schedulers 和一些工具方法
import { EMPTY, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver, observable, Subscription } from 'rxjs';
// 操作符 operators
import { take, map, filter, catchError, mapTo, startWith, scan } from 'rxjs/operators';
// webSocket
import { webSocket } from 'rxjs/webSocket';
// ajax
import { ajax } from 'rxjs/ajax';
// 测试
import { TestScheduler } from 'rxjs/testing';

@Component({
  selector: 'app-rxjstest',
  templateUrl: './rxjstest.component.html',
  styleUrls: ['./rxjstest.component.css']
})
export class RxjstestComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // 每隔1000ms发射一个递增的数据 0 -> 1 -> 2
    // take(3)表示只取源发射的前3个数据，取完第三个后关闭源的发射
    // map表示将流中的数据进行映射处理，这里我们将数据翻倍
    // filter表示过滤掉出符合条件的数据
    // 结果 2 第2秒 4 第3秒
    const ob = interval(1000)
      .pipe(
        take(3),
        map(n => n * 2),
        filter(n => n > 0),
        catchError(err => { return interval(500) }))
      .subscribe(
        // n => console.log(n)
        n => console.log(n),
        err => console.error(err),
        () => console.log('end of the stream'));

    const eleBtn = document.querySelector('#btn');
    // 代表流的变量用 $ 符号结尾，是 RxJS 中的一种惯例
    const click$ = fromEvent(eleBtn, 'click');

    click$.pipe(take(1))
      .subscribe(e => {
        console.log('只可点击一次')
        eleBtn.setAttribute('disabled', '')
      })

    // 同期
    const source$ = new Observable(observer => {
      try {
        observer.next(1)
        observer.next(2)
        throw new Error('there are an exception')
        observer.complete()
        observer.next(3)
      } catch (e) {
        observer.next(e)
      }

    })

    const observer = {
      next: item => console.log(item),
      error: e => console.log(e),
      complete: () => console.log('complete')
    }

    console.log('start')
    source$.subscribe(observer)
    console.log('end')

    source$.subscribe(
      item => console.log(item),
      e => console.log(e),
      () => console.log('complete')
    )

    // 非同期
    const source1$ = new Observable(observer => {
      let num = 1
      setInterval(() => {
        observer.next(num++)
      }, 1000)
    })

    console.log('start')
    const subscription = source1$.pipe(
      // take(3)
    ).subscribe(observer)
    console.log('end')

    // 退订（unsubscribe）
    setTimeout(() => {
      subscription.unsubscribe()
    }, 5000)
    /* 
     页面上有一个 p 标签存放一个状态，
     初始为 0，
     有两个按钮，一个按钮点击后这个状态增加 1，
     另一个按钮点击后这个状态减少 1。
     */
    const addButton = document.getElementById('addButton')
    const minusButton = document.getElementById('minusButton')
    const state = document.getElementById('state')

    const addClick$ = fromEvent(addButton, 'click').pipe(mapTo(1))
    const minusClick$ = fromEvent(minusButton, 'click').pipe(mapTo(-1))

    merge(
      EMPTY.pipe(startWith(0)),
      addClick$,
      minusClick$)
      .pipe(
        scan((origin, next) => origin + next)
      ).subscribe(item => {
        state.textContent = item.toString()
      }
      )

  }

}
