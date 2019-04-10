# RxJsDemo
rxjs练习例
RxJS最难我想就是各种operator的应用了，这需要一些经验的积累。

RxJS很火很大原因我认还是提供了丰富的API，以下是摘抄：

创建数据流：

    单值：of, empty, never
    多值：from
    定时：interval, timer
    从事件创建：fromEvent
    从Promise创建：fromPromise
    自定义创建：create

转换操作：

    改变数据形态：map, mapTo, pluck
    过滤一些值：filter, skip, first, last, take
    时间轴上的操作：delay, timeout, throttle, debounce, audit, bufferTime
    累加：reduce, scan
    异常处理：throw, catch, retry, finally
    条件执行：takeUntil, delayWhen, retryWhen, subscribeOn, ObserveOn
    转接：switch

组合数据流：

    concat，保持原来的序列顺序连接两个数据流
    merge，合并序列
    race，预设条件为其中一个数据流完成
    forkJoin，预设条件为所有数据流都完成
    zip，取各来源数据流最后一个值合并为对象
    combineLatest，取各来源数据流最后一个值合并为数组

另，最好使用 $ 结尾的命名方式来表示Observable，例：input$。
