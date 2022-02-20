const fish = {id: 58, name:'king hilsha', phone: '01755236630', price: 9000, address: 'Chandpur', dress: 'silver'};

/* const phone = fish.phone;
const price = fish.price;
const dress = fish.dress;
const id = fish.id;
const address = fish.address; */

const {phone, price, id, dress, address} = fish;

/* console.log(phone, id);
console.log(price, id);
console.log(dress, id);
console.log(address);

 */


// another

const company = {
    name: 'GP',
    ceo: {id:1, name: 'mofu', food: 'fast-food'},
    web: {work: 'website-development', employee: 22, framework: 'react'}
};

/* const work = company.web.work;
const framework = company.web.framework;
console.log(work, framework); */

/* const {work, framework} = company.web;
const {food, name} = company.ceo;
console.log(work, framework, food, name); */
 
// advanced

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

const {work, framework} = company2.web;
const {second, third} = company2.web.tech;
const {food, name} = company2.ceo;
console.log(work, framework, food, name, second, third);
