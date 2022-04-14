const printBanner = () => {
  console.log("========================");
  console.log("Insert Banner Text Here");
  console.log("========================");
};

printBanner();

const printSum = (num1, num2) => {
  return num1 + num2;
};

console.log(printSum(25, 5));

const printPoundSign = (number) => {
  let poundSign = "#";
  console.log(poundSign.repeat(number));
};

const printTriangle = () => {
  for (let i = 1; i <= 5; i++) {
    printPoundSign(i);
  }
};

printTriangle();

const printCustomBanner = (text) => {
  if (text) {
    console.log("========================");
    console.log(`${text}`);
    console.log("========================");
  }
};

printCustomBanner("Hello, my name is Brandon.");
// printBanner();

const minusOne = (num) => {
  return num - 1;
};

console.log(minusOne(20));

const makeSentence = (sentence1, sentence2, sentence3) => {
  return `${sentence1} ${sentence2} ${sentence3}`;
};

console.log(makeSentence("I like dogs.", "I like sports.", "I like pasta."));

const getLastElement = (arr) => {
  return arr.pop();
};

console.log(getLastElement(["Sports", "Dog", "Cookie", "Pasta"]));

// Exercises

// 1.
const stringCompare = (arr1, arr2) => {
  if (arr1 && arr2 && arr1.toLowerCase() === arr2.toLowerCase()) {
    return true;
  } else return false;
};

console.log(stringCompare("Sports", "Sports"));

// 2.
const sumToString = (number1, number2, number3) => {
  sumNumbers = number1 += number2 += number3;
  if (sumNumbers) return sumNumbers.toString();
  else return "Error";
};

console.log(sumToString(5, 5, 5));

// 3.
