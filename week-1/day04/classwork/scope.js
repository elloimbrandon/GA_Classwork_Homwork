const checkSquare = (num) => {
  let numSum = Math.sqrt(num);
  if (numSum && numSum % 1 == 0) return true;
  else return false;
};

const checkToLimit = (limit) => {
  for (let i = 0; i <= limit; i++) {
    if (i) console.log(i, checkSquare(i));
  }
};
// checkToLimit(100);

// Loose variables
// {
//     var item = "spicy meatball" // var since global will leak into this and other programs globally.
// }
// function testGlobal() {
//   for (i = 0; i < 10; i++) {
//   console.log(i);
//   }
// }
// testGlobal();
// console.log(i); // (i) becomes a global property that can be accessed throughout the whole file if you dont declare it properly.

// const testVar = () => {
//   //   for (let i = 0; i < 100; i++) {     // This method of initializing let in the for loop will not let you access the value of the variable outside the loop
//   //     console.log(i);
//   //   }
//   for (var i = 0; i < 100; i++) {
//     // This method of initializing let in the for loop will not let you access the value of the variable outside the loop
//     console.log(i);
//   }
//   console.log(i);
// }; // Cannot access (i) outside the function even initializing it as a var.

// testVar();

// Question:
// Answer: you could but would not recommend it if you want to re-use variables. Rather put it in a function.
// const age = 21;
// let message = "";

// if (age < 21) {
//   message = "You cannot buy the beer";
// } else {
//   message = "You can buy the beer";
// }

// console.log(message);

// function testScope() {
//   const words = "that's a...";
//   {
//     const item = "spicy meatball";
//     const start = "mama mia!";
//     {
//       console.log(start);
//       console.log(words);
//       console.log(item);
//     }
//   }
// }
// testScope();

// Below these cannot be accessed outside the scope of the function as they were initialized inside the function/code block.
// console.log(start);
// console.log(words);
// console.log(item);

// Recursion
// const countdown = (num) => {
//   poundSign = "#";
//   if (num != 0) {
//     console.log(num, poundSign.repeat(num));
//     countdown(num - 1);
//   }
// };

// countdown(20);
