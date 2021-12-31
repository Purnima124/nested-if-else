var input=require("readline-sync")
var num1=input.questionInt("Enter the first number :")
var num2=input.questionInt("Enter the first number :")
var num3=input.questionInt("Enter the first number :")
if (num1>num2 && num1>num3){
    console.log(num1,"is greater no.");
}else if(num2>num1 && num2>num3){
    console.log(num2,"g r")
}else if(num3>num2 && num3>num1){
    console.log(num3,"g")
}else{
    console.log("invalit no.")
}

