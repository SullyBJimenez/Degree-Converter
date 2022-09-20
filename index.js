// the line below sets the variable kelvin to a constant number 
const kelvin = 300;

// the line below gets the number of kelvin into celsius by substracting 273
let celsius = kelvin - 273;

// the line below converts the number to Newton
let newton = celsius*(33/100);

// the line below rounds the number down
newton = Math.floor(newton);

// the line below converts the number to fahrenheit
let fahrenheit = celsius*(9/5) + 32;

// the line below rounds the number down
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${kelvin} degrees Kelvin,`);
console.log(`The temperature is ${celsius} degrees Celsius,`)
console.log(`The temperature is ${newton} degrees Newton,`)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);