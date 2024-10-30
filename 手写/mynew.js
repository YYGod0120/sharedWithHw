// * new
function Person(name, age) {
  this.name = name;
  this.age = age;
  // return {'a':'返回一个对象'} 可能构造函数会返回一个对象
}
Person.prototype.sayHello = function sayHello() {
  console.log("Hello,I am", this.name);
};
const yy = new Person("yy", 18);
yy.sayHello();

// * my new
function myNew(Constructor, ...args) {
  //  let newObj = Object.create(Constructor.prototype);
  const newObj = {};
  newObj.__proto__ = Constructor.prototype;
  //改变this
  const res = Constructor.apply(newObj, args);
  return res ? res : newObj;
}
const yy2 = myNew(Person, "yy", 18);
yy2.sayHello();
