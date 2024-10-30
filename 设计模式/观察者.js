function Subject() {
  this.observer = [];
  this.addObserver = function addObserver(observer) {
    this.observer.push(observer);
  };
  this.removeObserver = function removeObserver(observer) {
    this.observer = this.observer.filter((item) => item !== observer);
  };
  this.notify = function notify(data) {
    this.observer.forEach((item) => item.update(data));
  };
}
function Observer() {
  this.update = function update(data) {
    console.log(data);
  };
}

// Usage
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notify("Hello, world!");
// Output:
// Received data: Hello, world!
// Received data: Hello, world!

subject.removeObserver(observer1);

subject.notify("Goodbye, world!");
