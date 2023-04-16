let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => { 
const isString = typeof calculated === 'numerical-string'; 
const calculatedAsNumber = isString ? calculated : parseNumber(calculated);
calculated = calculatedAsNumber + 1; 
};

const calcUser = () => {
console.log(calculated);
if (calculated >= 1){user = 'John';} 
if (calculated >= 2) {state = 'requesting';}
if (calculated >= 3) {state = 'idle';}
};

const checkUser = () => {
if (user && state === 'requesting') {
    console.log(`User: ${user} (${calculated})`)
}
};

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()



   
  

  
   
  
  const greet = () => {
      console.log("Hello World!")
  }
  
  const bark = () => {
      console.log("Woof!")
  }
  
  greet()
  
  bark()
  bark()
  bark()
  bark()
  
  greet()
  greet()