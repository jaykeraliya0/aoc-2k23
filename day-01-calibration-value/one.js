import fs from "fs";
const input = fs.readFileSync("day-1/input.txt", "utf8").split("\n");

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].replace("\r", "");
}

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

for (let i = 0; i < input.length; i++) {
  const num = parseInt(getFirstNumber(input[i]) + getLastNumber(input[i]));
  sum += num;
}

console.log("part 1: ", sum);
