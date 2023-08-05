# React同步与异步的更新模式

在React中有两种更新的模式 分别为同步更新和异步更新

## 同步模式
即传统的更新模式，React会一直执行WIP,直到WorkInProgress为null为止
```js
  function workLoopSync() {
    debugger
    // Already timed out, so perform work without checking if we need to yield.
    while (workInProgress !== null) {
      performUnitOfWork(workInProgress);
    }
  }
```

# 并发模式
即可中断的更新，在WorkInProgress为null或者shouldYield为true时，停止更新
```js
  function workLoopConcurrent() {
    // Perform work until Scheduler asks us to yield
    while (workInProgress !== null && !shouldYield()) {
      performUnitOfWork(workInProgress);
    }
  }
```
在调试栏中查看并发
# yield做了什么事
通过源代码我们发现同步更新与并发更新的差异只是并发更新中多了一个shouldYield
shouldYield到底做了些什么，我们来看一下源代码
```js
  var frameYieldMs = 5;
  var frameInterval = frameYieldMs;
  function shouldYieldToHost() {

    var timeElapsed = getCurrentTime() - startTime;

    if (timeElapsed < frameInterval) {
      // The main thread has only been blocked for a really short amount of time;
      // smaller than a single frame. Don't yield yet.
      return false;
    } // The main thread has been blocked for a non-negligible amount of time. We


    return true;
  }
```
我们发现在默认的并发情况情况下,React每帧有5ms的时间更新Fiber,如果Fiber仍然没有执行完成，则放权执行其他任务（浏览器或者其他js任务）