class Support{
    name ;
    designation = 'Support web developer';
    address = 'BD';
    constructor (name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name,'start a support session');
    }
}

const mofu = new Support('Mofu khan', 'pakistan');
const mofazzal = new Support('Mofazzal Chowdhury maya', 'USA');
/* console.log(mofu);
console.log(mofazzal);
 */

mofu.startSession();
mofazzal.startSession();



