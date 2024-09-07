//Converting decimal number to binary number system

const prompt = require("prompt-sync")(); //to use prompt function
//takeing input from user in terminal
let decimalNum =prompt("Enter the decimal number which you want to convert to  binary : ");
//inisaling variable  binaryNum with zero 
let binaryNum=0;
//using for loop to compute 
for(let i = 15 ;i >= 0 ;i--){

    if(decimalNum >= 2**i){
        binaryNum = binaryNum * 10 + 1;
        decimalNum = decimalNum - (2**i);
    }
    else{
    binaryNum =  binaryNum*10;
    }

}
//displaying  computed result
console.log(`\nConverted binary is : ${binaryNum}`);

