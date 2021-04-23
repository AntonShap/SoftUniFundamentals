// 8.

function printStars(count) {
        console.log("*".repeat(count));
      }
    

printStars(3)
//solve([1, 2, 2, 2, 2, 1])
//solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
//solve([1, 1, 1, 2, 3, 1, 3, 3]);
//solve([4, 4, 4, 4]);
//solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);

/*
// 1. 

function solve(input1){

    let sumOriginal = 0
    let sumChanged = 0

    for (let index = 0; index < input1.length; index++) {
        sumOriginal+=input1[index]
        if (input1[index] % 2 === 0 ) {
            input1[index]+=index  
            sumChanged += input1[index]
        } else {
            input1[index]-=index 
            sumChanged += input1[index]
        }
        
    }
    console.log(input1)
    console.log(sumOriginal)
    console.log(sumChanged)

}

solve([5, 15, 23, 56, 35])

// 2. 

function solve(input1,input2){


    for (let index = 0; index < input1.length; index++) {
        for (let index2 = 0; index2 < input2.length; index2++) {
            if(input1[index] === input2[index2])
            console.log(input1[index])
        } 
    }
    
    console.log(input1)
    

}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2']
)

// 2. 

function solve(input1,input2){


    for (let index = 0; index < input1.length; index++) {
        if(input2.includes(input1[index])){
        console.log(input1[index])
        }
    }
    
    
    

}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2']
)

// 3. 

function solve(input1,input2){

    let array3 = []

    for (let index = 0; index < input1.length; index++) {
        if(index % 2 === 0){
           array3.push(Number(input1[index]) + Number(input2[index])) 
        }else {
            array3.push(input1[index] + input2[index])
        }
        
    }

    console.log(array3.join(` - `))

}

solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)

// 4. 

function solve(input1,input2){

    for (let index = 0; index < input2; index++) {
        
        let carriedNum = input1.shift()
        input1.push(carriedNum)
        
    }

    console.log(input1.join(` `))

}

solve([51, 47, 32, 61, 21], 2
)

// 5. 

function solve(input1){

let array1 = []

    for (let index = 0; index < input1.length; index++) {
        
        if(input1[index] > input1[index+1]){
            array1.push(input1[index])
        }
        if (index === input1.length - 1){
        array1.push(input1[index])
        }
    }
    
    console.log(array1.join(` `))
}



solve([1, 4, 3, 2])

// 6.

function solve(array) {
  let leftSum = 0;
  let rightSum = 0;
  let isEqual = false

  for (let i = 0; i < array.length; i++) {
      rightSum = 0
      leftSum = 0
    
    //right sum
    for (let m = i + 1; m < array.length; m++) {
        rightSum += array[m]
    }

    //left sum
    for (let n = 0; n < i; n++) {
        leftSum += array[n]    
    }

    if (rightSum === leftSum){
        isEqual = true
        console.log(i)
    }
  }

  if (isEqual !== true){
      console.log(`no`)
  }
}

solve([1, 2, 3, 3]);

// 7.

function solve(array) {

let sequence = []

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let currentSequeence = [element]
    
    for (let j = i+1; j < array.length; j++) {
        if(element == array[j]){
            currentSequeence.push(element)
        } else {
            break
        }
    }

    if(sequence.length < currentSequeence.length){
        sequence = currentSequeence
    }

    
        
    
}

console.log(sequence.join(` `))
 
    
}
//solve([1, 2, 2, 2, 2, 1])
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);
*/
