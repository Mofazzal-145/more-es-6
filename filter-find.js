
// find largest number

const numbers = [12, 32, 4, 5, 7, 78, 23];
const bigNumbers = numbers.filter(number => number > 20);
//console.log(bigNumbers);

// find small number

const numbers2 = [12, 32, 4, 5, 7, 78, 23];
const smallNumbers = numbers2.filter(number => number < 10);
//console.log(smallNumbers);

// another example

const products = [
    {name: 'Laptop', price: 50000, color: 'dark'},
    {name: 'mobile phone', price: 20000, color: 'black'},
    {name: 'marker pen', price: 55, color: 'yellow'},
    {name: 'water bottle', price: 120, color: 'blue'},
    {name: 'Table Lamp', price: 500, color: 'green'},
]

const expensive = products.filter(product => product.price >= 500);
const color = products.filter(product => product.color == 'yellow');
/* console.log(expensive);
console.log(color); */


// using find()

const colorItem = products.find(product => product.color == 'yellow');
console.log(colorItem);


