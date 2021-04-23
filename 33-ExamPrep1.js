//3. 

function solve(input){

    let heroCount = input.shift()
    let heroes = {}


    // taking the hero names into an object + their hp and mp

    for (const line of input) {
        let [heroName, hp, mp] = input.shift().split(` `)
        hp = Number(hp)
        mp = Number(mp)


        heroes[heroName] = {hp, mp}
    
        heroCount--
        if(heroCount===0){
            break
        }
    }

    let commandParcer = {
        'CastSpell': castSpell,
        'Recharge': recharge,
        'TakeDamage': takeDemage, 
        'Heal': heal
    }

    input
        .forEach(line => {
            let [command, ...tokens] = line.split(` - `)

            if(command !== `End`){
                let func = commandParcer[command]
                console.log(func(heroes,...tokens))
            }
        })
  

    let sortedHeroes = Object.entries(heroes)
                             .sort(compareHeroes)

    for (const [heroName, heroInfo] of sortedHeroes) {
        let { hp, mp } = heroInfo
        console.log(`${heroName}\n  HP: ${hp}\n  MP: ${mp}`)
    }

    function castSpell(heroes, heroName, mpNeeded, spellName){
        mpNeeded = Number(mpNeeded)
        let hero = heroes[heroName]

        if (hero.mp >= mpNeeded){
            hero.mp -= mpNeeded
            console.log(`${heroName} has successfully cast ${spellName} and now has ${hero.mp} MP!`)
        }else{
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
        }       

    }
    
    function takeDemage(heroes, heroName, damage, attacker){
        damage = Number(damage)
        let hero = heroes[heroName]
        hero.hp -= damage

        if(hero.hp>0){
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`)
        } else {
            delete heroes[heroName]
            console.log(`${heroName} has been killed by ${attacker}!`)
        }
    }

    function recharge(heroes, heroName, amount){
        amount = Number(amount)
        let hero = heroes[heroName]
        let oldValue = hero.mp
        hero.mp = Math.min(200, hero.mp + amount)

        console.log(`${heroName} recharged for ${hero.mp-oldValue} MP!`)
    }

    function heal(heroes, heroName, amount ){
        amount = Number(amount)
        let hero = heroes[heroName]
        let oldValue = hero.hp
        hero.hp = Math.min(100, hero.hp + amount)

        console.log(`${heroName} healed for ${hero.hp-oldValue} HP!`)
    }

    function compareHeroes(a, b){
        let [aName, aInfo] = a
        let [bName, bInfo] = b

        let byHealthDescending = bInfo.hp - aInfo.hp

        if(byHealthDescending === 0){
            return aName.localeCompare(bName)
        }

        return byHealthDescending
    }

    

}



solve([
    `4`,
    `Adela 90 150`,
    `SirMullich 70 40`,
    `Ivor 1 111`,
    `Tyris 94 61`,
    `Heal - SirMullich - 50`,
    `Recharge - Adela - 100`,
    `CastSpell - Tyris - 1000 - Fireball`,
    `TakeDamage - Tyris - 99 - Fireball`,
    `TakeDamage - Ivor - 3 - Mosquito`,
    `End`
    
])

/*

//2.

function solve(input){

    let number = input.shift()

    // input = input.join(` `)

    //console.log(num)

    let regex = /(@#+)(?<captured>[A-z][A-Za-z\d]{4,}[A-z])(@#+)/

    input.forEach(line => {
        if (regex.test(line)){
            let tokens = regex.exec(line)
            let barcode = tokens.groups.captured
            let numbers = [...barcode]
                                .filter(symbol => /\d/.test(symbol))
                                .join(``)

            numbers = Number(numbers)

            console.log(typeof numbers)
            console.log(numbers)
            

            
        } else {
            console.log(`Invalid barcode`);
        }
    });

    


}

solve(
    [`3`,
    `@#FreshFisH@#`,
    `@###Brea0D@###`,
    `@##Che4s6E@##`,
    ]
)

*/


/*



*/

