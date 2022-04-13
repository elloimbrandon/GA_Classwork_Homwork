// Loop home work

// 1. Create a loop that logs the numbers from 0-99 (ascending)

for (let i = 0; i <= 99; i++) {
  console.log(i);
}

// 3. Create a loop that logs the EVEN numbers from 0-98 (ascending)

for (let i = 0; i <= 98; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 4. Create a loop that logs the ODD numbers from 0-99 (ascending)

for (let i = 0; i <= 99; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// 5. Create a loop that logs the ODD numbers from 0-99 (descending)

for (let i = 99; i > 0; i--) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// 9. Create a loop that logs the numbers from 3-90 that are multiples of 3 (ascending)
for (let i = 3; i <= 90; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}
