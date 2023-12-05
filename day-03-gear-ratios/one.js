import fs from "fs";
const input = fs
  .readFileSync("day-03-gear-ratios/input.txt", "utf-8")
  .split("\n");

const isSymbol = (i, j) => {
  if (i < 0 || j < 0 || i >= input.length || j >= input[0].length) return false;
  return input[i][j] !== "." && isNaN(input[i][j]);
};

let sum = 0;

input.forEach((row, i) => {
  let start = 0;
  let j = 0;

  while (j < row.length) {
    start = j;
    let num = "";

    while (j < row.length && !isNaN(row[j])) {
      num += row[j];
      j++;
    }

    if (num === "") {
      j++;
      continue;
    }

    num = Number(num);

    if (isSymbol(i, start - 1) || isSymbol(i, j)) {
      sum += num;
      j++;
      continue;
    }

    for (let k = start - 1; k <= j; k++) {
      if (isSymbol(i - 1, k) || isSymbol(i + 1, k)) {
        sum += num;
        break;
      }
    }
  }
});

console.log(sum);
