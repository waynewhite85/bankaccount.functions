// variables first
let pinNumber = 1234
let availableBalance = 1000
let withdrawalAmount;

// more variables to come
const withdrawalFunction = (withdrawalAmount) => {
    console.log("withdrawalFunction")
    if(withdrawalAmount < availableBalance)
    availableBalance = availableBalance - withdrawalAmount
    console.log(availableBalance)

}
// withdrawalFunction(99)


const pinNumberFunction = (userPinEntered) => {

    if (userPinEntered == pinNumber){
        console.log("pinCorrect")
        withdrawalFunction(200)
    }
        else {
            console.log("pinWrong")
        }

// put console.log in there early and make sure it works 
// what is the function made for?
// check if user pin is correct


}
pinNumberFunction(1234)