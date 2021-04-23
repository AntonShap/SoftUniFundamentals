// 3.

function number123 (input1){

let array = input1.split(` `).map(Number);


let totalSum = 0;
for (let i in array) {
  totalSum += array[i];
}

let mean = totalSum / array.length

mean = Number(mean.toFixed(2))
//mean = Number(mean)

let arrayToModerate = array.slice(0).filter(function(value){
  return value > mean
})

arrayToModerate.sort((a,b) => b-a)

if (arrayToModerate.length > 0 ) {
  
  if (arrayToModerate.length < 5){
    return arrayToModerate.join(` `)

  }
  
  let taken = arrayToModerate.splice(5,Number(arrayToModerate.length))
  return arrayToModerate.join(` `)
  
} else {
  console.log(`No`)
}

}

number123('5 2 3 4 -10 30 40 50 20 50 60 60 51')

/*

// 1.

function solve(input){
let totalStudents = Number(input.splice(3))
let teamCapacity = Number(input[0]) + Number(input[1]) + Number(input[2])
let hours = 0
let breakCounter = 0

while (totalStudents > 0) {
    totalStudents-=teamCapacity
    hours++
    breakCounter++
    if(breakCounter % 3 === 0){
        hours++
    }
}
if(hours === 0){
    hours++
}

console.log(`Time needed: ${hours}h.`)
}

solve(['1','2','3',`0`])


// 2.

function solve2(input1){

   
    let array = input1.shift().split(` `).map(Number)

    for (const line of input1) {
        let [command, index1, index2] = line.split(` `)
        
        switch (command) {
          case `swap`:
            let onHold = array[index1]
            array[index1] = array[index2]
            array[index2] = onHold
            break;
          case `multiply`:
            array[index1] = array[index1] * array[index2]
            break;
          case `decrease`:
            let newArray = array.map(a => a - 1)
            array = newArray
            break;

          default:
              //console.log(array.join(` `))
            break;
        }
    }

    console.log(array.join(`, `))
    
    


    //console.log(array)
}

solve2([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  )
*/