// 浅拷贝和深拷贝
// 浅拷贝一般都是复制基本类型，引用类型以及多重嵌套的类型得用深拷贝
// 浅拷贝只拷贝值，深拷贝是独立的个体。

//浅拷贝
const resource = {
  a: 1,
  b: 2,
  c: {
    d: 3,
  },
};
const copy1 = Object.assign({}, resource);
resource.c.d = 0;
console.log(copy1, resource);
// 扩展运算符
const array1 = [1, 2, 3];
const array2 = [...array1];
array1[0] = 0;
console.log(array1, array2);
// * 缺点都是不拷贝对象的继承属性，不拷贝枚举属性。
// * 可以拷贝symbol属性

// 深拷贝

//最简单的是stringfy和parse，但是缺点很多

// * 会忽略 undefined
// * 会忽略 symbol
// * 不能序列化函数
// * 无法拷贝不可枚举的属性
// * 无法拷贝对象的原型链
// * 拷贝 RegExp 引用类型会变成空对象
// * 拷贝 Date 引用类型会变成字符串
// * 对象中含有 NaN、Infinity 以及 -Infinity，JSON 序列化的结果会变成 null
// * 不能解决循环引用的对象，即对象成环 (obj[key] = obj)。

// 基础版深拷贝

//通过递归实现深拷贝
const deepExample = {
  a: {
    b: 0,
    c: null,
  },
  [Symbol("1")]: 1,
  obj: { name: "我是一个对象", id: 1 },
};
deepExample.c = deepExample;

function deepClone(obj, has = new Map()) {
  if (typeof obj !== "object" || obj === null) return obj;
  let newObj = Array.isArray(obj) ? [] : {};
  if (has.get(obj)) {
    return has.get(obj);
  }
  has.set(obj, obj);
  for (let key of Reflect.ownKeys(obj)) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      newObj[key] = deepClone(obj[key], has);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
const copy2 = deepClone(deepExample);
console.log("copy2:", copy2);
