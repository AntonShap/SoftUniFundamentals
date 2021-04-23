// 9.

function solve (n) {
    n = Number(n)

    let start = 97
    let end = 97+n

    for (let firstAscii = start; firstAscii < end; firstAscii++){
        for (let secoundAscii = start; secoundAscii < end; secoundAscii++) {
            for (let thirdAscii = start; thirdAscii < end; thirdAscii++) {
                let firstletter = String.fromCharCode(firstAscii)
                let secoundletter = String.fromCharCode(secoundAscii)
                let thirdLetter = String.fromCharCode(thirdAscii)

                console.log(`${firstletter}${secoundletter}${thirdLetter}`)


            }
            
        } 
    }

  
}

solve (20)







/* 
// 1.

function solve (input1, input2, input3){

console.log(`${input1}${input3}${input2}`)
}

solve ('John','Smith','->')

// 2.

function solve (toReplace, symbol, compare){

let finalText = ``

for (let index = 0; index < toReplace.length; index++) {
    if (toReplace[index] === `_`) {
        finalText += symbol        
    } else { 
        finalText += toReplace[index]
    }
}    

if (finalText === compare) {
    console.log(`Matched`)
} else {
    console.log(`Not Matched`)
}
  

}

solve ('Str_ng', 'i', 'String')

// 3.

function solve (toReplace, symbol, compare){

let sum = toReplace + symbol + compare
  
console.log()

if (sum % 1 !== 0) {
    console.log(`${sum} - Float`)  
} else {
    console.log(`${sum} - Integer`)
}

}

solve (9, 100, 1.1)

// 4.

function solve (input1){

let num = input1.toString();
let sum = 0;

    for (let index = 0; index < num.length; index++) {
        sum += Number(num[index])

    }
    //console.log(sum)

    let result = sum.toString().includes(`9`)

    console.log(result
        ? `${num} Amazing? True`
        : `${num} Amazing? False`
        )
}

solve (1233)

// 6.

function solve (input1, input2, input3){

let distance = Number(input1)
let passengers= Number(input2) 
let fuelPrice = Number(input3)


let neededFuel = (distance/100)*7
neededFuel += passengers*0.1
let cash = neededFuel*fuelPrice

console.log(`Needed money for the trip is ${cash}lv.`)

}

solve (260, 9, 2.49)

// 8.

function solve (input1){

    

    for (let i = 1; i <= input1; i++) {
        //console.log(i)
        let num = i.toString()

        let sum = 0

        for (let index = 0; index < num.length; index++) {
            sum+=Number(num[index])
        
        }

        if(sum===5 || sum===7 || sum===11){
            console.log(`${i} -> True`)
        } else {
            console.log(`${i} -> False`)
        }
    }

}

solve (20)

*/