var input=require("readline-sync");
var year=input.question("Enter the year :");
if (year%4==0){
    if (year%100==0){
        if (year%400==0){
            console.log("it is leap and centary year")
        }
        else{
            console.log("it is centary year")
        }
    }    
    else{
        console.log("it is lipe year")

    }
}
else{
    console.log("it is not lipe year")
}

