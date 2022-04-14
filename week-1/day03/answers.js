// Easy Going
////////////////////////////////
// for (let i = 0; i <= 20; i++) {
//   if (i) {
//     console.log(i);
//   }
// }
////////////////////////////////

// Get Even
////////////////////////////////
// for (let i = 0; i <= 200; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
////////////////////////////////

//Fizz Buzz
////////////////////////////////
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i, " FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log(i, " Fizz");
//   } else if (i % 5 === 0) {
//     console.log(i, " Buzz");
//   }
// }
////////////////////////////////

// Wild Wild Life
////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant", 5000, "Mordor"];
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
// const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// wolfy.splice(-2, 2);
// wolfy.push(17, "Yukon Territory");
// console.log(wolfy);
// sharky.pop();
// sharky.push("Gotham City");
// console.log(sharky[3]);
// dart.push("Hawkings");
// console.log(dart[4]);
// wolfy.shift();
// wolfy.unshift("Gameboy");
// console.log(wolfy);
////////////////////////////////

// Yell at the Ninja Turtles
////////////////////////////////
// const ninjaTurtles = ["Donatello,", "Leonardo", "Raphael", "Michaelangelo"];

// for (const i of ninjaTurtles) {
//   console.log(i.toUpperCase());
// }
////////////////////////////////

// Methods, Revisited
////////////////////////////////
// const favMovies = [
//   "Jaws",
//   "The Fellowship of the Ring",
//   "Howl's Moving Castle",
//   "Django Unchained",
//   "Cloud Atlas",
//   "The Usual Suspects",
//   "Toy Story",
//   "Conan the Barbarian",
//   "Titanic",
//   "Harry Potter",
//   "Fried Green Tomatoes",
//   "Volver",
//   "Oculus",
//   "Seven",
//   "Black Panther",
//   "Harry Potter", // Harry Potter is in the list of favorite movies twice from MD.
//   "Imitation of Life",
//   "Snatch",
//   "Fast and Furious",
// ];
// console.log(favMovies[8]);
// favMovies.sort(); // Yes, the array is permanently altered.
// favMovies.pop();
// favMovies.push("Guardians of the Galaxy");
// favMovies.reverse();
// favMovies.shift();
// favMovies.unshift(); // It returns nothing unless you have to give it a value to add to the start of the array. ex(favMovies.unshift("The Goonies"))
// favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar");
// favMovies.slice(Math.ceil(favMovies.length / 2));

// const lastHalfFavMovies = favMovies.slice(Math.ceil(favMovies.length / 2));
// console.log(lastHalfFavMovies); // slice returns a copy so what is stored into the variable is a copy of the array it was used on.
// console.log(favMovies);
// console.log(favMovies.indexOf("Fast and Furious")); // We actually did not take it out. We only made a copy of the last half of the array.

// Thought Question: we can change the contents of the const array but we cannot have it reference a new array or object.
////////////////////////////////

// Where is Waldo
////////////////////////////////
// const whereIsWaldo = [
//   ["Timmy", "Frank"],
//   "Eggbert",
//   ["Lucinda", "Jacc", "Neff", "Snoop"],
//   ["Petunia", ["Baked Goods", "Waldo"]],
// ];
// whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"), 1);
// whereIsWaldo[1][2] = "No One"; // tried really hard to do this without hard coding but spent too long on it.
// console.log(whereIsWaldo[2][1][1]);

////////////////////////////////

//  Excited Kitten
////////////////////////////////
// const remark = [
//   "...human...why you taking pictures of me?...",
//   "...the catnip made me do it...",
//   "...why does the red dot always get away...",
// ];

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(remark[Math.floor(Math.random() * 3)]);
//   }
// }
////////////////////////////////

//  Find the Median
////////////////////////////////
// const nums = [
//   14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
//   17, 12, 71, 18, 15, 12,
// ];

// nums.sort();
// console.log(nums[Math.floor(nums.length / 2)]);

////////////////////////////////

// Part 2: HTML & CSS
// Answer:
//        I think I'm at a 5 and ready to dive more into it.
