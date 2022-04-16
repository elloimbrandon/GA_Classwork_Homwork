// run (npm -i) to get needed module prompt-sync

const prompt = require("prompt-sync")();

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

// Main Function
const startGame = () => {
  const oneMile = 5280;

  let userHealth = 13;

  const totalMiles = Math.floor(Math.random() * (5 - 1) + 1);

  const randomPath = Math.floor(Math.random() * (5 - 1) + 1);

  const totalWalkingFeet = totalMiles * oneMile;

  const oneStep = totalWalkingFeet / 6;

  const hazardAnimals = ["bear", "cougar", "snake"];

  const expressions = [
    ">   You express to yourself how nice the weather is.",
    ">   You admire your surroundings.",
    ">   You hear the wind blow past as you head forward!",
    ">   You're super excited to hopefully get to the end",
  ];

  let feetWalked = 0;

  let shortCut = 0;

  //||||||||||||||||||||||||||| Functions

  let randomChoice = (num) => {
    let result = Math.floor(Math.random() * num);
    return result;
  };

  const animalAttack = () => {
    if (randomChoice(6) === 2) {
      userHealth -= 4;
      return true;
    }
    return false;
  };

  const getHazardAnimal = () => {
    let num = randomChoice(3);
    return hazardAnimals[num];
  };

  const getRandomExpression = () => {
    let num = randomChoice(4);
    return expressions[num];
  };

  const userHealthStatus = (oneStep, totalWalkingFeet) => {
    if (userHealth <= 0) return true;
    else {
      return false;
    }
  };

  const checkHealth = (i, oneStep) => {
    if (userHealthStatus(i, oneStep) == true) {
      prompt(`oh no! you're health is at 0, you have to turn back`);
      prompt(
        `you walk ${feetWalked} feet back to the start of the trail. You'll finish it next time!`
      );
      return true;
    }
  };

  const parseQuitAnswer = (quitOrExitResponse) => {
    quitOrExitResponse.toLowerCase();
    if (
      !quitOrExitResponse ||
      (quitOrExitResponse == "y" && quitOrExitResponse != "n") ||
      (quitOrExitResponse == "yes" && quitOrExitResponse != "no")
    ) {
      return true;
    } else return false;
  };

  const parseInputAnswer = (answer) => {
    answer.toLowerCase();
    if (
      !answer ||
      answer == "exit" ||
      answer == "quit" ||
      (answer == "n" && answer != "y") ||
      (answer == "no" && answer != "yes")
    ) {
      let quitOrExitResponse = prompt(
        "Are you sure you want to end the game? (y/n)"
      );
      if (parseQuitAnswer(quitOrExitResponse) == true) {
        return true;
      } else return false;
    }
    return false;
  };

  const parseShortcutAnswer = (answer) => {
    answer.toLowerCase();
    if (
      (answer && answer == "y" && answer != "n") ||
      (answer == "yes" && answer != "no")
    ) {
      return true;
    }
    return false;
  };

  console.log(`%c ______________________________________________________________________________
 ------------------------------------------------------------------------------
 _________       _ _                 _                 _               
 |__   __|      (_) |      /\\       | |               | |                 
    | |_ __ __ _ _| |     /  \\    __| |_   _____ _ __ | |_ _   _ _ __ ___ 
    | | '__/ _  | | |    / /_\\\\  / _  \\ \\ / / _ \\ '_ \\| __| | | | '__/ _ \\
    | | | | (_| | | |   / ____ \\| (_| |\\ V /  __/ | | | |_| |_| | | |  __/
    |_|_|  \\__,_|_|_| /_/      \\_\\__,_| \\_/ \\___|_| |_|\\__|\\__,_|_|  \\___|
________________________________________________________________________________
-----| Trail Adventure game |------| *Be careful of bears, cougars, and snakes!*
--------------------------------------------------------------------------------
`, "font-family: monospace")
  if (
    parseInputAnswer(
      prompt("Welcome to trail adventure! are you ready to play? (y/n)")
    ) == true
  ) {
    return console.log("okay, goodbye!");
  } else
    prompt(
      `The trail you stumbled upon is ${totalMiles} miles long, lets get going!`
    );

  //||||||||||||||||||| Main loop

  for (let i = oneStep; i <= totalWalkingFeet; i += oneStep) {
    let currentHazardAnimal = getHazardAnimal();
    let randomExpression = getRandomExpression();
    feetWalked += oneStep;
    userHealth -= 1;

    if (checkHealth(i, oneStep) === true) return;
    prompt(
      `< You've walked ${feetWalked} feet | Health = ${userHealth} | ${randomExpression} `
    );
    
    shortCut++;

    if (shortCut == randomPath) {
      if (
        parseShortcutAnswer(
          prompt(
            "Hey look, there's a sketchy looking shortcut. Do you want to take it? (y/n) "
          )
        ) == true
      ) {
        i += oneStep;
        if (checkHealth(i, oneStep) === true) return;
        console.log(`you chose to go down the sketchy path. hopefully you dont run into a ${currentHazardAnimal}!`);
      } else {
        prompt("you decide to take the safer route!");
      }
      if (animalAttack() === true) {
        prompt(
          `you got attacked by a ${currentHazardAnimal} but you got away`
        );
      }
      if (checkHealth(i, oneStep) === true) return;
    }
    if (animalAttack() === true) {
      prompt(
        `oh no! you got attacked by a ${currentHazardAnimal} but you got away`
      );
    }
    if (i === totalWalkingFeet) {
      prompt(
        `You made it to the end of the ${totalMiles} mile trail adventure with your health at ${userHealth}! Hopefully on the way back you dont run into a bear, cougar, or snake!`
      );
    }
    if (checkHealth(i, oneStep) === true) return;
  }
};

startGame();
