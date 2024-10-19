//*********LET,CONST,VAR*********
console.log("Hello World!");
let fname="Johnny Kavanagh";
console.log("Hello" +fname);
let x=null
let y=undefined
let n=5;
const PI=3.14
var a=45;
var b=null;
var b=5; // will not throw error as var can be redeclared 
var c="Hello";
//var is globally scoped
{ 
var c="newHello"//same var is being redeclared 
console.log(c);
}
console.log(c)
//let is block scoped
let d=5;
// let d=10; // will throw error as let can not be redeclared
d=10; // updating let is allowed
{ 
  let d=7;
 console.log(d);
}
console.log(d);

const total=100;
//total =90; // will throw error as const can not be updated or redeclared
//let total =90;//throws error

let str="I am a string in \"double quotes\""
//********************OPERATORS************************
let a1=8,a2=10,a3="10"
console.log("a3==a2",a3==a2)//true
console.log("a3===a2",a3==a2)//false

//******************CONDITIONAL STATEMENTS**************
if(a1>18){
console.log("Adult user!")
}
let flag=true;
if(a2>90){
flag=true}
else{
  flag=false;
}
//switch case is also a conditional statement 

//*************LOOPING STATEMENTS**************
//for loop
for(let i=1; i<10; i++){
    console.log(i);
  }
  //while 
  let sum=100;
  while(sum>0){
    sum/=10;
  }
  console.log(sum);
  //do while
  let i=20;
  do{
    console.log(i);
    i++;
  }while(i<10);
  //for of loop--> used with strings and arrays
  let arr=[1,2,3,4,5];
  for(let it of arr){
    console.log(it);
  }
  //for in loop--> used with objects and arrays 
  let student={
    name: "Alex",
    age: 28,
    job: "Businessman",
  };
  for(let key in student){
    console.log("key=",key,"value=",student[key]);
  }



