// 10.

function solve (array) {

let username = array.shift()

console.log(username, array)

console.log(username)

let pass = username.split(``)

console.log(pass)

let reversedPass = pass.reverse()

console.log(reversedPass)

let joinedPass = reversedPass.join(``)

console.log(joinedPass)
}   

solve (['Acer','login','go','let me in','recA'])






/*
// 1.

function solve (input1) {

   if (input1 >= 0 && input1 <= 3){
        console.log(`baby`)
    }else if(input1 >= 3 && input1 <= 13){
        console.log(`child`)
    }else if(input1 >= 14 && input1 <= 19){
        console.log(`teenager`)
    }else if(input1 >= 20 && input1 <= 65){
        console.log(`adult`)
    }else if(input1 >= 66){
        console.log(`elder`)
    }
}

solve (100)

// 2.

function solve (input1,input2) {

 if (input2 > 15){
     input2 = 15
 }
 let result = (input1).toFixed(input2)
   console.log(parseFloat(result))
}

solve (100.1 , 18)

// 3.

function solve (input1) {

 
 if (input1 % 10 === 0){
    console.log(`The number is divisible by 10`)
   
 } else if (input1 % 7 === 0){
    console.log(`The number is divisible by 7`)
} else if (input1 % 6 === 0){
    console.log(`The number is divisible by 6`)
} else if (input1 % 3 === 0){
    console.log(`The number is divisible by 3`)
} else if (input1 % 2 === 0){
    console.log(`The number is divisible by 2`)
       
 } else {
    console.log(`Not divisible`)
 }
    
      
}

solve (6)

// 4.

function solve (input1, input2, input3) {

 let  group = Number(input1)

 let  type = input2

 let  weekday = input3

 let price = 0

 let discount = 1

 if (group >= 30 && type === `Student`){
     discount = 0.85
 }

 if (type === `Business` && group >=100){
    group-=10
 }

 if (type === `Regular` && group >=10 && group <=20){
     discount = 0.95
 }

 if (weekday === `Friday`){
    if (type === `Students`){
        price = 8.45
    } else if (type === `Business`){
        price = 10.90
    } else if (type === `Regular`){
        price = 15
    }
 } else if (weekday === `Saturday`){
    if (type === `Students`){
        price = 9.80
    } else if (type === `Business`){
        price = 15.60
    } else if (type === `Regular`){
        price = 20
    }
 } else if (weekday === `Sunday`){
    if (type === `Students`){
        price = 10.46
    } else if (type === `Business`){
        price = 16
    } else if (type === `Regular`){
        price = 22.50
    }
 }

console.log(`Total price: ${(parseFloat(price*group*discount)).toFixed(2)}`)
   
}

solve (40,     `Regular`,    `Saturday`)

// 5.

function solve (input1) {

if((input1 % 4 === 0 && input1 % 100 !== 0) || input1 % 400 === 0){
    console.log(`yes`)
} else {
    console.log(`no`)
}
   
}

solve (4)

// 6.

function solve (input1, input2) {

let allNumbers = ``
let sum = 0

for (let index = input1; index <= input2 ; index++) {
    allNumbers += index + ` ` 
    sum += index
}
   
   console.log(allNumbers)
   console.log(`Sum: ${sum}`)
}

solve (4, 10)

// 7.

function solve (input1) {

    for (let index = 1; index <= input1; index++) {
        let line = ` `
        for (let index2 = 1; index2 <= index; index2++){
            line += index + ` `
        }
    
    console.log(line)
    }

}

solve (7)

// 8.

function solve (input1) {

    for (let index = 1; index <= 10; index++) {
        console.log(`${input1} X ${index} = ${index*input1}`)
        
    }

}

solve (7)

// 9.

function solve (array) {

    let password = array.shift();
    let username = ``

    for (let index = 0; index < password.length; index++) {
        username+= password[password.length - (index+1)]  
    }

    //console.log(username)
    let counter = 0

    for (let index = 0; index < array.length; index++) {
        let currentAttempt = array[index]

        
        
        if (array[index] === username) {
            counter++
            console.log(`User ${password} logged in.`)
            break
        } else if (currentAttempt !== username) {
            counter++
            if (counter === 4) {
                console.log(`User ${password} blocked!`)
                break;
            }
            console.log(`Incorrect password. Try again.`)
        }
    }
}

solve ([ 'sunny', 'rainy', 'cloudy', 'sunny', 'not sunny' ])
*/





