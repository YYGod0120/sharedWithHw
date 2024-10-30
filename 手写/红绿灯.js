function schedule(light, time) {
  return function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(light);
        resolve();
      }, time);
    });
  };
}
function red() {
  return schedule("red", 1000);
}
function blue() {
  return schedule("blue", 2000);
}
function green() {
  return schedule("green", 3000);
}
async function start() {
  await red()();
  await blue()();
  await green()();
  start();
}
start();
