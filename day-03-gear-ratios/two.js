import fs from "fs";
const input = fs
  .readFileSync("day-03-gear-ratios/input.txt", "utf-8")
  .split("\n");

const gears = new Array(input.length)
  .fill(0)
  .map(() => new Array(input[0].length).fill(0).map(() => []));

const isSymbol = (i, j, num) => {
  if (i < 0 || j < 0 || i >= input.length || j >= input[0].length) return false;

  if (input[i][j] === "*") gears[i][j].push(num);

  return input[i][j] !== "." && isNaN(input[i][j]);
};

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

    isSymbol(i, start - 1, num) || isSymbol(i, j, num);

    for (let k = start - 1; k <= j; k++) {
      isSymbol(i - 1, k, num) || isSymbol(i + 1, k, num);
    }
  }
});

let sum = 0;

for (let i = 0; i < gears.length; i++) {
  for (let j = 0; j < gears[0].length; j++) {
    if (gears[i][j].length === 2) {
      sum += gears[i][j][0] * gears[i][j][1];
    }
  }
}

console.log(sum);
