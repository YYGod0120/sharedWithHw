var b = 123;
var a = () => {
  console.log(b, "2");
};
a();

function a() {
  console.log(b, "1");
}
