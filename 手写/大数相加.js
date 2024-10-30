function bigAdd(num1, num2) {
  let max = Math.max(num1.length, num2.length);

  // 将 num1 补齐至与 num2 相同长度
  if (num1.length < max) {
    num1 = num1.padStart(max, "0"); // 使用 padStart 更简洁
  }

  // 将 num2 补齐至与 num1 相同长度
  if (num2.length < max) {
    num2 = num2.padStart(max, "0"); // 使用 padStart 更简洁
  }

  let result = "";
  let more = 0; // 用于存储进位

  // 从最后一位开始相加
  for (let j = max - 1; j >= 0; j--) {
    let sum = more + Number(num1[j]) + Number(num2[j]);
    more = sum >= 10 ? 1 : 0; // 进位逻辑改为 sum >= 10
    result = String(sum % 10) + result;
  }

  // 如果还有剩余的进位，需要加到最前面
  if (more) result = more + result;

  return result;
}

console.log(bigAdd("12345678901234567890", "98765432109876543210"));
