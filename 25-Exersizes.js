//5.

function solve(input) {


  let type = {
    S: 4,
    H: 3,
    D: 2,
    C: 1
  }

  let power = {
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  }

  let players = {}

  for (const line of input) {
    let [name, cards] = line.split(`: `)
    if(players.hasOwnProperty(name)){
      players[name].push(...cards.split(`, `))
    }else{
      players[name] = cards.split(`, `)
    }
    
  }

  Object.keys(players)
                      .forEach(name =>{
                        players[name] = new Set(players[name])
                        let cardSet = players[name]
                        let total = 0
                        for (let card of cardSet) {
                          card = card.split(``)
                          let cardType = card.pop()
                          let cardPower = card.join(``)
                          let points = 0
                          if(isNaN(cardPower)){
                            points = type[cardType] * power[cardPower]
                          } else {
                            points = type[cardType] * Number(cardPower)
                          }
                          total += points
                        }
                        players[name] = total
                      })

  console.log(Object.keys(players).map( name => `${name}: ${players[name]}`).join(`\n`))
 
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD',
    ]
    )


/*

// 1.

function solve(input){

    let occurances = {}
    input
        .shift()
        .split(` `)
        .forEach( word => {
        occurances[word] = 0
    })

    input.forEach( w => {
        if (occurances.hasOwnProperty(w)){
            occurances[w]++
        }
    })

    //console.log(occurances);

    let sorted = Object.keys(occurances)
                       .sort((a, b) => occurances[b] - occurances[a])
                       .map(w => `${w} - ${occurances[w]}`)
                       .join(`\n`)

console.log(sorted);

//console.log(occurances)
}

solve([
    'this sentence', 'In','this','sentence','you',
    'have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this',
    'is','your','task'
    ]
    )


//2.

function solve(input){

let myMap = new Map()

   input.split(` `)
        .forEach((element) => {
                element = element.toLowerCase();
                if (!myMap.has(element)) {
                  myMap.set(element, 0);
                
                  // myMap[element] = 0
                }
            
                // myMap[element]++
                myMap.set(element, myMap.get(element) + 1);
        });

        
        console.log(Array.from(myMap.keys()).filter( x => myMap.get(x) % 2 !== 0 ).join(` `))



//console.log(myMap)

}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')


//3.

function solve(input) {
  let parking = {};

  for (const line of input) {
    let [direction, carNumber] = line.split(`, `);
    if (direction === `IN`) {
      parking[carNumber] = 1;
    } else if (direction === `OUT`) {
      delete parking[carNumber];
    }
  }

  let parkingArray = Object.keys(parking);

  if (parkingArray.length === 0) {
    console.log(`Parking Lot is Empty`);
  } else {
    console.log(parkingArray.sort((a, b) => a.localeCompare(b)).join(`\n`));
  }
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)



//4.

function solve(input) {
  // vip vs regular

  let guestList = {
    vip: [],
    regular: [],
  };

  let name = input.shift()
  
  while (name !== `PARTY`) {
      
    let char = name[0];
    if (!isNaN(char)) {
      guestList.vip.push(name);
    } else {
      guestList.regular.push(name);
    }

    name = input.shift()
  }

  

  input.forEach((guest) => {
    if (guestList.vip.includes(guest)) {
      let index = guestList.vip.indexOf(guest);
      guestList.vip.splice(index, 1);
    } else if (guestList.regular.includes(guest)) {
      let index = guestList.regular.indexOf(guest);
      guestList.regular.splice(index, 1);
    }
  });

    console.log(guestList.vip.length + guestList.regular.length);
    console.log(`${guestList.vip.join(`\n`)}\n${guestList.regular.join(`\n`)}`)
}

solve(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]



)
    */