// 8. 

function solve (input){

// keep going while array longer than 1 
while (Number(input.length) > 1) {
    //go through all elements and add the next one
  for (let i = 0; i < input.length; i++) {
        //want to skip the last element
        if (i !== Number(input.length)-1) {
        input[i] += input[i + 1];
        }  
    }
    //also want to drop the last one once done
    input.pop()
  }
  console.log(input.join())
}

solve ([2,10,3])




/*
// 1. 

function solve (input1){

    console.log (input1[0]+input1[(input1.length)-1])
    }
    
    solve ([20, 30, 40])


// 2. 

function solve (input1){

let weekDays = [`Monday`, `Tuesday`,
                `Wednesday`, `Thursday`, 
                `Friday`, `Saturday`, 
                `Sunday`]

    if (input1 >= 1 && input1 <=7){
        console.log(weekDays[input1-1])
    } else {
        console.log (`Invalid day!`)
    }
}

solve (3)

// 3. 

function solve (input1, input2){

let reverse = []

for (let index = 0; index < input1; index++) {
    
   //reverse.push(input2[(input1-index-1)]) 
    //console.log(input2[(input1-index-1)])

    reverse.push(input2[(input1-index-1)])

    }
    reverse = reverse.join(` `)
    console.log(reverse)
}


//solve (3, [10, 20, 30, 40, 50])
solve (4, [-1, 20, 99, 5])
//solve (2, [66, 43, 75, 89, 47])

// 4. 

function solve (input1){

input1 = input1.reverse().join(` `)

console.log(input1)

}


solve (['a', 'b', 'c', 'd', 'e'])
solve (['abc', 'def', 'hig', 'klm', 'nop'])
solve (['33', '123', '0', 'dd'])

// 5. 

function solve (input1){

let sum = 0

for (let index = 0; index < input1.length; index++) {
    if (Number(input1[index]) % 2 === 0 ) {
        sum+=Number(input1[index])
    }
    
}
console.log(sum)
}


solve (['1','2','3','4','5','6'])
solve (['3','5','7','9'])
solve (['2','4','6','8','10'])

// 6. 

function solve (input1){

let sumEven = 0
let sumOdd = 0

for (let index = 0; index < input1.length; index++) {
    if (Number(input1[index]) % 2 === 0 ) {
        sumEven+=Number(input1[index])
    } else {
        sumOdd+=Number(input1[index])
    }
    
}
console.log(sumEven - sumOdd)
}


solve ([1,2,3,4,5,6])
solve ([3,5,7,9])
solve ([2,4,6,8,10])

// 7. 

function solve (input1, input2){

for (let index = 0; index < input1.length; index++) {
    input1[index] = Number(input1[index])
}

for (let index = 0; index < input2.length; index++) {
    input2[index] = Number(input2[index])
}
//console.log(input1)
//console.log(input2)

let areEqual = true
let sum = 0

for (let index = 0; index < input1.length; index++) {
    if (input1[index] !== input2[index]){
    console.log(`Arrays are not identical. Found difference at ${index} index`)
    areEqual = false
    break;
    } else {
    sum+=input1[index]
    }
}

if (areEqual === true) {
console.log(`Arrays are identical. Sum: ${sum}`)
}

}


//solve (['10','20','30'], ['10','20','30'])
//solve (['1','2','3','4','5'], ['1','2','4','4','5'])
solve ([`1`],[`10`])
*/