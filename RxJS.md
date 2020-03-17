# Intro(1.html)
- RxJS is a library for **reactive programming** using **observables**. It makes writing **asynchronous or callback based code** easier.
- RxJS provides multiple functions to **process observables in a funnel like manner**. The resulting code is more idiomatic than code written in vanilla Javascript.
```js
var button = document.querySelector('button');

button.addEventListener('click', (event) => { console.log(event) });//vanilla

Rx.Observable.fromEvent(button, 'click')
.throttleTime(1000)
.map (
    (event) => event.screenX
)
.subscribe (
    (coordinate) => { console.log(coordinate) }
);
```
# Observable, observer and subscription
![](images/2020-03-17-18-13-16.png)
## Observable
- Observable is a wrapper around a data source. This data source is generally a stream.

### Custom observables using create()
```js
Rx.Observable.create((observable) => {
    observable.next('value 1')
    // observable.error('error') //observable stops when error encountered
    setTimeout(() => { observable.complete() }, 2000);
    observable.next('value 2')

    button.onclick = function(event) {
        observer.next(event)
    }
}).subscribe(observer)
```
## Observer
- It observes the observable and performs some actions when:
    1. **next()**: New data is returned.
    2. **error()**: Error encountered. Observable shuts down after error is encountered. But complete() does not get called.
    3. **complete()**: Job done. But some observables like clicklistener never finish

![](images/2020-03-17-18-19-30.png)
```js
const observer = {
    next: function(value) {
        console.log(value)
    },
    error: function(error) {
        console.log(error)
    },
    complete: function() {
        
    }
}
Rx.Observable.fromEvent(button, click)
    .subscribe(observer)
```
## Subscription
- Observer listens to an observable through a **subscription**.
- To prevent memory leaks unsubscribe from an observer when work is done.
```js
subscription.unsubscribe()
```
