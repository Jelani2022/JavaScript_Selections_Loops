console.log("Hello World!\n==========\n");


// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++){
    if (i%2==1){
        console.log(i)
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let fiz = "fizz"
let buz = "buzz"
for (let i = 1; i <= 100; i++){
    if (i%3==0 , i%5==0){
        console.log(fiz + buz)
    } else if (i%3==0){
        console.log(fiz)
    } else if (i%5==0){
        console.log(buz)
    } 
}
// Exercise 3
let i = 1;  
while (i < 100){
    if (i%2 !==0){
        console.log(i)
    }
 i++
}
let i = 1;
let fiz = "fizz";
let buz = "buzz";
while (i <100) {
    if (i%3==0 , i%5==0){
        console.log(fiz + buz)
    } else if (i%3==0){
        console.log(fiz)
    } else if (i%5==0){
        console.log(buz)
    } 
i++
}


// Exercise 4
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let N = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let found = "Found Value!"
let nope = "Did not find value."



// Exercise 5
let fizzDivisor = Math.round(Math.random() * (1 - 10) + 1);
let buzzDivisor = Math.round(Math.random() * (1 - 10) + 1);
let n = Math.round(Math.random() * (1 - 1000) + 1);
let start = Math.round(Math.random() * (1 - 10) + 1);