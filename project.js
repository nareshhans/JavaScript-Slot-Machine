// 1. deposit money for the betting
// 2. determine the number of lines to bet on
// 3. Collect the bet amount
// 4. spin the slot muchine
// 5. check if the user win
// 6. if win give the winning amount
// 7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOLS_VALUES = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again");
    } else {
      return numberDepositAmount;
    }
  }
};

const numberOfLines = () => {
  while (true) {
    const Lines = prompt("Choose any number of lines to bet on from 1-3: ");
    const numOfLInes = parseInt(Lines);
    if (isNaN(numOfLInes) || numOfLInes == 0 || numOfLInes > 3) {
      console.log("Choose number from 1 to 3");
    } else {
      return numOfLInes;
    }
  }
};

const getBet = (deposit, numOfLines) => {
  while (true) {
    const bet = prompt("Enter the bet per line: ");
    const betAmount = parseInt(bet);
    if (
      isNaN(betAmount) ||
      betAmount == 0 ||
      betAmount > deposit / numOfLines
    ) {
      console.log("Invalid bet, try again");
    } else {
      return betAmount;
    }
  }
};

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reels;
};

const reels = spin();
// console.log(reels);

const transpose = (reels) => {
  const rows = [];

  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }

  return rows;
};

const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};

const realWheel = transpose(reels)

const getWinnings = (rows, bet, lines) => {
  let winnings = 0;
  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;
    for (const symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }
    if (allSame) {
      winnings += bet * SYMBOLS_VALUES[symbols[0]];
    }
  }
  return winnings;
};

const game = () => {
  let balance = deposit();
  while(true){
    console.log("You have a balance of $" + balance);
    const numOfLInes = numberOfLines();
    const betAmount = getBet(balance,numOfLInes);
    balance -= betAmount * numOfLInes;
    const winning = getWinnings(realWheel,betAmount,numOfLInes);
    balance += winning;
    printRows(realWheel)
    console.log('You won, $' + winning.toString());

    if(balance <= 0){
      break;
    }
    const playAgain = prompt("Do you want to play agin (y/n)? ");
    if(playAgain !='y') break;

  }
}
game();





















// const game = () => {
//   let balance = deposit();

//   while (true) {
//     console.log("You have a balance of $" + balance);
//     const numberOfLines = getNumberOfLines();
//     const bet = getBet(balance, numberOfLines);
//     balance -= bet * numberOfLines;
//     const reels = spin();
//     const rows = transpose(reels);
//     printRows(rows);
//     const winnings = getWinnings(rows, bet, numberOfLines);
//     balance += winnings;
//     console.log("You won, $" + winnings.toString());

//     if (balance <= 0) {
//       console.log("You ran out of money!");
//       break;
//     }

//     const playAgain = prompt("Do you want to play again (y/n)? ");

//     if (playAgain != "y") break;
//   }
// };

// game();



// console.log('Deposit amount: '+ balance);
// console.log('Number of lines to bet on: '+ numOfLInes);
// console.log('Bet amount: '+ betAmount);
