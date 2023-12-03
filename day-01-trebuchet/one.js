import fs from "fs";
const input = fs
  .readFileSync("day-01-calibration-value/input.txt", "utf8")
  .split("\n");

input.forEach((line, i) => {
  input[i] = line.replace("\r", "");
});

function getFirstNumber(str) {
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      return str[i];
    }
  }
}

function getLastNumber(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (!isNaN(str[i])) {
      return str[i];
    }
  }
}

let sum = 0;

input.forEach((line, i) => {
  const num = parseInt(getFirstNumber(line) + getLastNumber(line));
  sum += num;
});

console.log("part 1: ", sum);
