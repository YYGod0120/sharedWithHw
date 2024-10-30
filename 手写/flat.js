const target = [1, [2, [3, 4, [8]], 5], 6];

function flatArray(array) {
  return array.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatArray(cur) : [cur]);
  }, []);
}
console.log(flatArray(target));

function flatObject(ob) {
  let newObj = {};
  function flat(obj, oldKey) {
    Object.entries(obj).forEach(([key, value]) => {
      let newKey = oldKey ? `${oldKey}.${key}` : key;
      if (typeof value === "object") {
        flat(value, newKey);
      } else {
        newObj[newKey] = value;
      }
    });
  }
  flat(ob);
  return newObj;
}
const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 } };
console.log(flatObject(source));
