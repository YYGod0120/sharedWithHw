function Scheduler(count) {
  this.count = count;
  this.currentTask = 0;
  this.queue = [];
  this.addTask = function (time, name) {
    let task = function () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(name);
          resolve();
        }, time);
      });
    };
    this.queue.push(task);
    this.schedule();
  };
  this.schedule = function () {
    this.currentTask++;
    if (this.count < this.currentTask && this.queue.length) {
      let task = this.queue.shift();
      task().then(() => {
        this.currentTask--;
        this.schedule();
      });
    }
  };
}

// 测试
const scheduler = new Scheduler(2);
scheduler.addTask(10000, "1");
scheduler.addTask(5000, "2");
scheduler.addTask(3000, "3");
scheduler.addTask(4000, "4");
