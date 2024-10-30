function mySetTimeIntervel(fn, t) {
  let timer = null;
  function reapet() {
    timer = setTimeout(() => {
      fn();
      reapet();
    }, t);
  }
  timer = setTimeout(() => {
    reapet();
  }, t);
  return {
    cancel: () => {
      clearTimeout(timer);
    },
  };
}

// 测试
var a = mySetTimeIntervel(() => {
  console.log(111);
}, 1000);

// 终止定时器
a.cancel();

const mySetTimeout = (fn, t) => {
  const timer = setInterval(() => {
    clearInterval(timer);
    fn();
  }, t);
};
