const friends = ['Tom hanks', 'Shakil Ahasan', 'Mohammad Mohitul Islam', 'mofu mofazzal'];

const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products = [
    {name: 'Laptop', price: 50000, color: 'dark'},
    {name: 'mobile phone', price: 20000, color: 'black'},
    {name: 'marker pen', price: 55, color: 'yellow'},
    {name: 'water bottle', price: 120, color: 'blue'},
    {name: 'Table Lamp', price: 500, color: 'green'},
]

/* const productsNames = products.map(product => product.name);
const productPrice = products.map(product => product.price);
console.log(productsNames);
console.log(productPrice); */

products.map(product => console.log(product));
products.forEach(product => console.log(product));




