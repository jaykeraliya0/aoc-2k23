import fs from "fs";
const input = fs.readFileSync("day-1/input.txt", "utf8").split("\n");

input.forEach((line, i) => {
  input[i] = line.replace("\r", "");
});

const numbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function parse(input) {
  for (let i = 0; i < input.length; i++) {
    if (isNaN(parseInt(input[i]))) {
      for (let key in numbers) {
        if (input[i] === key[0]) {
          const str = input.slice(i, i + key.length);
          if (str === key) {
            input = input.replace(key, numbers[key]);
          }
        }
      }
    }
  }
  return input;
}

function parseReverse(input) {
  for (let i = input.length - 1; i >= 0; i--) {
    if (isNaN(parseInt(input[i]))) {
      for (let key in numbers) {
        if (input[i] === key[key.length - 1]) {
          const str = input.slice(i - key.length + 1, i + 1);
          if (str === key) {
            input = input.replace(key, numbers[key]);
          }
        }
      }
    }
  }
  return input;
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

input.forEach((line, i) => {
  const num = parseInt(
    getFirstNumber(parse(line)) + getLastNumber(parseReverse(line))
  );
  sum += num;
});

console.log("part 2: ", sum);
