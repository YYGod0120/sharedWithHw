const str1 = ["flower", "flow", "flight"];
const str2 = ["dog", "racecar", "car"];
function findStr(strs) {
  let i = 0;
  while (i < strs.length) {
    let head = strs[0].slice(0, i + 1);
    const a = strs.every((item) => {
      return item.startsWith(head);
    });
    if (a) {
      i++;
    } else {
      break;
    }
  }
  return strs[0].slice(0, i);
}
console.log(findStr(str2));
