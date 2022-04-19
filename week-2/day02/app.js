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

// Bonus's did
// random multiple ships between 9 - 19

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


console.log(`
  \\ \\_____              \\ \\_____      |--- SPACE BATTLE ---|
###[==_____>   --  -- ###[==_____> 
   /_/                   /_/
        
        \\ \\_____                               \\ \\_____
      ###[==_____>  --      --     --    -   ###[==_____>
         /_/                                    /_/              `);
console.log(`Welcome to space battle! Destroy alien ships to save the planet!`)

const heroName = prompt(`Who's flying the ship? `);
// const heroAnswer = prompt(`Great ${heroName}! Are you ready to play? (y/n)`);

let leave = 0;

if (parseInputAnswer(prompt(`Great ${heroName}! Are you ready to play? (y/n)`)) == true) {
    console.log("okay, goodbye!");
    leave = 1;
  }

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

const alienShipAttack = () => {
    if (randomAccuracy(alienShip[i].accuracy) == 1 && alienShip[i].hull > 0 && heroShip.hull > 0 )
    {
        alienShip[i].attackEnemy(heroShip);
        return true;
    }
    else if (randomAccuracy((alienShip[i].accuracy) == 0) && heroShip.hull > 0) {
        return false;
    } 

}
const breakLine = (num) => {
    if (num === 1)
        console.log("-----------------------------------------------");
    if (num === 2)
        console.log("");
}

let round = 1;

loadUpAlienShips(randomNumShips);


for (i = 1; i < randomNumShips && heroShip.hull > 0 && leave == 0; ++i) {
  for (heroShip.hull; heroShip.hull > 0 && alienShip[i].hull > 0; ++round) {
      
    console.log(`-------------------Round: ${round}!-------------------`);
    console.log(
      `Hero ship health: ${heroShip.hull} | Alien ship health: ${alienShip[i].hull}, Alien ship number: ${alienShip[i].number}`
    );
    breakLine(1);
    breakLine(2);
    console.log(`>> ${heroShip.name}'s ship attacks the aliens ${alienShip[i].name}`);

    if (heroShipAttack() == true) {
        console.log(`>> ${heroShip.name}'s ship hit the aliens ${alienShip[i].name} for ${heroShip.firepower} damage!`);
        breakLine(2);
    }
    else {
        console.log(`>> ${heroShip.name} missed their shot!`);
        breakLine(2);
    }

    if (alienShip[i].hull <= 0) 
    {
        alienShip[i].hull = 0;
        console.log(`** You destroyed the aliens ${alienShip[i].name}! **`);
        breakLine(2);
        if (alienShip[i] != alienShip[randomNumShips - 1]){
            breakLine(1);
            const leaveFight = prompt(`>> do you want to continue fighting? (y/n)`);
            breakLine(2);
            if ((leaveFight && leaveFight == "n" && leaveFight != "y") || (leaveFight == "no" && leaveFight !="yes")) {
                console.log(`>> Your commander wont let you flee alive ${heroShip.name}...`)
                heroShip.hull = 0;
            }
        }
        else
            console.log(`------${heroShip.name}, you destroyed ${randomNumShips - 1} alien ships and saved the universe!------`);
    }

    if (alienShipAttack() == true) {
        console.log(`>> the aliens ${alienShip[i].name} hit ${heroShip.name}'s ship for ${alienShip.firepower} damage!`);
        breakLine(2);
    }

    if ((alienShipAttack() == false) && heroShip.hull > 0) {
        console.log(`>> the aliens ${alienShip[i].name} missed their shot!`);
        breakLine(2);
    }

    if (heroShip.hull <= 0) {
        breakLine(1);
        console.log(`-------- ${heroShip.name}'s ship was destroyed! --------`);
        breakLine(1);
    }
  }
}

// hull upgrade station