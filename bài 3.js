function check(str) {
  let count = 0;
  let arr = str.split("");
  let vowelCharacter = "aoeui";
  for (let i = 0; i < arr.length; i++) {
    if (vowelCharacter.includes(arr[i])) {
      count++;
    }
  }
  if (count == 0) {
    return console.log("false");
  }
  if (count > 0) {
    return console.log(`${count}`);
  }
}
let str = "Code gym Hue";
check(str);
