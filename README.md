### Slot Machine Game
#### Overview
This project is a simple console-based Slot Machine game built using Node.js. Players can deposit money, bet on multiple lines, spin the slot machine, and win based on matching symbols. The game allows players to keep playing as long as they have balance in their account. The winnings are calculated based on the bet amount and the matching symbols.

#### Features

- Players can deposit money into their account.
- Players can choose the number of lines to bet on (1 to 3).
- Players can choose their bet amount per line.
- The slot machine spins, and the results are displayed in a 3x3 grid.
- If the player wins, they earn an amount based on the bet and the symbols that match.
- The game allows players to continue as long as they have balance.
- Players can exit the game anytime.

#### How the Game Works

1. Deposit Money: The player starts by depositing a chosen amount into their account.
2. Select Number of Lines: The player chooses to bet on 1 to 3 lines.
3. Place Bet: The player enters their bet amount per line. The total bet is calculated as (bet per line * number of lines).
4. Spin the Slot Machine: The slot machine spins, generating random symbols across a 3x3 grid.
5. Check Winnings: The game checks if the symbols match on the selected lines. If a line matches, the player wins based on the symbol's value.
6. Play Again: Players can choose to play again or exit the game. The game continues as long as the player has a balance in their account.

#### Symbols and Values

- A: 2 occurrences, pays 2x the bet.
- B: 4 occurrences, pays 4x the bet.
- C: 6 occurrences, pays 6x the bet.
- D: 8 occurrences, pays 8x the bet.

###Code Explanation

####Functions

- deposit(): Allows players to deposit money into their account.
- numberOfLines(): Prompts the player to choose how many lines to bet on.
- getBet(deposit, numOfLines): Collects the bet amount per line and ensures it is within the player's available balance.
- spin(): Spins the slot machine, randomly generating symbols for each reel.
- transpose(reels): Transposes the reels into rows for easier evaluation of winning lines.
- getWinnings(rows, bet, lines): Calculates the total winnings based on matching symbols on the selected lines.
- game(): Runs the main game loop, controlling the flow of the game.

####Example

You have a balance of $100
Choose any number of lines to bet on from 1-3: 3
Enter the bet per line: 10
Spinning...

A | A | A

B | C | D

C | C | B
You won, $60!
Do you want to play again (y/n)? y

####Future Improvements

- Add more symbols with different payout values.
- Implement animations for spinning reels.
- Create a GUI version of the game.
- Add a feature for players to withdraw winnings.

###End
