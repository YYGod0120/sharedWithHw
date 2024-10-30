// call
const yy = {
  name: "yy",
  age: "20",
};
const yy2 = {
  name: "yy2",
  age: "21",
};
function sayName(word1, word2) {
  console.log(this.name);
  console.log(word1, word2);
}
// sayName("测试");
// sayName.call(yy, "yy", "yy2");
// sayName.call(yy2, "yy3", "yy4");
// sayName.apply(yy2, ["yy3", "yy4"]);

//自己手搓
// apply换成args
Function.prototype.mycall = function mycall(context, ...args) {
  let self = this;
  let onlyOne = Symbol();
  context[onlyOne] = self;
  let res = context[onlyOne](...args);
  return res ? res : null;
};
sayName.mycall(yy, "yy1", "yy2");

// bind
Function.prototype.mybind = function mybind(context) {
  let self = this;
  return function bind(...args) {
    return self.apply(context, args);
  };
};
// const yysay = sayName.mybind(yy);
// yysay("yy1", "yy");
