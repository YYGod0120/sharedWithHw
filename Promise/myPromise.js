//简易版promise
function myPromise(construct) {
  let self = this;
  self.status = "PENDING";
  self.value = null;
  self.fillfuledCallback = [];
  self.rejectedCallback = [];

  function resolve(data) {
    if (self.status === "PENDING") {
      self.value = data;
      self.status = "FILLFULED";
      self.fillfuledCallback.forEach((item) => item(self.value));
    }
  }
  function reject(data) {
    if (self.status === "PENDING") {
      self.value = data;
      self.status = "REJECTED";
      self.rejectedCallback.forEach((item) => item(self.value));
    }
  }
  try {
    construct(resolve, reject);
  } catch {
    reject("error");
  }
}

myPromise.prototype.then = function myThen(onResolve, onReject) {
  let self = this;
  return new myPromise((resolve, reject) => {
    if (self.status === "PENDING") {
      self.fillfuledCallback.push((value) => onResolve(value));
      self.rejectedCallback.push((value) => onReject(value));
    }
    if (self.status === "FILLFULED") {
      setTimeout(() => {
        resolve(onResolve(self.value));
      }, 0);
    }
    if (self.status === "REJECTED") {
      reject(onReject(self.value));
    }
  });
};
var p = new myPromise(function (res) {
  console.log("start");

  res(111);

  console.log("end");
});
setTimeout(() => {
  console.log("late");
}, 10);
p.then(function (x) {
  console.log(x * 2);
  return x * 2;
}).then((x) => {
  console.log(x + 1);
});

console.log(123);
