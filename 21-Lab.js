

//7. 

class Vehicle {
        constructor(type, model, {engine, power}, fuel){
            this.type = type
            this.model = model
            this.parts = {
                engine,
                power,
                quality: engine * power
            }
            this.fuel = Number(fuel)
        }

        drive(fuelLoss){
            return this.fuel -= fuelLoss
        }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);

//let vehicle1 = new Vehicle('a', 'b', parts, 500);

//console.log(vehicle);

vehicle.drive(100);

//vehicle1.drive(300);
console.log(vehicle.fuel);
//console.log(vehicle1.fuel);
console.log(vehicle.parts.quality);

/*



//1.

function solve(data) {

//  { name ...... , id: number}

for (const line of data) {

    let obj = {
        name: line,
        id: line.length
    }
    
    console.log(`Name: ${obj.name} -- Personal Number: ${obj.id}`)
}
 
}



solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )

//1b. 

function solve(data) {
  class Employee {
    constructor(str) {
      this.name = str;
      this.id = str.length;
    }

    print() {
      return `Name: ${this.name} -- Personal Number: ${this.id}`;
    }
  }

  for (const str of data) {
    let obj = new Employee(str);
    console.log(obj.print())
  }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )

//2. 

function solve(data){

    for (const line of data) {
        let [town, latitude, longitude] = line.split(` | `)
        latitude = Number(latitude).toFixed(2)
        longitude = Number(longitude).toFixed(2)
        
        let obj = {
            town,
            latitude,
            longitude
        }

        console.log(obj)
    }

    
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)


//3. 

function solve(stock, order){

    let shop = {}

   for (let index = 0; index < stock.length; index+=2) {
       let element = stock[index]

       shop[element] = Number(stock[index + 1])
       
   }

   for (let index = 0; index < order.length; index+=2) {
       const element = order[index];

       if(!shop.hasOwnProperty(element)){
           shop[element] = 0
       } 
           shop[element] += Number(order[index+1])
   }

   for (const key in shop) {
       console.log(`${key} -> ${shop[key]}`)
   }

}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )


    //3a. 

function solve(stock, order) {
  let shop = {};

  addToShop(stock, shop);

  addToShop(order, shop)
  

  for (const key in shop) {
    console.log(`${key} -> ${shop[key]}`);
  }

  function addToShop(arr, obj) {
    for (let i = 0; i < arr.length; i+=2) {
      const product = arr[i];
      const quantity = Number(arr[i + 1]);

      if (!obj.hasOwnProperty(product)) {
        obj[product] = 0;
      }
      obj[product] += quantity;
    }

    return obj;
  }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )

//4. 

function solve(data) {

    // {movie name,  director, date}

    let movies = []

    for (const line of data) {
        if(line.includes(`addMovie`)){
            let name = line.split(`addMovie `)[1]
            movies.push({ name })
        } else if (line.includes(`directedBy`)){
            let [name , director] = line.split(` directedBy `)
            let movie = movies.find( m => m.name === name)

            if (movie){
                movie.director = director
            }
        } else if (line.includes(`onDate`)){
            let [name , date] = line.split(` onDate `)
            let movie = movies.find( mObj => mObj.name === name)

            if (movie){
                movie.date = date
            }
        }

    }

    movies.forEach( movie => {
        if (movie.name && movie.date && movie.director){
            console.log(JSON.stringify(movie));
        }
    })
   // console.log(movies);
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    
    )

//5. 

function solve(data) {

         data
                .map(line => {
                    let [name, level, items] = line.split(` / `);
                    items = items
                    .split(`, `)
                    .sort((a, b) => a.localeCompare(b))
                    .join(`, `);
                    return {
                        name,
                        level: Number(level),
                        items
                    }
                })  
                .sort((a,b) => a.level - b.level)
                .forEach(hero => {
                    console.log(`Hero: ${hero.name}`)
                    console.log(`level => ${hero.level}`)
                    console.log(`items => ${hero.items}`)
                })
        

}

solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    )
*/