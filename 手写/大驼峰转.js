let test = {
  UserId: 123,
  Content: {
    TextId: 123,
    ValueCon: "yesyesyes",
  },
};
function change(str) {
  let ans = [];
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    if (i !== 0 && str[i].toUpperCase() === str[i]) {
      ans.push(str.slice(start, i));
      start = i;
    }
  }
  ans.push(str.slice(start, str.length));
  console.log(ans.join("_").toLowerCase());
  return ans.join("_").toLowerCase();
}
function dfs(obj) {
  let newobj = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      let newkey = change(key);
      newobj[newkey] = dfs(obj[key]);
    } else {
      let newkey = change(key);
      newobj[newkey] = obj[key];
    }
  }
  return newobj;
}
console.log(dfs(test));
