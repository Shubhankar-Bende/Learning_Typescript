//Var          - Functional Scope
//let + const  - Block Scope

let a:number;           //Var+let - both can be declared w/o init
var b:string;
//const c:any;        // const cannot be declared w/o init

a=22.36;
b="Ramesh";
const c:any=true;

console.log("Details:", a,b,c);         //o/p: Details: 22.36 Ramesh true
console.log(`${a} ${b}`);
//console.log(`${a, b}`);             //In JavaScript/TypeScript, the comma operator evaluates both sides, but only the last value is kept Eg. const value = (a, b); // evaluates a, then b, and value becomes b

a=33;
b="Suresh";             //Var+let - both can be reinit
// c=false;             //const - cannot
console.log(a,b,c);           


