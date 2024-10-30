// 例子
function readFile(file) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(file);
      resolve(file);
    }, 1000);
  });
}

function asyncFunc(generator) {
  let gen = generator();
  function next(data) {
    let { value, done } = gen.next(data);
    if (done) return;
    //value是个promise
    value.then((data) => {
      gen.next(data);
    });
  }
  next();
}

asyncFunc(function* () {
  // 生成器函数：控制代码一步步执行
  let data = yield readFile("a.js"); // 等这一步骤执行执行成功之后，再往下走，没执行完的时候，直接返回
  data = yield readFile(data + "b.js");
  return data;
});
