//3. 

function solve(input) {
  let people = {};

  for (const line of input) {
    let newLine = line.split(`:`);
    let command = newLine.shift();

    if (command === `Add`) {
      let [personName, health, energy] = newLine;

      health = Number(health);
      energy = Number(energy);

      people[personName] = { health, energy };
    } else if (command === `Delete`) {

      if (people[newLine]) {
        delete people[newLine];
      }

      if (newLine[0] === `All`) {
        
        for (const key in people) {
          delete people[key];
        }
      }
    } else if (command === `Attack`) {
      let [attackerName, defenderName, damage] = newLine;
      damage = Number(damage);

      if (attackerName && defenderName) {
        people[defenderName].health -= damage;
        people[attackerName].energy--;
        if (people[defenderName].health <= 0) {
          delete people[defenderName];
          console.log(`${defenderName} was disqualified!`);
        }

        if (people[attackerName].energy === 0) {
          delete people[attackerName];
          console.log(`${attackerName} was disqualified!`);
        }
      }
    } else if (command === `Results`) {
      let peopleToPrint = Object.entries(people).sort(
        (a, b) => b[1].health - a[1].health || a[0].localeCompare(b[0])
      );

      let count = Object.keys(people).length;
      console.log(`People count: ${count}`);

      for (const [personName, personInfo] of peopleToPrint) {
        console.log(
          `${personName} - ${personInfo.health} - ${personInfo.energy}`
        );
      }
    }
  }
}




solve
    ([
    "Add:Mark:1000:5",
    "Add:Clark:1000:3",
    //"Attack:Clark:Mark:500",
    "Add:Allison:2500:5",
    //"Attack:Clark:Mark:300",
    "Add:Charlie:4000:10",
   // "Attack:Clark:Mark:500",
    "Results"
   ])
    



/*
//2.

function solve(input){

let number = input.shift()
let registrationCounter = 0

for (const line of input) {
    let regex = /(U\$)(?<userName>[A-Z][a-z]{2,})(U\$)(P\@\$)(?<password>[A-Za-z]{5,}[0-9]{1,})(P\@\$)/

    if (number === 0){
        break;
    }

    if (regex.exec(line) !== null){
        console.log(`Registration was successful`)
        let passwordAndUserName = regex.exec(line)
        console.log(`Username: ${passwordAndUserName.groups.userName}, Password: ${passwordAndUserName.groups.password}`)
        
        registrationCounter++
        number--
        
    } else {
        console.log(`Invalid username or password`);
        number--
    }
  }
  console.log(`Successful registrations: ${registrationCounter}`);
}


solve([
"3",
"U$MichaelU$P@$asdqwe123P@$",
"U$NameU$P@$PasswordP@$",
"U$UserU$P@$ad2P@$"
])




   //1. 

function solve(input){

    let string = input.shift()
    let num = 5

    console.log(string.replace(`${/num/g}`, `s`))

    
}

solve([
`//Thi5 I5 MY 5trING!// `,
`Translate 5 s`,
`Includes string`,
`Start //This`,
`Lowercase`,
`FindIndex i`,
`Remove 0 10`,
`End `,
])
*/

