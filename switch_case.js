const r=require("readline-sync")
var day=r.question("enter the day :")
var time=r.question("enter the time :")
switch(day){
    case "sunday":
        // var time=r.question("enter the time")
        switch(time){
            case "breakfast":
                console.log ("dosa")
                break
            case "lunch":
                console.log("dal rice")
                break
            case"dinner":
                console.log("paneer and  chapati")
                break
            default:
                console.log("time not found")
                break           
            }
            break
    case "monday":
        // var time=r.question("enter the time")
        switch(time){
            case "breakfast":
                console.log("fried rice")
                break
            case "lunch":
                console.log("aloo rice")
                break
            case "dinner":
                console.log("chhole bhature")
                break;
            default:
                console.log("time not found")
                break
            } 
            break   
    case "other":
        // var time=r.question("enter the time")
        switch(time){
            case"breakfast":
                console.log("aloo")
                break
            case"lunch":
                console.log ("rajma rice")
                break
            case "dinner":
                console.log ("veg-chapati")
                break
            default:
                console.log("time not found")
                break             
        
        }
               
default:
    console.log("day not fount")
    break;        
}

// console.log(meal("sunday","lunch"));
// console.log(meal("monday","dinner"));


