function iteratorGenerator(list) {
  let index = 0;
  return {
    next: function () {
      let done = index > list.length - 1;
      let value = index > list.length - 1 ? undefined : list[index++];
      return { done: done, value: value };
    },
  };
}
var iterator = iteratorGenerator(["1号选手", "2号选手", "3号选手"]);

console.log(iterator.next());
