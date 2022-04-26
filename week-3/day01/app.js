// have tool locked maybe and ones that you will buy in order
// start with teeth
// Display current wallet and tools
// have a restart button or new game. Will hide everything again and will only show start game button
// hide display of game at the start until start game button pressed to show everything
// have a box that shows activity or lawn mowed and is quietly removed from the activity box
// mow lawn button, buy button or hover over object to see price?
// start the tools either as an array and reference them as an id or class in html
// have a variable to exit set to restart or new game
// if they cant buy the tool either have a hover text saying they cant and a page alert notifying them they cant
// once a new tool is bought the tool in current tools box gets deleted but we still have a either an inventory or its not locked?
// one hover have a tint or underline
// whatever the tool yields in profit we can reference with id or class to add to overall total of whats made during that mow or session
// we either set each lawn mowed tied to a day or session.
// have the buttons for the tools that have a class and id's for each one? ie (classname/tool) button. id = scissors, id = lawnmower ect.

// variables to use

let $bank = 1;

let $inventory = [];

const $tools = [
  "Teeth",
  "Rusty Scissors",
  "Push Mower",
  "Electric Mower",
  "Pack Of Starving Students",
];

// functions to use

// function to check if tool is already in inventory
const $checkInventory = ($tool) => {
  for (let i = 0; i < $tools.length; i++) {
    if ($tool == $inventory[i]) {
      return true;
    }
  }
  return false;
};

// buy tools buttons
const $teethButton = () => {
  if ($checkInventory("Teeth") == false) {
    if ($bank >= 1) {
      $bank = $bank - 1;
      $inventory.push("Teeth");
      alert("you added Teeth to your inventory!");
    } else alert("you cant afford that yet!");
  } else {
    alert("you already have that tool!");
  }
};

const $rustyScissorsButton = () => {
  if ($checkInventory("Rusty Scissors") === false) {
    if ($bank >= 5) {
      $bank = $bank - 5;
      $inventory.push("Rusty Scissors");
      alert("you added Rusty Scissors to your inventory!");
    } else alert("you cant afford that yet!");
  } else {
    alert("you already have that tool!");
  }
};

const $pushmowerButton = () => {
  if ($checkInventory("Push Mower") === false) {
    if ($bank >= 25) {
      $bank = $bank - 25;
      $inventory.push("Push Mower");
      alert("you added a Push Mower to your inventory!");
    } else alert("you cant afford that yet!");
  } else {
    alert("you already have that tool!");
  }
};

const $electricmowerButton = () => {
  if ($checkInventory("Electric Mower") === false) {
    if ($bank >= 250) {
      $bank = $bank - 250;
      $inventory.push("Electric Mower");
      alert("you added an Electric Mower to your inventory!");
    } else alert("you cant afford that yet!");
  } else {
    alert("you already have that tool!");
  }
};

const $starvingStudentsButton = () => {
  if ($checkInventory("Pack Of Starving Students") === false) {
    if ($bank >= 500) {
      $bank = $bank - 500;
      $inventory.push("Pack Of Starving Students");
      alert("you added a Pack Of Starving Students to your inventory!");
    } else alert("you cant afford that yet!");
  } else {
    alert("you already have that tool!");
  }
};

// function to calculate yield depending on tool

const yeildAmount = ($currentTool) => {
  let result = 0;

  if ($currentTool == "Teeth") {
    result = 1;
  }
  if ($currentTool == "Rusty Scissors") {
    result = 5;
  }
  if ($currentTool == "Push Mower") {
    result = 50;
  }
  if ($currentTool == "Electric Mower") {
    result = 100;
  }
  if ($currentTool == "Pack Of Starving Students") {
    result = 250;
  }
  if (result > 0) {
    return result;
  } else alert("you made no money!");
};

// mow lawn button

const $mowLawn = () => {
  // remove
  $("img").fadeIn(5000);
  if ($inventory[$inventory.length - 1] == undefined) {
    alert("you cant cut lawns, you have no tools!");
  } else {
    // $("img").fadeIn(5000);
    // current tool variable
    let $currentTool = $inventory[$inventory.length - 1];

    // money made from the yield depending on tool
    let $moneyMade = 0;

    alert(`your current tool is ${$inventory[$inventory.length - 1]} !`);

    $moneyMade = yeildAmount($currentTool);
    $bank = $bank + $moneyMade;

    alert(`you made ${$moneyMade}!`);
    alert(`you now have $${$bank} dollars in your bank!`);
  }
  $("img").fadeOut(5000);

  // use a function to set tool yield
};

// function to bring us to the start of the game
const $goHome = () => {
  // set both variables back to zero
  let $bank = 1;
  let $inventory = [];
  alert("you have restarted!");
};

$(() => {
  // button on clicks

  // tools buttons
  $("#teeth").on("click", $teethButton);
  $("#rusty-scissors").on("click", $rustyScissorsButton);
  $("#push-mower").on("click", $pushmowerButton);
  $("#electric-mower").on("click", $electricmowerButton);
  $("#starving-students").on("click", $starvingStudentsButton);

  // exit button
  $("#end").on("click", $goHome);

  // mow lawn button
  $("#mow-lawn").on("click", $mowLawn);

  // end game check
  if (
    $bank >= 1000 &&
    $inventory[$inventory.length - 1] == "Pack Of Starving Students"
  ) {
    alert("you won the game!");
  }
  // exit game button
});

// const $inactiveButton = $('<div>').addClass('inactive');
//     $inactive.css('opacity', '0.33');
