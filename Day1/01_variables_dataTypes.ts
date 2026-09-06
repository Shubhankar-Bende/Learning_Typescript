
var b:string;
let a:number;                           //Var+let - both can be declared w/o init
//const c:any;                          // const cannot be declared w/o init
const c:boolean=true;

a=22.36;                                
b="Ramesh";                             //init a,b

console.log("Details:", a,b,c);         //o/p: Details: 22.36 Ramesh true
console.log(`${a} ${b} ${c}`);          //o/p: 22.36 Ramesh true
//console.log(`${a, b, c}`);            // the comma operator evaluates both sides, but only the last value is kept Eg. const value = (a, b); // evaluates a, then b, and value becomes b


console.log("========== Reinit =============");
a=33, b="Suresh";                       //Var+let - both can be reinit
// c=false;                             //const - cannot be init
console.log(a,b,c);                     //o/p: 33 Suresh true


console.log("========== Redeclaring =============");
var b:string="Hello";
// let a:number = 55;                   // var - can be redeclared
// const c:boolean=false;               //let+const - cannot be redeclared
console.log(a,b,c);


console.log("========== Hositing =============");
//console.log(d);                         //Hoisting var - Undefined o/p >>> Even when we didn't init it still var will always give o/p
var d:string = "Nirali";
console.log(`${d}`);                      //o/p: Nirali 

//console.log(f);
// console.log(e);                       //Hositing let+const  - will always throw exception error until u init them 
let f:number= 45.66;
const e:number | string | boolean = "India";       //Union Datatype used
console.log(`${e} ${f}`);
console.log(typeof e);                   //typeof - tells which datatype used 
const g:any =true;                       //similar to Union datatype bt nt recommended to use this in TS
console.log(g);
