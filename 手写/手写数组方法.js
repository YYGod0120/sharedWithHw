//forEach
Array.prototype.myForEach = function myForEach(fn, thisArg) {
  if (typeof fn !== "function") {
    throw "Error: fn is not function";
  }
  let self = this;
  for (let i = 0; i < self.length; i++) {
    fn.call(thisArg, self[i], i, self);
  }
};
[1, 2, , 3].myForEach((item, index) => {
  console.log("forEach", item);
});
// map
Array.prototype.myMap = function myMap(fn, thisArg) {
  if (typeof fn !== "function") {
    throw "cuowu";
  }
  let self = this;
  let ans = [];
  for (let i = 0; i < self.length; i++) {
    if (self[i]) ans[i] = fn.call(thisArg, self[i], i, self);
  }
};
const a = [1, , 2, 3].myMap((item, index) => {
  return item + index;
});
console.log("myMap", a);

// filter 扔掉不符合的
Array.prototype.myFilter = function myFilter(fn, thisArg) {
  if (typeof fn !== "function") {
    throw "Error";
  }
  let self = this;
  let res = [];
  for (let i = 0; i < self.length; i++) {
    if (fn.call(thisArg, self[i], i, self)) {
      res[i] = self[i];
    }
  }
  return res;
};
const b = [1, 2, 3].myFilter((item) => {
  return item === 1;
});
console.log("myFilter", b);

//some 一个过就是true
//every 全部过才是true

Array.prototype.mySome = function mySome(fn, thisArg) {
  if (typeof fn !== "function") {
    throw "error";
  }
  let self = this;
  for (let i = 0; i < self.length; i++) {
    if (fn.call(thisArg, self[i], i, self)) {
      return true;
    }
  }
  return false;
};
Array.prototype.myEvery = function myEvery(fn, thisArg) {
  if (typeof fn !== "function") {
    throw "error";
  }
  let self = this;
  for (let i = 0; i < self.length; i++) {
    if (!fn.call(thisArg, self[i], i, self)) {
      return false;
    }
  }
  return true;
};

// find findIndex
Array.prototype.myFind = function myFind(fn, thisArg) {
  if (typeof fn !== "function") {
    throw "error";
  }
  let self = this;
  for (let i = 0; i < self.length; i++) {
    if (fn.call(thisArg, self[i], i, self)) {
      return self[i];
    }
  }
  return undefined;
};
Array.prototype.myFindIndex = function myFindIndex(fn, thisArg) {
  if (typeof fn !== "function") {
    throw "error";
  }
  let self = this;
  for (let i = 0; i < self.length; i++) {
    if (fn.call(thisArg, self[i], i, self)) {
      return i;
    }
  }
  return -1;
};

// reduce
Array.prototype.myReduce = function (fn, initValue) {
  let self = this;
  let init = initValue ? initValue : self[0];
  for (let i = initValue ? 0 : 1; i < self.length; i++) {
    init = fn.call(this, init, self[i], i, self);
  }
  return init;
};
const c = [1, 2, 3].myReduce((prev, cur, index, self) => {
  console.log(prev, cur, index, self);
  return prev + cur;
}, 4);
console.log(c);

//reduce to map
Array.prototype.reduceToMap = function (fn) {
  let self = this;
  return self.reduce((pre, cur) => {
    return pre.concat([fn(cur)]);
  }, []);
};
console.log(
  [1, 2, 3, 4].reduceToMap((item) => {
    return item + 1;
  })
);
