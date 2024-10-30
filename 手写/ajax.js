function ajax() {
  let xhr = new XMLHttpRequest(); //实例化，以调用方法
  xhr.open("get", "url"); //参数2，url。参数三：异步
  xhr.onload = function () {
    if (xhr.status !== 200) {
      alert("Error");
    }
    let res = xhr.responseText;
    //JSON.parse() 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象
    let object = JSON.parse(res);
    console.log(object);
  };
  xhr.send(); //用于实际发出 HTTP 请求。不带参数为GET请求
}
console.log(typeof ajax);
