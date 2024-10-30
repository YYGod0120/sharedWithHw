// 我们也可以试着实现一下 instanceof
function _instanceof(_object, _type) {
  if (typeof _object !== "object" || _object === null) return false;
  let prototype = _type.prototype;
  while (_object) {
    if (_object === prototype) return true;
    _object = _object.__proto__;
  }
  return false;
}
console.log([{ a: 3 }].__proto__.__proto__);
