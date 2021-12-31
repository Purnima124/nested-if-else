var input=require("readline-sync");
var name=input.question("Enter your name :");
if (name=="purnima"){
    console.log("carect")
    last_name=input.question("Enter the last_name :")
    if(last_name=="ganesh"){
        console.log("carect")
        user=input.question(("Enter the email Address :"))
        if (user=="purnima20@navgurukul.org"){
            console.log("carrect")
            password=input.question("Enter your password :")
            if (password=="navgurukul"){
                console.log("saccessfully")
            }else{
                console.log("invilet")
            }
        }else{
            console.log("not carrect")
        }
    }else{
        console.log("no")
    }
}else{
    console.log("again log in facebook :")
    var input=require("readline-sync");
    var name=input.question("Enter your name :")
    if (name>="a to z"){
        console.log("carect")
        last_name=input.question("Enter the last_name :")
        if (last_name>="a to z"){
            console.log("caret")   
            user=input.question("Enter the email Address :")
            if (user>="a to z"){
                console.log("carect")
                password=input.question("Enter your password :")
                if (password>="0 to 9"){
                    console.log("log in saccessfully")
                }else{
                    console.log("chack your password")
                }
            }else{
                console.log("not carrect")
            }
        }else{
            console.log("not carct")
        }
    }else{
        console.log("no")
    }
}


