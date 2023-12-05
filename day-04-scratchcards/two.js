import fs from "fs";
const input = fs
  .readFileSync("day-04-scratchcards/input.txt")
  .toString()
  .split("\n");

input.forEach((line, i) => {
  input[i] = line.replace("\r", "");
});

let cards = new Array(input.length).fill(1);

input.forEach((card, i) => {
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

  for (let j = 0; j < matches.length; j++) {
    cards[i + j + 1] = cards[i + j + 1] + cards[i];
  }
});

const sum = cards.reduce((a, b) => a + b, 0);
console.log(sum);
