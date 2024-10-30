function jsonp(url, param, callback) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    window[callback] = function (data) {
      resolve(data);
      document.removeChild(script);
    };
    let params = [];
    for (let key in param) {
      arr.push(`${key}=${params[key]}`);
    }
    script.type = "text/javascript";
    script.src = `${url}?callback=${callback}&${arr.join("&")}`;
    document.body.appendChild(script);
  });
}
