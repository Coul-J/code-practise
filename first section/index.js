// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")


// let increment = 0

// function peopleEntered () {
//     increment +=1
//     countEl.textContent = increment

// }


// function save() {
//     let currentSave = " " + increment + " - "
//     saveEl.textContent += currentSave
   
//     countEl.textContent = 0
//     increment = 0
    
// }

// let firstName = "kelvin "

// let lastName = "Ohemeng "

// let fullName = firstName + lastName
// console.log(fullName)

// let name = "Linda "

// let greeting = "Hi there, "

// let message = greeting + name + "!"

// function logging () {
//     console.log(message)
// }

// logging()


// let myPoints = 3



// function adding () {
//     myPoints += 3
// }
// function subtracting () {
//     myPoints -= 1
// }

// adding() 
// adding() 
// adding() 
// subtracting()
// subtracting()

// console.log(myPoints)  

// console.log("2" + 2)//22
// console.log(11+7)//18
// console.log(6 + "5")//65
// console.log("my points: " + 5 +9 )//my pionts: 59 
// console.log(2+2)//4
// console.log("11" + "14")//114

// let error = document.getElementById("error")
// console.log(error)

// function purchase() {
//     error.textContent = "Something went wrong, please try again"
// }

// let num1 = 10
// let num2 = 50

// document.getElementById("numb1-el").textContent = num1
// document.getElementById("numb2-el").textContent = num2




// let sumEl = document.getElementById("sum-el")

// function add() {
//     let plus = num1 + num2
//     sumEl.textContent = "sum: " + plus 

    
// }
// function subtract() {
//     let minus = num1 - num2
//     sumEl.textContent = "sum: " + minus 


// }
// function divide() {
//     let diVide = num1 / num2
//     sumEl.textContent = "sum: " + diVide 

// }
// function multiply() {
//     let mulTiply = num1 * num2
//     sumEl.textContent = "sum: " + mulTiply 

// }


let player = {
    name: 'kelvin',
    chips: "154"
}
console.log(player)

let cards = []
let sum = 0
let hasBlackJacked = false
let isAlive = false

let message = " "
let  messageEl = document.getElementById("message-el")
// let  sumEl = document.getElementById("sum-el")
let  sumEl = document.querySelector("#sum-el")
let  cardEl = document.querySelector("#card-el")
let playerEl = document.getElementById('player-el')


playerEl.textContent = player.name + ": $" + player.chips;


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if  (randomNumber === 1){
        return 11
    } else if(randomNumber > 10 ){
        return 10
    } else {return randomNumber};

        
}



function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardEl.textContent = "Cards: " 

    for (let i = 0; i < cards.length; i++) {
        console.log(cards[i])
        cardEl.textContent += cards[i] + " "
        
    }


    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 😊"
    } else if(sum === 21) {
        message = "Woohoo! You've got blackjack 🥳"
        hasBlackJacked = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    
    messageEl.textContent = message
    
}




 
function runNewCard() {
    if (isAlive === true && hasBlackJacked === false ){
        let newCard = getRandomCard()
        sum +=  newCard
        cards.push(newCard)
        renderGame()
    }

}
