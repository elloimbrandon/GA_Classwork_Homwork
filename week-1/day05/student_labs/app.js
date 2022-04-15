// run (npm -i) to get needed module prompt-sync

const prompt = require("prompt-sync")();

// const username = prompt("What is your name? "); // prompts output to the terminal
// console.log(`Your name is ${username}`); // input is stored into a variable

// -----Terminal Hero------
// hiking adventure, supplies, danger

// Hero has a sword
// enemies
// a boss
// health for character
// const aNumber = Number(window.prompt("Type a number", "")); by default the input is a string so this will make it a number
// have the random number generator throw out a random animal attack?
// have health
// give a hike a random length from 1 - 5 miles?
// 3 paths / 1 short-cut / 2 path fall off cliff / 3 drinking water + 2 - up the mountain / random attack - 2 points from you
// start with 10hp
// random outcome of a certain path like steep or rocky.
// if you make it to the end it could be another random outcome ex view, river, small lake
// array for supplies, sketchy paths, scary animals

// 5280 feet in a mile * (miles)
// subtract a certain amount of feet from overall length after every prompt

// sudo code
// we prompt are we ready to play
// prompt user which path they want to choose
// give the user the option to choose 1-5
// when the path is chosen console log "you have started your journey"
// this path is (X amount of miles are you sure you want to continue or choose a new a path) // throw in a check for if the user has chosen that path already *
// prompt the user "hey it looks like theres a shortcut, it could be risky but you could finish the trailer quicker, would like to got down it? (y/n)" *
// (take away overall distance)
// randomly prompt the user "hey look there's (blank) that looks interesting, would you like to put it in your backpack or leave it where it was? (y/n)"
// prompt user after every other prompt how many feet they traveled
// risk*
// tell the user "hey we made it! *stares at the mountain range with glee* do you want to check what you have collected along the way? (y/n) (hey cool we collected blank, blank, blank (now you just have to worry about getting back!)" *(hopefully (blank doesnt attack you again))

// we can use a while or for loop that while your health is above zero to go through the game?

const mileOptions = [0, 1, 2, 3, 4, 5];

// let randomChoice = (function getRandomInt() {
//   let result = Math.floor(Math.random() * 5);

//   if (result === 0) {
//     result = 1;
//     return result;
//   } else return result;
// })();
// let totalMiles = randomChoice * oneMile;
// console.log(totalMiles);

// playerHealth = 20;

// choosePath();
// START

const startGame = () => {
  // main function
  // check function to check end
  let paths = [1, 2, 3, 4, 5];

  const oneMile = 5280;

  let userHealth = 10;

  let oneStep = oneMile / 6;

  let userAttacked = 0;

  let feetWalked = 0;

  let randomChoice = () => {
    let result = Math.floor(Math.random() * 4)
    return result;
  };


  const checkEnd = (feetWalked, oneMile) => {
    if (feetWalked === oneMile) {
      return true;
    }
    return;
  };

  const userHealthStatus = () => {
    if (userAttacked == 1){
      userHealth -= 4;
      userAttacked = 0;
    }
    userHealth -= 1;
  }

  let inputCheck = prompt("Welcome to the game! are you ready to play? (y/n)");

  if (inputCheck === "n" || inputCheck === "no" || inputCheck !== "y") {
    return console.log("okay goodbye");
  }

  if (checkEnd(feetWalked, oneMile) === true) return;
  if (randomChoice() === 2) {
    userAttacked = 1;
    console.log("you got attacked bro");
  }
  userHealthStatus();
  console.log(userHealth);
  feetWalked += oneStep;

  prompt("It looks nice out side right now");
  if (checkEnd(feetWalked, oneMile) === true) return;
  if (randomChoice() === 2) {
    userAttacked = 1;
    console.log("you got attacked bro");
  }
  userHealthStatus();
  console.log(userHealth);
  feetWalked += oneStep;

  prompt("hey look there's a shortcut. Do you want to take it? (y/n)");
  if (inputCheck === "n" || inputCheck === "no" || inputCheck !== "y") {
    feetWalked = oneStep * 2
  }
  if (checkEnd(feetWalked, oneMile) === true) return;
  if (randomChoice() === 2) {
    userAttacked = 1;
    console.log("you got attacked bro");
  }
  userHealthStatus();
  console.log(userHealth);
  feetWalked += oneStep;

  prompt("It looks nice out side right now");
  if (checkEnd(feetWalked, oneMile) === true) return;
  if (randomChoice() === 2) {
    userAttacked = 1;
    console.log("you got attacked bro");
  }
  userHealthStatus();
  console.log(userHealth);
  feetWalked += oneStep;

  prompt("It looks nice out side right now");
  if (checkEnd(feetWalked, oneMile) === true) return;
  if (randomChoice() === 2) {
    userAttacked = 1;
    console.log("you got attacked bro");
  }
  userHealthStatus();
  console.log(userHealth);
  feetWalked += oneStep;

  prompt("It looks nice out side right now");
  if (checkEnd(feetWalked, oneMile) === true) return;
  if (randomChoice() === 2) {
    userAttacked = 1;
    console.log("you got attacked bro");
  }

  userHealthStatus();
  console.log(userHealth);
  feetWalked += oneStep;
  if (checkEnd(feetWalked, oneMile) === true) return;
};

startGame();
