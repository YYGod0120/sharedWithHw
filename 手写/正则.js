function isCardNo(number) {
  let num = "" + number;
  const regx = /\d(?=(\d{3})+$)/g;
  let [intt, other] = num.split(".");
  const b = intt.replace(regx, "$&,");
  return b + "." + other;
}
console.log(isCardNo("1234.56"));
