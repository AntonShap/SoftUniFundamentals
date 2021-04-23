// 11.

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

solve (15)










/*

// 1.

function solve (input1) {
    console.log(input1*2)
}

solve (2)




// 2.

function solve (input1) {
    if (input1 >= 5.5) {
        console.log(`Excellent`)
    } else {
        console.log(`Not excellent`)
    }
}

solve (5.4)



// 3.

function solve () {
    for (let index = 1; index < 6; index++) {
        console.log(index);
    }
}

solve ()



// 4.

function solve (input1) {
    while (input1 > 0) {
        console.log(input1)
        input1--
    }
}

solve (10)



// 5.

function solve (input1,input2) {
    while (input1 >= input2) {
        console.log(input1)
        input1--
    }
}

solve (10,5)



// 6.

function solve (input1,input2,input3) {
    console.log(`Name: ${input1}, Age: ${input2}, Grade: ${(input3).toFixed(2)}`)
}

solve ('John', 15, 5.54678)




// 7.
function solve (input1) {
    
    switch (input1) {
        case 1: console.log(`January`)
            break;
        case 2: console.log(`February`)
            break;
        case 3: console.log(`March`)
            break;
        case 4: console.log(`April`)
            break;
        case 5: console.log(`May`)
            break;
        case 6: console.log(`June`)
            break;
        case 7: console.log(`July`)
            break;
        case 8: console.log(`August`)
            break;
        case 9: console.log(`September`)
            break;
        case 10: console.log(`October`)
            break;
        case 11: console.log(`November`)
            break;
        case 12: console.log(`December`)
            break;
    
        default:
            console.log(`Error!`)
            break;
    }
}

solve (15)



// 8.

function solve (input1) {
    
    switch (input1) {
        case `USA`: console.log(`English`)
            break;
        case `England`: console.log(`English`)
            break;
        case `Spain`: console.log(`Spanish`)
            break;
        case `Argentina`: console.log(`Spanish`)
            break;
        case `Mexico`: console.log(`Spanish`)
            break; 
        
    
        default:
            console.log(`unknown`)
            break;
    }
}

solve (`Argentina`)



// 9.

function solve (input1,input2) {
    
    if (input2 >=0 && input2 <= 18){
        switch (input1) {
            case `Weekday`:
                console.log(`12$`)
                break;
            
            case `Weekend`:
                console.log(`15$`)
                break;
        
            case `Holiday`:
                console.log(`5$`)
                break;
        
            default:
                break;
        }
    }else if (input2 > 18 && input2 <= 64){
        switch (input1) {
            case `Weekday`:
                console.log(`18$`)
                break;
            
            case `Weekend`:
                console.log(`20$`)
                break;
        
            case `Holiday`:
                console.log(`12$`)
                break;
        
            default:
                break;
        }
    }else if (input2 > 64 && input2 <= 122){
        switch (input1) {
            case `Weekday`:
                console.log(`12$`)
                break;
            
            case `Weekend`:
                console.log(`15$`)
                break;
        
            case `Holiday`:
                console.log(`10$`)
                break;
        
            default:
                break;
        }
    }else 
    console.log(`Error!`)
    
}


solve ('Weekday',42)

// 10.

function solve () {
    
    for (let index = 1; index < 100; index++) {
       if (index % 3 === 0 ) {
           console.log(index)
       }
        
    }
}

solve ()

// 11.

function solve (input1) {

    let sum = 0
    
    for (let index = 1; index < (input1*2); index++) {
        
        if (index % 2 !== 0) {
            console.log(index)
            sum+= index
        }
    }

    console.log(`Sum: ${sum}`)
}

solve (3)

*/