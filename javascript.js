let playerScore = 0;
let computerScore = 0;

function getComputerChoice(x) {
    if (x <= 33) {
        return "rock";
    } else if (x <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection,computerSelection) {
    switch (true) {
        case playerSelection === "rock" && computerSelection === "scissors":
            playerScore += 1;
            return "You Win! Rock beats Scissors!";
            break;
        case playerSelection === "paper" && computerSelection === "rock":
            playerScore += 1;
            return "You Win! Paper beats Rock!";
            break;
        case playerSelection === "scissors" && computerSelection === "paper":
            playerScore += 1;
            return "You Win! Scissors beats Paper!";
            break;
        case playerSelection === "scissors" && computerSelection === "rock":
            computerScore += 1;
            return "You Lose! Rock beats Scissors!";
            break;
        case playerSelection === "rock" && computerSelection === "paper":
            computerScore += 1;
            return "You Lose! Paper beats Rock!";
            break;
        case playerSelection === "paper" && computerSelection === "scissors":
            computerScore += 1;
            return "You Lose! Scissors beat Paper!";
            break;
        case playerSelection === "rock" && computerSelection === "rock":
            return "You Tie! Rock equals Rock!";
            break;
        case playerSelection === "paper" && computerSelection === "paper":
            return "You Tie! Paper equals Paper!";
            break;
        case playerSelection === "scissors" && computerSelection === "scissors":
            return "You Tie! Scissors equal Scissors!";
            break;
    }
    }

    function game() {
        for (let i = 0; i < 5; i++) {
            if (i == 0) {
                console.log(playRound(prompt("Rock Paper Scissors").toLowerCase(),getComputerChoice(Math.random() * 100)));
            } else if (i == 1) {
                console.log(playRound(prompt("Rock Paper Scissors").toLowerCase(),getComputerChoice(Math.random() * 100)));
            } else if (i == 2) {
                console.log(playRound(prompt("Rock Paper Scissors").toLowerCase(),getComputerChoice(Math.random() * 100)));
            } else if (i == 3) {
                console.log(playRound(prompt("Rock Paper Scissors").toLowerCase(),getComputerChoice(Math.random() * 100)));
            } else if (i == 4) {
                console.log(playRound(prompt("Rock Paper Scissors").toLowerCase(),getComputerChoice(Math.random() * 100)));
            }
        }
    }

    game();

    function gameWinner() {
        console.log(`You scored ${playerScore}`);
        console.log(`Computer scored ${computerScore}`);

        if (playerScore > computerScore) {
            console.log("You Win the Game!");
        } else if (playerScore < computerScore) {
            console.log("You Lose the Game!");
        } else {
            console.log("It's a Tie!");
        }
    }

    gameWinner();

    // Q1: For the GameWinner function, I have a question about it. Does a function call go in order of when it is called? Since
    // I ended calling gameWinner() after game() it called it after? Not all at the same time?
    // ANSWER:

    // Q2: Was there another way to return randomized choices from the computer without having to use an array? (havent learned yet)
    // ANSWER: Yes, here are two more ways this was achieved.
    // SOLUTION 1:
    // const getComputerChoice= () => {
    //    const randomNumber = (Math.floor(Math.random() * 3))
    //    if (randomNumber === 0){
    //      return 'Rock';
    //    }
    //    else if (randomNumber === 1){
    //      return 'Paper';
    //    }
    //    else if (randomNumber === 2){
    //    return 'Scissor';
    //    }
    //      }

    // SOLUTION 2:
    // function getComputerChoice() {
    //    const randomNumber = Math.floor(Math.random()*3);
    //    switch (randomNumber) {
    //      case 0:
    //        return 'rock';
    //      case 1:
    //        return 'paper';
    //      case 2:
    //        return : 'scisscors';
    //    };
    //  }

    // Q3: Does return work without the parentheses when trying to return a string? My previous code didn't work.
    // ANSWER: Yes it does work without parentheses. Just remember to always include your semicolon at the end. Other things to
    // remember include; When a return statement is called in a function, the execution of this function is stopped. Also never
    // return something on a new line without using parentheses.

    // Q4: What were the different ways to structure playRound(), I decided to use an switch statement, but I know I could have
    // used an if/else if/else statement, and maybe something else?
    // ANSWER: I could have used if/else statements, and I believe there is a way to have multiple condtions for one if statement.
    // function playRound(playerSelection,computerSelection) {
    //        if (playerSelection === "rock" && computerSelection === "scissors") {
    //            playerScore += 1;
    //            return "You Win! Rock beats Scissors!";
    //          } else if (playerSelection === "scissors" && computerSelection === "rock") {
    //            computerScore +=1;
    //            return "You Lose! Rock beats Scissors!";

    // Q5: How would you pseudocode this problem first?
    // ANSWER:

    //Things to note from this project:
    // 1. When a return is reached, the function stops. So the code beneath it is "unreachable" code. If you want code to execute,
    // then put it on above the return call.
    // 2. You will likely use arguements a LOT. For my function game() we called the playRound() function and inputted arguements that
    // were OTHER functions like prompt() and getComputerChoice(). What I am understanding is that the call stack will execute the
    // prompt() function first (left to right) then the getComputerChoice() function and then finally when it has its data, it will
    // input those into the main function I called which is playRound().
    // 3. I believe even when you call a function through a console.log(), it changes something within the parameters.
    // 4. Learn more about loops, still don't have a great understanding. But I kind of get it.
    // 5. Practice pseudocoding, I did not really pseudocode here and just ran straight into the problem.
    // 6. Math.random() returns a number >= 0 and less than 1. Math.floor() rounds downs and returns the largest integer less than
    // or equal to a given number.