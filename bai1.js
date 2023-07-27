//Câu 1Quadratic equation 2

function solveQuadraticequation2(a, b, c) {
  if (a == 0) {
    if (b == 0 && c == 0) {
      return console.log("Phương trình có vô số nghiệm");
    }
    if (b == 0 && c != 0) {
      return console.log("Phương trình vô nghiệm");
    }
    if (b != 0) {
      return console.log(`Phương trình có 1 nghiệm duy nhất là -${c / b}`);
    }
  }
  if (a != 0) {
    let denta = b * b - 4 * a * c;
    if (denta < 0) {
      return console.log("Phương trình vô nghiệm");
    }
    if (denta == 0) {
      return console.log(`Phương trình có nghiệm kép ${(-b / 2) * a}`);
    }
    if (denta > 0) {
      return console.log(
        `Phương trình có 2 nghiệm phân biệt x1= ${
          (-b + Math.sqrt(denta)) / (2 * a)
        } x2= ${(-b - Math.sqrt(denta)) / (2 * a)} `
      );
    }
  }
}
solveQuadraticequation2(18, 12, -20);
