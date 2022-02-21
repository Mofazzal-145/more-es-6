
const numbers = [4, 6, 8, 10];
const output2 = [];
/* 
function doubleOld(number) {
    return number * 2;
}
 */
const doubleIt = number => number * 2;
for(const number of numbers){
    // const result = number * 2;
     const result = doubleIt(number);
     output2.push(result);
}
// console.log(output2);


///------ map working for
// 1. loop through each element
// 2. for each element call the provided function 
// 3. result for each element push in a new array


///-------map -----
const numbers2 = [4, 6, 8, 10];
//const doubleIt2 = number => number * 2;
// const output = numbers2.map(doubleIt2);
const output = numbers2.map( number => number * 2); // (x => x * 2)
console.log(output);

const squares = numbers2.map(x => x * x);
console.log(squares);
