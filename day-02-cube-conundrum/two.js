import fs from "fs";
const input = fs
  .readFileSync("day-02-cube-conundrum/input.txt")
  .toString()
  .split("\n");

const parseGame = (game) => {
  const id = game.split(":")[0].split(" ")[1];

  const setStrings = game.split(":")[1].split(";");
  const sets = setStrings.map((set) => {
    const colors = set.split(",").map((color) => color.trim());
    const colorCount = colors.reduce((acc, color) => {
      const [count, colorName] = color.split(" ");
      acc[colorName] = count;
      return acc;
    }, {});

    return colorCount;
  });

  return {
    id,
    sets,
  };
};

const games = input.map((game) => parseGame(game));

const getPower = (game) => {
  const { sets } = game;
  let maxRed = 0;
  let maxGreen = 0;
  let maxBlue = 0;

  sets.forEach((set) => {
    const red = Number(set.red) || 0;
    const green = Number(set.green) || 0;
    const blue = Number(set.blue) || 0;

    if (red > maxRed) maxRed = red;
    if (green > maxGreen) maxGreen = green;
    if (blue > maxBlue) maxBlue = blue;
  });

  return maxRed * maxGreen * maxBlue;
};

const sum = games.reduce((acc, game) => acc + getPower(game), 0);

console.log(sum);
