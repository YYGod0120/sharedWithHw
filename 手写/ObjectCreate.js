function myObjectCreate(object) {
  function F() {}
  F.prototype = object;
  return new F();
}
//把传入的对象当作新对象的原型(prototype)
