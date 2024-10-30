function divide(str) {
  //分割小数
  let int = str.split(".");
  let noint = int[1];
  let arr = int[0];
  let res = [];
  let part = [];
  let count = 0;
  let ans;
  for (let i = arr.length - 1; i > -1; i--) {
    part.unshift(arr[i]);
    if (count === 2 && i !== 0) {
      part.push(",");
      res.unshift(part.join(""));
      part = [];
      count = 0;
    } else {
      count++;
    }
  }
  if (part) {
    ans = part.join("") + "," + res.join("");
  } else {
    ans = res.join("");
  }
  ans = noint
    ? ans.slice(0, ans.length - 1) + "." + noint
    : ans.slice(0, ans.length - 1);
  return ans;
}
console.log(divide("1234567890232.123"));
console.log(divide("123456789"));
console.log(divide("1234.56"));
