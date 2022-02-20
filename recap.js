// 1. let and const
const hubby = 'manna';
let phone = 'samsung galaxy A30s';
console.log(phone);

// 2. default parameter
// 5. spread or three dots
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);


//3.  template string
const myNotes = `I am a mofazza of ${hubby}. I have a ${phone}.`
console.log(myNotes);


//4. arrow function
 /* function square(x){
     return x * x;
 } */
 const square = x => x * x;
 console.log(square(9));

//5.