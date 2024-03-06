function calculateSquareArea(side) {
    return side * side;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the length of the square side: ', (sideLength) => {
  sideLength = parseFloat(sideLength);

  if (!isNaN(sideLength)) {
    const area = calculateSquareArea(sideLength);
    console.log(`The area of the square with side length ${sideLength} is ${area}`);
  } else {
    console.log("Invalid input for square side length!");
  }

  rl.close();
});
