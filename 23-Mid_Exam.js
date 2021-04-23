//3.

function chatLogger(input) {
  let log = [];

  for (const line of input) {
    let [command, message1, message2, ...messages] = line.split(` `);

    if (command === `Chat`) {
      //add at last position
      log.push(message1);
    } else if (command === `Delete`) {
      //delete that line from the array - if it exists
      if (log.includes(message1)) {
        let indexToDelete = log.indexOf(message1);
        log.splice(indexToDelete, 1);
      }
    } else if (command === `Edit`) {
      //replace that line from the array - if it existss
      if (log.includes(message1)) {
        let indexToReplace = log.indexOf(message1);
        log.splice(indexToReplace, 1, message2);
      }
    } else if (command === `Pin`) {
      //find a message and move to last
      if (log.includes(message1)) {
        let indexToPin = log.indexOf(message1);
        let messageToPin = log.splice(indexToPin, 1).join();
        log.push(messageToPin);
      }
    } else if (command === `Spam`) {
      //all messages to end of the chat
      let spam = [message1, message2, ...messages];
      log.push(...spam);
      //console.log(spam)
    } else if (command === `end`) {
      console.log(log.join(`\n`));
    }
  }
}

chatLogger((
["Chat Hello",
"Chat darling",
"Edit darling Darling",
"Spam how are you",
"Delete Darling",
//"Pin Hello",
"end"])
)


/*

//1.

function calculateBudget (budget, students, flour, eggs, apron){

    budget = Number(budget)
    students = Number(students)
    flour = Number(flour)
    eggs = Number(eggs)
    apron = Number(apron)

    let discount = Math.floor(students/5)

    let quantityNeeded = apron*(Math.ceil(students*1.2)).toFixed(2) + eggs*10*students + flour*(students - discount)

    let remainingCash = budget - quantityNeeded

    //console.log(remainingCash)

    if (remainingCash >= 0){
        console.log(`Items purchased for ${(quantityNeeded).toFixed(2)}$.`)
    } else {
        console.log(`${(remainingCash*(-1)).toFixed(2)}$ more needed.`)
    }

}

calculateBudget(100,
    25,
    4.0,
    1.0,
    6.0)


    //2.

function sugarCubes (input){

    let array = input.shift()

    

    for (const line of input) {
        let [command, index1, index2] = line.split(` `)
        
        if (command === `Add`){
            array.push(Number(index1))
        } else if(command === `Remove`){
            if(array.includes(Number(index1))){
            let indexToRemove = array.indexOf(Number(index1))
            array.splice(indexToRemove, 1)
            }
        } else if(command === `Replace`){
            if(array.includes(Number(index1))){
            let indexToReplace = array.indexOf(Number(index1))
            array.splice(indexToReplace, 1, Number(index2))
            }
        } else if(command === `Collapse`){
            let newArray = []
            for (let i = 0; i < array.length; i++) {
                if (Number(index1)>array[i]) {
                    
                } else{
                    newArray.push(array[i])
                   // array = newArray
                }
                
            }
            //console.log(newArray.join(` `))
            array = newArray
        } else if(command === `Mort`){
            console.log(array.join(` `))
        }

    }

   // console.log(array.join(` `))
   

}

sugarCubes(([[1, 4, 5, 19, 13, 42, 69, 24],
    "Add 1",
    "Remove 4",
    "Replace 1 26",
    "Collapse 40",
    "Mort"])
    )

sugarCubes([[2, -1, 0, -3, 9, 8, 7, 2],
    "Collapse 8",
    "Mort"])
*/
    