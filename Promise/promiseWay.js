function myPromiseResolve(param) {
  if (param instanceof Promise) return param;
  return new Promise((resolve, reject) => {
    if (param && param.then && typeof param.then === "function") {
      param.then(resolve, reject);
    } else {
      resolve(param);
    }
  });
}
myPromiseResolve(
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("ok");
    }, 3000);
  })
)
  .then((data) => {
    console.log(data, "success");
  })
  .catch((err) => {
    console.log(err, "error");
  });
//直接返回reject结果
function myPromiseReject(reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  });
}

Promise.prototype.myPromiseFinally = function (callback) {
  return this.then(
    (data) => {
      return Promise.resolve(callback()).then(() => data);
    },
    (err) => {
      return Promise.resolve(callback()).then(() => {
        throw err;
      });
    }
  );
};
Promise.resolve(456)
  .myPromiseFinally(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(123);
        resolve(123);
      }, 30);
    });
  })
  .then((data) => {
    console.log(data, "success");
  })
  .catch((err) => {
    console.log(err, "error");
  });

function isPromise(val) {
  return typeof val.then === "function"; // (123).then => undefined
}
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let ans = [];
    for (let i = 0; i < promises.length; i++) {
      if (promises[i] instanceof Promise) {
        Promise.resolve(promises[i]).then(
          (data) => {
            ans[i] = data;
            count++;
            if (count === promises.length) {
              resolve(ans);
            }
          },
          (err) => {
            reject(err);
          }
        );
      } else {
        ans[i] = promises[i];
        count++;
        if (count === promises.length) {
          resolve(ans);
        }
      }
    }
  });
}
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

myPromiseAll([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
//
function myPromiseAllSettled(promises) {
  return new Promise((resolve, reject) => {
    let ans = [];
    let count = 0;
    function setData(index, s, data) {
      ans[index] = { status: s, value: data };
      count++;
      if (count === promises.length) {
        resolve(ans);
      }
    }
    for (let i = 0; i < promises.length; i++) {
      if (isPromise(promises[i])) {
        promises[i].then(
          (data) => {
            setData(i, "fulfilled", data);
          },
          (err) => {
            setData(i, "rejected", err);
          }
        );
      } else {
        setData(i, "fulfilled", promises[i]);
      }
    }
  });
}
myPromiseAllSettled([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
//一个成功直接返回
function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) return resolve();
    for (let item of promises) {
      if (item instanceof Promise) {
        item.then(
          (data) => {
            resolve(data);
          },
          (err) => {
            reject(err);
          }
        );
      } else {
        resolve(item);
      }
    }
  });
}
myPromiseRace([p2, p3]).then((values) => {
  console.log(values);
});

console.log(Math.ceil(1 / 3));
