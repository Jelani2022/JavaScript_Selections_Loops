console.log("Hello World!\n==========\n");

for (let i = 1; i <= 100; i++){
    if (i%2==1){
        console.log(i)
    }
   

}
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let fiz = "fizz"
let buz = "buzz"
for (let i = 1; i <= 100; i++){
    if (i%3==0){
        console.log(fiz)
    } if (i%5==0){
        console.log(buz)
    } if (i%3==0 , i%5==0){
        console.log(fiz + buz)
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
