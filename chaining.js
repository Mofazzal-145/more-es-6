// declare variable based on the name of an object property

const myObject = {x: 2, y: 50, z: 500, a: 23, b: 34};
const {x, y} = myObject;
//console.log(x, y);
 

// destructuring array 

 
const [p, q] = [12, 45, 67, 78];
//console.log(p, q);
 
// destructuring array example-2

const [good, best] = ['mofu', 'mofazzal'];
//console.log(good,best);

// 

const {sky, color, money} = {sky: 'blue', color:'red', money:'not available', fish:'hilsha'};
//console.log(sky, color, money);

// chaining

const company2 = {
    name: 'GP',
    ceo: {id:1, name: 'mofu', food: 'fast-food'},
    web: {
        work: 'website-development',
         employee: 22, 
         framework: 'react',
         tech: {
             first: 'html',
             second: 'css',
             third: 'js'
         }
    }
};

console.log(company2?.web?.tech?.third); //chaining -?
console.log(company2?.backend?.tech?.third); // chaining -?

/* const {work, framework} = company2.web;
const {food, name} = company2.ceo;
const {second, third} = company2.web.tech;
console.log(work, framework, food, name, second, third); */




