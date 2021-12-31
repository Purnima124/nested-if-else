var input=require("readline-sync");
var hospital=input.question("I want go to hospital :")
if (hospital=="permission"){
    console.log("take permission from disco")
    permission=input.question("Enter the permission :")
    if (permission=="disco"){
        console.log("asked from health codinater")
        permission=input.question("take permission health Co. :")
        if (permission=="health co."){
            console.log("take parmition Teem Member")
            permission=input.question("take parmition :")
            if (permission=="Teem Member"){
                console.log("you can go but take parmission your manter and koch")
                permission=input.question("take parmition :")
                if (permission=="koch"){
                    console.log("tale your manter")
                    permission=input.question("take permition :")
                    if (permission=="manter"){
                        console.log("you can go to hospital")
                    }else{
                        console.log("now is not alod")
                    }
                        
                }else{
                    console.log("why you want go outside")
                }
            }else{
                console.log("is your imrjansi")
            }
        }else{
            console.log("what happan to you")
        }

    }else{
        console.log("ok")
    }
}else{
    console.log("no")
}