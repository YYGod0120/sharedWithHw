function add(...args) {
  let fn = function (...newArgs) {
    let arg = args.concat(newArgs);
    return add.apply(null, arg);
  };
  fn.valueOf = function () {
    return args.reduce((pre, cur) => pre + cur);
  };
  return fn;
}

function add2(a, b) {
  return a + b;
}
function curry(fn) {
  let fnLength = fn.length;
  let arg = [];
  return function calc(...newArgs) {
    arg = [...arg, ...newArgs];
    if (arg.length < fnLength) {
      return calc;
    } else {
      return fn.apply(this, arg);
    }
  };
}
const add1 = curry(add2);

console.log(add1(1)(2));
console.log(add(1)(2)(3).valueOf());
