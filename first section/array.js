
///logical AND Operators


// let likesDocumentaries = false
// let likesStarups = true


// if( likesDocumentaries === true || likesStarups === true){

//         recieveCert()
// }

// function recieveCert() {
//     console.log("Hey, checkout this one")
// }


// let listings = {
//     hasPaid: true,
//     rooms: 2,
//     amount: [100, 200, 400],
//     single: false
// }

// console.log(listings.amount)
// console.log(listings.rooms)

// let person ={
//     name: 'kelvin',
//     age: 21,
//     country: 'Ghanan'
// }

// function logData() {
//     console.log(    person.name + ' is ' + person.age + ' years old' + " and lives in " + person.country)
// }

// logData()

// let age = 15

// if(age < 6 ){
//     console.log('free')
// }else if (age<18 ){
//     console.log('child discount')
// }else if( age<27){
//     console.log('student discount')
// }else if( age <67){
//     console.log('full price')
// }else {
//     console.log('senior citizen discount' )
// }

// let largeCountry = ['Tuvalu', 'India', 'USA', 'Indonesia', 'Monaco']
// console.log('The 5 largest country in the world: ')
// // console.log('- ', largeCountry[0])
// // console.log('- ', largeCountry[1])
// // console.log('- ', largeCountry[2])
// // console.log('- ', largeCountry[3])
// // console.log('- ', largeCountry[4])



// // for (let i = 0; i < largeCountry.length; i++) {
// //     console.log('- ' + largeCountry[i])
    
// // }

// largeCountry.pop()
// largeCountry.shift()
// largeCountry.unshift('China')
// largeCountry.push('Parkistan')
// console.log(largeCountry)


// let dayOfMonth = 31
// let weekDay = 'Friday'


// if (dayOfMonth=== 13 && weekDay==='Friday'){
//     console.log('😱')
// }


// let hands = ['rock', 'paper', 'scissors']

// function gethand() {
//     let randomIndex = Math.floor(Math.random() * 3)
//     return hands[randomIndex]}

// console.log(gethand())


let fruit = ['f1', 'o1', 'f1', 'f1', 'o1']
let appleShelf = document.getElementById('apple-shelf')
let orangeShelf = document.getElementById('orange-shelf')

function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === 'f1'){
            appleShelf.textContent += 'f1'
        }else if(fruit[i] === 'o1'){
            orangeShelf.textContent += 'o1'
        }
        
    }
}

sortFruit()

