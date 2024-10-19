// 1. deposit money for the betting
// 2. determine the number of lines to bet on
// 3. Collect the bet amount
// 4. spin the slot muchine
// 5. check if the user win
// 6. if win give the winning amount
// 7. play again

const prompt = require('prompt-sync')();

const deposit = () =>{

    while(true){
        const depositAmount = prompt('Enter a deposit amount: ');
        const numberDepositAmount = parseFloat(depositAmount)
        if(isNaN(numberDepositAmount) || numberDepositAmount <=0){
            console.log('Invalid deposit amount, try again');
        }else{
            return numberDepositAmount;
        }
    }
}

const numberOfLines = () =>{
    while(true){
        const Lines = prompt("Choose any number of lines to bet on from 1-3: ");
        const numOfLInes = parseInt(Lines);
        if(isNaN(numOfLInes) || numOfLInes == 0 || numOfLInes > 3){
            console.log('Choose number from 1 to 3');
        }else{
            return numOfLInes;
        }
    }

}

const depositAmount = deposit();
const numOfLInes = numberOfLines();
console.log('Deposit amount: '+ depositAmount);
console.log('Number of lines to bet on: '+ numOfLInes);