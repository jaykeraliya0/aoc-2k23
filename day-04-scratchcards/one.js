import fs from "fs";
const input = fs
  .readFileSync("day-04-scratchcards/input.txt")
  .toString()
  .split("\n");

input.forEach((line, i) => {
  input[i] = line.replace("\r", "");
});

let sum = 0;

input.forEach((card) => {
  const winningNumbers = card
    .split(":")[1]
    .split("|")[0]
    .split(" ")
    .filter((n) => n !== "");

  const ourNumbers = card
    .split(":")[1]
    .split("|")[1]
    .split(" ")
    .filter((n) => n !== "");

  const matches = ourNumbers.filter((n) => winningNumbers.includes(n));

  sum += parseInt(2 ** (matches.length - 1));
});

console.log(sum);
