//4. 

function solve(input){

}

solve()

/*

//1

function solve(input){

let result = `Bought furniture:`
let sum = 0

for (const line of input) {

    let regex = />>(?<name>[a-zA-Z]+)<<(?<price>[0-9]+\.?[0-9]+)!(?<count>[0-9])/gm
    
    let match = regex.exec(line)

    if(match){
        result += `\n${match[1]}`
        sum += Number(match.groups.price)*Number(match.groups.count)
    }
    
    
}
result += `\nTotal money spend: ${sum.toFixed(2)}`

console.log(result)

}

solve([`>>Sofa<<312.23!3`,`>>TV<<300!5`,`>Invalid<<!5`,`Purchase`])


//2.

function solve(input) {
  let racers = {};

  input
    .shift()
    .split(`, `)
    .forEach((element) => {
      racers[element] = 0;
    });

  //console.log(Object.keys(racers).join(` `))

  for (const line of input) {
    let regexAZ = /[a-zA-Z]/g;
    let regexN = /\d/g;
    let matchAZ = line.match(regexAZ);
    //console.log(matchAZ.join(``))

    if (racers.hasOwnProperty(matchAZ.join(``))) {
      //console.log(matchAZ.join(``))
      let matchN = line.match(regexN);
      //console.log(matchN.join( ))

      for (const line of matchN) {
        racers[matchAZ.join(``)] += Number(line);
      }
    }
  }

  let sorted = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);

  //console.log(sorted)

  console.log(
    `1st place: ${sorted[0]}\n2nd place: ${sorted[1]}\n3rd place: ${sorted[2]}`
  );
}

solve([
`George, Peter, Bill, Tom`,
`G4e@55or%6g6!68e!!@`,
`R1@!3a$y4456@`,
`B5@i@#123ll`,
`G@e54o$r6ge#`,
`7P%et^#e5346r`,
`T$o553m&6`,
`end of race`,
])

//3. 

function solve(input){


   let turnover = {}
   let totalIncome = 0

    for (const line of input) {

        if(line === `end of shift`){
            break
        }

        let customerArray = /[A-Z][a-z]+/.exec(/%[A-Z][a-z]+%/.exec(line))
        let customer = customerArray[0]
        
        let productArray = /[a-zA-Z]+/.exec(/<[a-zA-Z]+>/.exec(line))
        let product = productArray[0]

        let quantityArray = /[0-9]+/.exec(/\|[0-9]+\|/.exec(line))
        let quantity = quantityArray[0]

        let priceArray = /[0-9]+\.?[0-9]+/.exec(/[0-9]+\.?[0-9]+\$/.exec(line))
        let price = priceArray[0]

        //console.log(product)
       // console.log(quantity)
        //console.log(price)


        console.log(`${customer}: ${product} - ${(Number(quantity)*Number(price)).toFixed(2)}`)
        totalIncome += Number(quantity)*Number(price).toFixed(2)
    }

    
    //console.log(Object.keys(turnover).join(` `));

    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}

solve([`%George%<Croissant>|2|10.3$`,
    `%Peter%<Gum>|1|1.3$`,
    `%Maria%<Cola>|1|2.4$`,
    `end of shift`])

    //3b. 

function solve(input){

    let regex = /%(?<name>[A-Z][a-z]+)%[^\|\$\%\.]*<(?<product>[\w]+)>[^\|\$\%\.]*\|(?<quantity>[\d]+)\|[^\|\$\%\.]*?(?<price>[\d]+(\.[\d]+)?)\$/
    let total = 0

    for (const line of input){
      let match = regex.exec(line)

      if(match){
        let totalPrice = Number(match.groups.price) * Number(match.groups.quantity)
        console.log(`${match.groups.name}: ${match.groups.product} - ${totalPrice.toFixed(2)}`)
        total += totalPrice
      }
      
      
    }

    console.log(`Total income: ${total.toFixed(2)}`)
}

solve([`%George%<Croissant>|2|10.3$`,
    `%Peter%<Gum>|1|1.3$`,
    `%Maria%<Cola>|1|2.4$`,
    `end of shift`])

*/