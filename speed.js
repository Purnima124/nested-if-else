var input=require("readline-sync")
var speed=input.questionInt("enter the speed :")
if (speed<=70){
    console.log("ok");
}else if(speed<=130){
    speed=speed-70
    console.log(speed/5);
}else{
    console.log("gari dhire chalao") 
    console.log("licence cancelled")   

}
    
