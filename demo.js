const test = new Promise((res) => {
  console.log(1);
  setTimeout(() => {
    res(111);
  });
  console.log(3);
});
test.then(
  (res) => {
    console.log(res);
  },
  (error) => {
    console.log(error);
  }
);
