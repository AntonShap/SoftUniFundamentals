// 9. 

function gladiatorInventory (input){

    let inventory = input.shift().split(` `)

    for (let line of input) {
        let [action, weapon] = line.split(` `)
        //console.log(`${action} ${weapon}`)
        if (action === `Buy`){
            if(inventory.includes(weapon)){
                
            } else{
                inventory.push(weapon)
            }
        } else if(action === `Repair`){
            if(inventory.includes(weapon)){
                let indexToRepair = inventory.indexOf(weapon)
                let repairedWeapon = inventory.splice(indexToRepair, 1)
                inventory.push(repairedWeapon.join())
            }
        } else if (action === `Upgrade`){
            let [weaponToUpgrade, upgrade] = weapon.split(`-`)
                if(inventory.includes(weaponToUpgrade)){
            let indexToUpgrade = inventory.indexOf(weaponToUpgrade)
            inventory.splice(indexToUpgrade+1, 0, `${weaponToUpgrade}:${upgrade}`)
            }
        } else if(action === `Trash`){
            if(inventory.includes(weapon)){
            let indexToTrash = inventory.indexOf(weapon)
                inventory.splice(indexToTrash, 1)
            }
        }
        

    }

    console.log(inventory.join(` `))
}

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
)


/*

// 1.

function train(input){

    let trainWagons = input.shift()
                           .split(` `)
                           .map(Number)

    let capacity = Number(input.shift())
                        

    for (const element of input) {
        let [command , passengers] = element.split(` `)

        if (command === `Add`){
            trainWagons.push(Number(passengers))
        } else {
            let passengersToAdd = Number(command)
            
            for (let i = 0; i < trainWagons.length; i++) {
                if (trainWagons[i] + passengersToAdd <= capacity) {
                    trainWagons[i] += passengersToAdd
                    break
                }
                
            }
        }
    }
    
console.log(trainWagons.join(` `))
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)


// 2. 

function dedupe (input) {

    let dedupped = []

    for (const n of input) {
        
            if(!dedupped.includes(n)){
                dedupped.push(n)
            }
            
        }
    
    return dedupped.join(` `)

}

dedupe([7, 8, 9, 7, 2, 3, 4, 1, 2])

// 3. 

function partyList (input){

    let going = []
    let notGoing = []

    for (const current of input) {
        let rsvp = current.split(` `)

        if (rsvp[2] === `not`){
            notGoing.push(rsvp[0])
            console.log(`${rsvp[0]} is not in the list!`)
            if(going.includes(rsvp[0])){
                let indexToRemove = going.indexOf(rsvp[0])
                going.splice(indexToRemove, 1)
            }
        } else {
            if(going.includes(rsvp[0])){
                console.log(`${rsvp[0]} is already in the list!`)
                break
            }
            going.push(rsvp[0])
            
        }
    }

    console.log(going.join(`\n`))
    //console.log(notGoing.join(` `))

}

partyList(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

)

// 4. 

function weirdSort(input){

    let increasing = input.slice().sort((a,b) => a-b)
    let newOrder = []

    while (increasing.length > 0) {
        let bigger = increasing.pop()
        newOrder.push(bigger)
        let smaller = increasing.shift()
        newOrder.push(smaller)
    }

    console.log(newOrder.join(` `))
    
}

weirdSort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])

// 5. 

function compare (input){

    console.log(input.sort((a,b) => a.length - b.length || a.localeCompare(b))
                     .join(`\n`))
}

compare(["Isacc", "Theodor", "Jack", "Harrison", "George"])


// 6. 

function boom (mineField, mineSpecs){

    let bomb = mineSpecs[0]
    let splashZone = mineSpecs[1]
     
    
    for (let i = 0; i < mineField.length; i++) {
        let current = mineField[i]
        
        if(current === bomb){
            mineField.splice((i-splashZone), ((splashZone*2)+1))
        }
        
    }

    
    //console.log(mineField.indexOf(bomb))
    
    
    
    console.log(mineField.reduce((a, b) => a + b, 0))
    //console.log(mineField.join(` `))
    //console.log(mineSpecs.join(` `))
}

boom([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
    )

    // 7. 

function numberSearch (array, doStuff){

    let shorterArray = array.splice(0, doStuff[0])

    shorterArray.splice(0, doStuff[1])

    let count = 0 

    shorterArray.forEach(element => {
        if(element === doStuff[2]){
            count++
        }
    });
    
    //console.log(shorterArray.join(` `))
    console.log(`Number ${doStuff[2]} occurs ${count} times.`)
}

numberSearch([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )

    // 8. a

function arrayManipulator(array, manipulations) {
  for (let i = 0; i < manipulations.length; i++) {
    let currentAction = manipulations[i].split(` `);

    switch (currentAction[0]) {
      case `add`:
        array.splice(currentAction[1], 0, currentAction[2]);
        break;
      case `addMany`:

      // RETHINK ME !!!
        for (let j = 1; j < currentAction.length; j++) {
        if(currentAction[1]=== `0`){
            array.splice(0, 0, currentAction[j]);
        } else {
            array.splice(Math.abs(currentAction[1])+1, 0, currentAction[j]); 
        }
        
            
        }
        break;
      case `contains`:
        console.log(array.indexOf(currentAction[1]))
        break;
      case `remove`:
        array.splice(currentAction[1], 1)
        break;
      case `shift`:
        for (let k = 0; k < currentAction[1]; k++) {
            let move =array.splice(0, 1)
            array.push(move)
        }
        break;
      case `sumPairs`:
        for (let m = 0; m < array.length; m++) {
            let secoundEl = array[m + 1] ? array[m + 1] : 0
            array[m] += secoundEl
            array.splice(m+1, 1)
        }

        break;
      case `print`:
         let array2 = array.map(Number)
        return console.log(`[${array.join(`, `)}]`);
        

      default:
        break;
    }
  }

  //console.log(array);
}

arrayManipulator(
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"] 
);

// 8. b

function manipulator (array, actions){

    for (const line of actions) {
        
        let [comm, index, ...element] = line.split(` `)
        element = element.map(Number)
        index = Number(index)
        //console.log(comm, index, element)

        if ( comm === `add` || comm === `addMany`){
            array.splice(index, 0, ...element)
        } else if (comm === `contains`){  
            console.log(array.indexOf(index))
        } else if (comm === `remove`){
            array.splice(index, 1)
        } else if (comm === `shift`){
            let rotations = index % array.length 
            let splicedPart = array.splice(0, rotations)
            array.push(...splicedPart)
        } else if (comm === `sumPairs`){
            for (let i = 0; i < array.length; i++) {
                let secoundElement = array[i+1] ? array[i+1] : array[0]
                array[i] += secoundElement
                array.splice(i+1,1)
            }
        } else if (comm === `print`){
            console.log(`[ ${array.join(`, `)} ]`)
        }
    }
//console.log(array)

}

manipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    
    )
*/