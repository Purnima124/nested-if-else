var input=require("readline-sync");
var prosece=input.question("enter the prosece :");
if (prosece=="card insert"){
    console.log("accept")
    option=input.question("enter your choose :")
    if(option=="banking" ||option=="service"){
        console.log("option accept :")
        language=input.question("enter your language :")
        if (language =="english" || language=="hindi" || language=="marathi"){
            console.log("accept language :")
            pincode=input.question("enter your pincode :")
            if (pincode=="pu1234"){
                console.log("pincode accept")
                account=input.question("tipy of account :")
                if (account=="saving"|| account=="current"){
                    console.log("account accept")
                    amount=input.questionInt("enter your amount :")
                    if (amount<=10000){
                        console.log("amount preped")
                        recipt=input.question("I want recipt :")
                        if (recipt=="yes"){
                            console.log("accept")
                        }
                        else
                            console.log("not accept recipt")
                    }
                    else
                        console.log("not preped amount")
                
                }
                else
                    console.log("not accept account")
            }
            else
                console.log("not accept pincode")
        }
        else
            console.log("other language")
    }
    else
       console.log("other bank")
}
else
    console.log("insert again")