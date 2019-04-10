import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { concatMap, map, takeWhile, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-divtest',
  templateUrl: './divtest.component.html',
  styleUrls: ['./divtest.component.css']
})
export class DivtestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*
    页面上有一个 id 为 drag 的 div
    要实现的功能如下：
    当在这个 div 上按下鼠标左键(mousedown)时，开始监听鼠标移动(mousemove)位置
    当鼠标松开(mouseup)时，结束监听鼠标移动
    当鼠标移动被监听时，更新 div 样式来实现拖拽效果
     */
    const eleDrag = document.getElementById('drag')
    const eleBody = document.querySelector('body')

    const mouseDown$ = fromEvent(eleDrag, 'mousedown')
    const mouseMove$ = fromEvent(eleBody, 'mousemove')
    const mouseUp$ = fromEvent(eleBody, 'mouseup')

    mouseDown$.pipe(
      concatMap((mouseDownEvent:MouseEvent) => mouseMove$.pipe(
        map((mouseMoveEvent:MouseEvent) => ({
          left: mouseMoveEvent.clientX - mouseDownEvent.offsetX,
          top:mouseMoveEvent.clientY - mouseDownEvent.offsetY
        })),
        takeUntil(mouseUp$)
      )

      )
    ).subscribe(
      position => {
        eleDrag.style.left = position.left + 'px',
        eleDrag.style.top = position.top + 'px'
      }
    )

  }
}