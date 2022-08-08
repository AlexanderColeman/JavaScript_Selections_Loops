console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Exercise 2 Section
console.log("\n\nEXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//Exercise 3
console.log("\n\nEXERCISE 3:\n==========\n");

console.log("\n\n1-100 while");

let counter = 1;
while (counter <= 100) {
  if (counter % 2 !== 0) {
    console.log(counter);
  }
  counter++;
}

console.log("\n\n1-100 do-while");
counter = 1;
do {
  if (counter % 2 !== 0) {
    console.log(counter);
  }
  counter++;
} while (counter <= 100);

console.log("\n\nFizzBuzz while");

counter = 1;
while (counter <= 100) {
  if (counter % 3 === 0 && counter % 5 === 0) {
    console.log("FizzBuzz");
  } else if (counter % 3 === 0) {
    console.log("Fizz");
  } else if (counter % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(counter);
  }
  counter++;
}

console.log("\n\nFizzBuzz do-while");

counter =1;
 do{
  if (counter % 3 === 0 && counter % 5 === 0) {
    console.log("FizzBuzz");
  } else if (counter % 3 === 0) {
    console.log("Fizz");
  } else if (counter % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(counter);
  }
  counter++;
}while (counter <= 100)


// Exercise 4
console.log("\n\nEXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 0; i <= n; i++) {
 if(i === value){
  console.log(`Found the value the value is ${value}`);
  break;
 }
 if(i === n ){
  console.log('Did not find the value');
  console.log(`the value was ${value} and n was ${n}`);
  break; 
 }
  
}


// Exercise 5
console.log("\n\nEXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * 10  + 1);
let buzzDivisor = Math.round(Math.random() * 10  + 1);
let end = Math.round(Math.random() * 1000 +1);
let start = Math.round(Math.random() * 10 + 1);


while (start <= end) {
  if (start % fizzDivisor === 0 && buzzDivisor % 5 === 0) {
    console.log("FizzBuzz");
  } else if (start % fizzDivisor === 0) {
    console.log("Fizz");
  } else if (start % buzzDivisor === 0) {
    console.log("Buzz");
  } else {
    console.log(start);
  }
  start++;
}