function quickSort(arr) {
  if (arr.length === 0) return arr;
  let left = [];
  let right = [];
  let mid = Math.floor(arr.length / 2);

  for (let i = 0; i < arr.length; i++) {
    if (i !== mid) {
      if (arr[i] <= arr[mid]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }

  return quickSort(left).concat(arr[mid], quickSort(right));
}

// 功能测试
const arr1 = [1, 6, 2, 7, 3, 8, 4, 9, 5, 6];
console.log(quickSort(arr1));
