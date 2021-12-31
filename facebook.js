var input=require("readline-sync");
var user=input.question("Enter the email Address :");
if (user=="purnima20@navgurukul.org"){
    console.log("carrect")
    password=input.question("Enter your password :")
    if (password=="navgurukul1"){
        console.log("saccessfully")
    }else{
        console.log("invilet")
    }
}else{
    console.log("not carrect")
}