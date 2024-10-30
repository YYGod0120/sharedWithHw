// * throttle
// * 节流就是多次触发只执行第一次，每隔一段时间执行一次函数
function mythrottle(fn) {
  let timer = null;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, 2000);
  };
}

// * 测试
function test_throttle() {
  console.log("快速刷新");
}
const test_t = mythrottle(test_throttle);
test_t();
test_t();
test_t();

// * debounce
// * 防抖就是多次触发只执行最后一次，每次触发都会重新计时。
function mydebounce(fn) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, 2000);
  };
}
