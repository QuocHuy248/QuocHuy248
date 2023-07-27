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


findIndexPosition(5, arr);
