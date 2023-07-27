function findIndexPosition(value, arr) {
  let flag = true;
  for (let i = 0; i < arr.length; i++) {
    if (value == arr[i]) {
      flag = true;
      break;
    } else {
      flag = false;
    }
  }
  if (flag == true) {
    return console.log(`${value} nằm trong mảng`);
  }
  if (flag == false) {
    return console.log(`${value} không nằm trong mảng`);
  }
}
let arr = [1, 2, 3, 4, 5, 6];
// let number = parseInt(prompt("Nhập vào giá trị bất kỳ"));
// let result = arr.indexOf(number);
// if (result == -1) {
//   console.log("Số nguyên không nằm trong mảng arr");
// } else if (result != -1) {
//   console.log("Số nguyên nằm trong mảng");
// }

findIndexPosition(5, arr);
