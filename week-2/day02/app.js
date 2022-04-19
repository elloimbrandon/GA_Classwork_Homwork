const prompt = require("prompt-sync")();

// npm i prompt-sync

// limit to like 8 aliens
// prompt after every battle
// accuracy is limited
// we always attack first
// if we do survive the fight or round then we prompt for the option to fight more or flee
// if you retreat the game is over
// you win if you destroy all the aliens vic versa
// if your health or (hull) == 0 then you die
// firepower is the amount of damage done to the hull of the other ship
// accuracy is the chance between 0 and 1 that the ship will hit the target
// every-time the ship attack the chance to hit or not hit depends on the accuracy
// have option to top up hitpoints for heroship

const alienShipNames = [
  "purple ship",
  "green ship",
  "yellow ship",
  "blue ship",
  "orange ship",
];

const randomChoice = (num) => {
  let result = Math.floor(Math.random() * num);
  return result;
};

const randomAccuracy = (shipAccuracy) => {
    let result = (Math.random() * (1 - .1) + .1).toFixed(1);
    if (shipAccuracy > result) {
        return 1;
    }
    else {
        return 0;
    }
  };

const randomAlienShipChoice = (max, min) => {
  let result = Math.floor(Math.random() * (max - min) + min);
  return result;
};


const randomAlienAccuracy = (max, min) => {
  let result = (Math.random() * (max - min) + min).toFixed(1);
  return result;
};

let randomNumShips = randomAlienShipChoice(20,10);

// console log (hey! theres another alien ship and they're flying a ${purple ship})

const heroName = prompt(
  `welcome, what would you like to name your ship? (name)`
);

const heroShip = {
  name: heroName,
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
  attackEnemy: function (enemy) {
    enemy.hull = enemy.hull - heroShip.firepower;
  },
};

const alienShip = { // might not need this //////////////////////
  number: 1,
  name: alienShipNames[randomChoice(5)],
  hull: randomAlienShipChoice(7, 3),
  firepower: randomAlienShipChoice(5, 2),
  accuracy: randomAlienAccuracy(0.8, 0.6),
  attackEnemy: function (enemy) {
    enemy.hull = enemy.hull - alienShip.firepower;
  },
};

const loadUpAlienShips = (randomNumShips) => { //
    for (let i = 1; i < randomNumShips; ++i) {
      alienShip[i] = {
      number: i,
      name: alienShipNames[randomChoice(5)],
      hull: randomAlienShipChoice(7, 3),
      firepower: randomAlienShipChoice(5, 2),
      accuracy: randomAlienAccuracy(0.8, 0.6),
      attackEnemy: function (enemy) {
        enemy.hull = enemy.hull - alienShip.firepower;
      },
    };
  }
};

// console.log(randomNumShips);
// console.log(alienShip.accuracy);

// console.log(randomAccuracy(alienShip.accuracy));
// for (let i = 1; i < 10; ++i) {
//   console.log(
//     `${alienShip[i].name}, ${alienShip[i].hull}, ${alienShip[i].firepower}, ${alienShip[i].accuracy}`
//   );
// }

// console.log(alienShip);

const heroShipAttack = () => {
    if (randomAccuracy(heroShip.accuracy) == 1 && heroShip.hull > 0 && alienShip[i].hull > 0)
    {
        heroShip.attackEnemy(alienShip[i]);
        return true;
    }

    else if (randomAccuracy(heroShip.accuracy) == 0) {
        return false;
    }

}

let round = 1;

loadUpAlienShips(randomNumShips); // will add 10 more ships to object // you see that Yulia? i didnt even put the value in the function...


for (i = 1; i < randomNumShips && heroShip.hull > 0; ++i) {
  for (heroShip.hull; heroShip.hull > 0 && alienShip[i].hull > 0; ++round) {
    
    console.log(`Round: ${round}!`);

    console.log(
      `Hero ship health: ${heroShip.hull} | Alien ship health: ${alienShip[i].hull}, Alien ship number: ${alienShip[i].number}`
    );

    console.log(`${heroShip.name}'s ship attacks the aliens ${alienShip[i].name}`);

    if (heroShipAttack() == true) {
        console.log(`${heroShip.name}'s ship hit the aliens ${alienShip[i].name}!`);
    }
    else {
        console.log(`${heroShip.name}'s ship missed their shot!`);
    }

    // if (randomAccuracy(heroShip.accuracy) == 1 && heroShip.hull > 0 && alienShip[i].hull > 0)
    // {
    //     heroShip.attackEnemy(alienShip[i]);
    //     console.log(`${heroShip.name}'s ship hit the aliens ${alienShip[i].name}!`);
    // }

    // else if (randomAccuracy(heroShip.accuracy) == 0) {
    //     console.log(`${heroShip.name}'s ship missed their shot!`);
    // }

    if (alienShip[i].hull <= 0) 
    {
        alienShip[i].hull = 0;
        console.log(`You destroyed the aliens ${alienShip[i].name}!`);
        if (alienShip[i] != alienShip[randomNumShips - 1]){ // fix
            const leaveFight = prompt(`do you want to continue fighting?`);
            if (leaveFight == "n" && leaveFight != "y") {
                heroShip.hull = 0;
            }
        }
        else
        console.log(`${heroShip.name}, you destroyed ${randomNumShips - 1} alien ships and saved the universe!`);
        // const leaveFight = prompt(`You destroyed the aliens ${alienShip[i].name}! do you want to continue fighting?`);
        // if (leaveFight == "n" && leaveFight != "y") {
        //     heroShip.hull = 0;
        // }
    }

    if (randomAccuracy(alienShip[i].accuracy) == 1 && alienShip[i].hull > 0 && heroShip.hull > 0 )
    {
        alienShip[i].attackEnemy(heroShip);
        console.log(`the aliens ${alienShip[i].name} hit ${heroShip.name}'s ship!`);
    }
    else if (randomAccuracy((alienShip[i].accuracy) == 0) && heroShip.hull > 0) {
        console.log(`the aliens ${alienShip[i].name} missed their shot!`);
    } 
    if (heroShip.hull <= 0) { // keep eye on
      console.log(`${heroShip.name} was destroyed!`);
    }
  }
}

// alien ship is still getting attack if its hull is less than 0
// only fighting the 10 times until first for loops conditions are met
// also have to implement accuracy
// hero ship health below 0

// potential bonuses 
// multiple alien ships
// hull upgrade station