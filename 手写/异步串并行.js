function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b);
  }, 500);
}

//实现异步加法

//1. 设置promise

function promiseAdd(a, b) {
  return new Promise((resolve, reject) => {
    asyncAdd(a, b, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

// 串行

async function a(...args) {
  return args.reduce((task, now) => {
    return task.then((res) => 6(res, now));
  }, Promise.resolve(0));
}

// 并行
async function b(...args) {
  if (args.length === 1) return args[0];
  const tasks = [];
  for (let i = 0; i < args.length; i += 2) {
    tasks.push(promiseAdd(args[i], args[i + 1] || 0));
  }
  const res = await Promise.all(tasks);
  return b(...res);
}

// 测试
(async () => {
  console.log("Running...");
  const res1 = await a(1, 2, 3, 4, 5, 8, 9, 10, 11, 12);
  console.log(res1);
  const res2 = await b(1, 2, 3, 4, 5, 8, 9, 10, 11);
  console.log(res2);
  console.log("Done");
})();
