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
let Fiz = "fizz";
let Buz = "buzz";
while (i <100) {
    if (i%3==0 , i%5==0){
        console.log(Fiz + Buz)
    } else if (i%3==0){
        console.log(Fiz)
    } else if (i%5==0){
        console.log(Buz)
    } 
i++
}


// Exercise 4
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let N = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let found = "Found Value!"
let nope = "Did not find value."

for (let i = 1; i <=N; i++){
    if (i ==value){
    console.log(` Found ${value}!`)
    break;
} if (i == N){

console.log(nope)
}
}

// Exercise 5
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= n; i++){
    let output = ""
    if (i % fizzDivisor == 0){
        output += "fizz";
    }
    if (i % buzzDivisor == 0){
        output += "buzz";
    }

    console.log(i, output) 
}  
