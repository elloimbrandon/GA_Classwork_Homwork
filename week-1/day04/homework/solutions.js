// 1. What is the difference between a parameter and an argument?
// Answer: A parameter in a function's variable to assists the overall results of a function. An argument is a variable or input to obtain or store the results of a function.

// 2. Within a function, what is the difference between return and console.log?
// Answer: console.log is just printing whatever value is put into the parameters. A return is a value that the function is returning/output ie true or false.

// Palindrome

// const reverseString = (str) => {
//   let reversedString = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedString += str[i];
//   }
//   return reversedString;
// };

// Above I initially did it the way I knew before but found a series of library functions to do it in less lines.

// const reverseString = (str) => {
//   let splitToArr = str.split("");
//   let reverseArr = splitToArr.reverse();
//   let combineToStr = reverseArr.join("");
//   return combineToStr;
// };

// const checkPalindrome = (str) => {
//   let forceLowerCase = str.toLowerCase();
//   let forceReverse = reverseString(forceLowerCase);

//   if (str && forceLowerCase === forceReverse) return true;
//   else return false;
// };
// console.log(checkPalindrome("rAdAr"));

// Sum Array

// const sumArray = (arr) => {
//   let sum = 0;

//   if (arr) {
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum;
//   }
// };

// console.log(sumArray([1, 2, 3, 4, 5, 6]));

// Prime Numbers

// const checkPrime = (num) => {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// const printPrimes = (num) => {
//   if (num) {
//     for (let i = 1; i <= num; i++) {
//       if (checkPrime(i)) {
//         console.log(i);
//       }
//     }
//   }
// };
// printPrimes(97);

// Rock Paper Scissors Game
// I actually did this when I made the web version for the pre-work. It takes user input from the command line. Instead of **argv I used readline.

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// console.log("Let's Play Rock, Paper, Scissors against the computer!");

// let readUserAnswer = function () {
//   let playerFinalChoice = null;

//   const choices = ["Rock", "Paper", "Scissors"];

//   let computerChoice = (function getRandomInt() {
//     return Math.floor(Math.random() * 3);
//   })();

//   const computerFinalChoice = choices[computerChoice].toLocaleLowerCase();

//   rl.question("Whats your choice: ", function (string) {
//     let userInput = string.toLocaleLowerCase();

//     function inputCheck() {
//       if (
//         !userInput ||
//         (userInput != "rock" && userInput != "paper" && userInput != "scissors")
//       ) {
//         console.log(
//           "You can only choose rock, paper, or scissors. Choose again."
//         );
//         readUserAnswer();
//       } else {
//         playerFinalChoice = userInput;
//         console.log("You picked: " + playerFinalChoice);
//         console.log("The Computer picked: " + computerFinalChoice);
//         if (playerFinalChoice === computerFinalChoice) {
//           console.log("Its a draw!");
//           return rl.close();
//         } else if (
//           playerFinalChoice === "rock" &&
//           computerFinalChoice != "paper"
//         )
//           console.log("You win!");
//         else if (
//           playerFinalChoice === "paper" &&
//           computerFinalChoice != "scissors"
//         )
//           console.log("You win!");
//         else if (
//           playerFinalChoice === "scissors" &&
//           computerFinalChoice !== "rock"
//         )
//           console.log("You win!");
//         else console.log("You lose :(");
//         return rl.close();
//       }
//     }
//     inputCheck(userInput);
//   });
// };
// readUserAnswer();

// BONUS

// Digit Sum // success

// Thought Process:
// set a check to make sure we have a value for num
// we take 1 number as input that has 2 digits // (if larger than 10 but less than 1000)
// and we add those 2 digits together to get their combined value
// possible solutions:
//                  - separate both numbers into their own string's or arrays, parse to int and combined their value.
//                  - parse into and array and combined the value of their indexes.

// const sumDigits = (num) => {
//   if (num && num >= 10 && num < 100) {
//     let stringNumber = num.toString();
//     return parseInt(stringNumber[0]) + parseInt(stringNumber[1]);
//   }
// };

// console.log(sumDigits(42));

// Unique String // fail

// Thought Process:
// Start with making a for loop to go through the string.
// each letter at the index of the loop will be put through a function as well as the rest of the string to compare.
// if it does not have another instance of itself print it out
// if it does have an instance of itself skip it or cut it out.

// const compareLetter = (index, string) => {
//

//   for (let i = 0; i < string.length; i++) {
// if (index === string[i]) return true;
//   }
//   return false;
// };

// const uniqueString = (str) => {
//   if (str) {
//     for (let i = 0; i < str.length; i++) {
//       compareLetter(i, str);
//     }
//   }
// };

// console.log(uniqueString("hello world!"));

// Could not get this one.
