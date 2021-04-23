// 8.

function manipulation(input){

    let array = input.shift()
                     .split(` `)
                     .map(n => Number(n))

    //let inputCopy = input.slice(0)

    for (let i = 0; i < input.length; i++) {
        let currentAction = input[i].split(` `)[0]
        let current = 0

        if(currentAction === `Add`){
            current = Number(input[i].split(` `)[1])
            array.push(current)
        } else if (currentAction === `Remove`){
            current = Number(input[i].split(` `)[1])
            currentIndex = array.indexOf(current)
            array.splice(current-1, current)
        } else if (currentAction === `RemoveAt`){
            currentIndex = Number(input[i].split(` `)[1])
            array.splice(current-1, current)
        } else if (currentAction === `Insert`){
            current = Number(input[i].split(` `)[1])
            currentIndex = Number(input[i].split(` `)[2])
            array.splice(currentIndex, 0, current)
        }
        
    }

//console.log(array)
console.log(array.join(` `))

return array.join(` `)

}

manipulation(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)

/*

// 1.

function firstAndLastSum (input){
  return (Number(input[0]) + Number(input[input.length-1]))

}

console.log(firstAndLastSum(['20', '30', '40']))
console.log(firstAndLastSum(['5', '10']))


// 2.

function solve(input){

let array = []

for (let index = 0; index < input.length; index++) {
    if(input[index] >= 0){
        array.push(input[index])
    } else {
        array.unshift(input[index])
    }    
}



console.log(array.join(`\n`))
}

solve([7, -2, 8, 9])
solve([3, -2, 0, -1])


// 3.

function printK (input) {
    let k = input.shift()

    console.log(input.slice(0, k).join(` `))
    console.log(input.slice(-k).join(` `))
}

printK([2, 
    7, 8, 9]
    )



// 4. 

function solve(n, k) {

  let sequence = [1];

  for (let i = 1; i < n; i++) {
    let startIndex = Math.max(0, i-k)
    let innerSequence = sequence.slice(startIndex, i)
    let sum = 0 
    for (let j = 0; j < innerSequence.length; j++) {
        sum += innerSequence[j]
        
    }
    sequence.push(sum)

  }

  console.log(sequence.join(` `))
}

solve(8, 2)   

// 5. 

function oddDoubledAndReversed (input){

   let array = input.filter((n, i) => i % 2 !== 0)
                    .map(n => n * 2)
                    .reverse()
                    .join(` `)

   console.log(array)
}

oddDoubledAndReversed([10, 15, 20, 25])
oddDoubledAndReversed([3, 0, 10, 4, 7, 3])

// 6. 

function twoSmallest (input){

    return input.sort((a, b) => a-b)
                .slice(0, 2)
                .join(` `)


}

console.log(twoSmallest([30, 15, 50, 5]))

// 7. 

function solve(input){


    console.log(input.sort((a,b) => a.localeCompare(b))
                     .map((n,i) => `${i+1}.${n}`)
                     .join(`\n`)
    )
}

solve(["Potatoes", "Tomatoes", "Onions", "Apples"])
  */