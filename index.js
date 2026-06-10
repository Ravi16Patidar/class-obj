// variables
// variables are the names of memory location where we storing our data
// there are three keywords to define variable in javascript
// let
// var
// const

// parameters and arguments
// When we pass data while calling the function, the data are arguments.
// When we define a function, the placeholders for the data are parameters.

// let is block scoped(if we define any varible using let in any scope so we cannot use that variable outside of that scope thats why let is block scope )

// example
// function sum() {
//   if (true) {
//     let a=5;
//     console.log(a);
//   }
//   console.log(a)
// }
// sum()

// var is function scoped (if we define variable using var so can use that varible inside of any scope in our function but we cannot use outside of function)
//example
// function sum() {
//     if (true) {
//         var a=5;
//       console.log(a);
//     }
//     console.log(a)
//   }
//   sum()

// const is also block scoped (if we define any variable so we cannot change the value after initialization )

// Data Types 
// data types defined the data type that variable can store
// there are two types of data type
// primitive and non-primitive or reference
// primitive(number,string ,boolean , undefined, null)
// non-primitive(Array ,object)
// let a=null;
// console.log(typeof a)

// String
// what is string
// string is a squence of character create using double quotes single quotes or backticks 
// let str="  hello i   am ravi  hello  patidar  ";
// console.log(typeof str) // typeOf is for typeChecking of variable
// console.log(str.length)

// console.log(str[3])
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// str=str.trim() // trim remove white space from beggining and end
// str=str.trimStart() // trimStart remove whitespace from beggining only
// str=str.trimEnd() // trimStart remove whitespace from end only
// console.log(str.split("i")) // split is used to convert string to array using given seperator
// console.log(str.concat("str1","str2")) // concat is used to merge multiple string
// console.log(str.replace('hello',"NICE")) // replace is used to change the old string with new string but only occurance
// console.log(str.replaceAll('hello',"NICE")) // replaceAll is used to change the old string with new string all occurance
// console.log(str.charAt(4)) // charAt takes index of string and return the character of that index
// console.log(str.charCodeAt(4)) // charCodeAt takes index of string and return the Ascii value of  character of that index
// console.log(str.slice(0)) // slice take two index as an argument and return the string between that indexex

// Template string
// template literals ,also knows as template string are a feature in js that allow for easier string interpolation and multi-line string

// let fname="Ravi"
// let lname="Patidar"
// let age=45

// console.log("my first name is "+fname+" and last name is "+lname+" and age is "+age)
// console.log(`my first name is ${fname} and last name is ${lname} and age is ${age}`)


// Operators
// Arithmetic operators // +,-,*,/,%,**,++,--
// console.log(12+45) 
// Assignment operators // =,+=,-=,*=,/=,%=,**=
// ternary operators
// let ans =false?'yessss':'no';
// console.log(ans)

// Type Conversion
// let num=Boolean("11");
// console.log(num)
// console.log(typeof num)

// if else
// if(12>45)
//     console.log(true)
// else
// console.log(false)

// ḷoops 
// loops are used to execute block of code repeatedly until the certain condition is false

// for(let i=0;i<5;i++){
//     console.log(i)
// }
// let num=0;
// while(num<=10){
//     num=prompt("Enter a number greater than 10");
// }

// Break and Continue
// the break and continue statement are used to control flow of loop
// the break statement is used to terminate or exit loop on certain condition 
// the continue statement is used to skip the current iteration 

// for(let i=1;i<=10;i+2)
//     {
//         if(i%2===0)
//             {
//             continue;
//             }
//             console.log(i)
//     }


// switch statement
// switch statement expression value compared with value of each case and if there is match the block of code executed this is the alternative of nested if else 

// let percent=57;
// if(percent>=60)
// {
//     console.log("1st Division")
// }
// else if(percent>=45)
//     {
//         console.log("2nd Division")
//     }
// else if(percent>=33){
//     console.log("3rd Division")
// }
// else{
//     console.log("Fail")
// }

// Array
// Array is used to store multiple values in one variable and these elements can be of any data type number ,string ,object etc
// Array is a collection of elements in contiguous memeory location

// Array methods (The indxing of array always starts from 0)
// let arr=[12,45,67,89,90]; 
// console.log(arr.length); // length property 
// arr.push();console.log(arr) //push is used to add more elements to the end of an array
// arr.pop();console.log(arr) //pop is used to remove elements from the end of an array
// arr.unshift();console.log(arr) //unshift is used to add more  elements to  the start of an array
// arr.shift();console.log(arr) //shift is used to remove elements from the start of an array   

// console.log(arr.slice(0,3)) //slice take two index as an argument and return the elements between that indexex of array
// console.log(arr.join('-')) // join is used to concate all the elements of array into single string we can add separator string to insert betweem each elements of array
// arr=arr.concat([1,2,3],[4,5,6]) // concat is used to merger multiple string or array 

// Advance array methods
// map() // map is used to iterate every elements of array and return new array and we can modify each elements of array and added to the new array 
// arr=arr.map((value)=>value*2)
// console.log(arr)

// filter() // The filter() method in JavaScript is used to iterate  every element of an array and create a new array containing only those elements that match a specified condition.
// arr=arr.filter((value)=>{
//     return value%2==0;
// })  
// arr=arr.filter(value=>value%2===0)
// console.log(arr)

// reduce() // reduce() in javascript is used execute each elements of array and give single output 
// let result=arr.reduce((acc,curr)=>acc*curr)
// console.log(result)

// sort() // sort() is used to sort array in ascending and descending 
// arr=arr.sort((a,b)=>b-a)
// console.log(arr)
// let obj={}
// let fruit=['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
// for(let i=0;i<fruit.length;i++)
//     {
//         let count=0;
//         for(let j=0;j<fruit.length;j++)
//             {
//                 if(fruit[i]===fruit[j]){
//                     count++;
//                 }
//             }
//                 obj[fruit[i]]=count;

//     }
//     console.log(obj)


// let person={
//     "nam e":"Ravi",
//     "age":21,
// }

// console.log(person)

// find method  // find method in js is used to search element from array and return the first element that matches to the specific conditon
// let greater=arr.find((value)=>{ 
// return value>45
// })
// console.log(greater)
// console.log(arr.some((value)=>value%2===0)) // some() it return true and false 
// console.log(arr.every((value)=>value%2===0)) // every() it return true and false 

// splice() // splice() is used to add or remove elements of array from specific index 
// arr.splice(3,0,"item","item1")
// console.log(arr)

// Array clone
// let arr2=[1,2,3,4,5];
// // let arr3=[...arr2];
// // arr2.push(34)
// // console.log(arr3)

// Array destructuring  is used to extract elements from an array and assign them to variables

// let [a,b]=arr;
// console.log(a,b);

// Object // object is a collection of properties ,object is used to store data in the form of key value pair
// let object={
//     "name-$":"Ravi",
//     age:21,
//     about:function(){
//         console.log(this)
//     }
// }
// object.about()
// console.log(object["name-$"])
// dot and bracket notation are Two ways to access properties of object
// dot notation is most commond way to access property of object 
// bracket notation used when property includes whitespace or special character and it used [] .
// iteate object

// let obj={
//     name:"Ravi",
//     age:21
// }
// object destructuring is used to extract properties from object and assign them to variables
// let {name:fname,age:age2}=obj
// console.log(fname,age2)
// for(let key in obj){
//     console.log(` ${key}:   ${obj[key]}`)
// }
// forEach()
// arr.forEach((value,index)=>{
//     console.log(index,value*2)
// })

// function   // A function is a block of code that is designed to perform a specific task. It is executed when the function is called, and it can be reused multiple times as needed

// function declaration - function declaration are hoisted to the top of their containing scope .This means you call the function before it declaration
// create its own this context

// sum()
// function sum()
// {
//     console.log(12+5633)
// }

// function expression or anonymous function - function declaration are not hoisted 
// create its own this context

// const mult=function(){
//     console.log(12*12)
// }
// mult()

// Arrow funtion not hoisted
// this from the lexical scope

// const divi=()=>console.log(400/10)
// divi()

// closuer gives us to access to an outer function scope from an inner function
// function parent() // we can call the child function 
// {
//     const a=5;
//     function child(){
//         console.log(a)
//     }
//  child()
// }
// parent()

// function parent() // we can also return child function
// {
//     const a=5;
//     function child(){
//         console.log(a)
//     }
//  return child
// }
// const child=parent()
// child()

// function parent()  // we can use nested child functions
// {
//     const a=5;
//     function child(){
//         console.log(a)
//         function grandChild()
//         {
//             console.log(a)
//         }
//         grandChild()
//     }
//     child()
// }
// parent()

// Hoisting // hoisting is a beharvior of javascript where the declaration of function and variable goes to top of  the scope

// hoistedFuction(); 
// function hoistedFuction(){
//     console.log("This is a hoisted function")
// }

// console.log(a);
// var a=5;

// lexical scope // If you declare a variable inside a function, you can use that variable only inside that function and its nested (child) functions.

// scope chain  is a runtime mechanism that javascript used to do lexical scope process

// default and rest parameters
// default parameters is used to initialize function parameters with default values if no value is passed
// rest parameters allow us to pass infinite number of arguments as an array

// example of default parameters
// function sum(a=0,b=0)
// {
//     console.log(a+b)
// }
// sum()
// example of rest parameters
// function sum(a,...b)
// {
//     let sum=0
//     b.forEach((value)=>{
//         sum+=value;
//     })
//     console.log(a+sum)
// }
// sum(40,50,100)

// optional chaining is a feature that allow us to safely access deeply nested properties of an object and it is represented by ?. operators

// let obj={
//     name:"Ravi Patidar",
//     age:21,
//     college:{
//         name:"IPS Academy Indore",
//         course:"Integrated MCA",
//         // fees:65000,
//         activity:{
//             cricket:"11 player", 
//             football:"12 player"
//         }
//     }
// }

// console.log(obj?.college?.activity?.cricket)

// this keyword benefit
// Certainly! In JavaScript, this refers to the object that owns the currently executing code.

// function propType()
// {
//     console.log(`${this.name} ${this.age}`)
//         console.log(this)
// }
// let obj={
//     name:"Ravi",
//     age:21,
//     about:propType
// }
// let obj2={
//     name:"mitali",
//     age:22,
//     about:propType
// }
// let obj3={
//     name:"nikhil",
//     age:23,
//     about:propType
// }

// obj.about()
// obj2.about()
// obj3.about()
 
// create fuction to create multiple objects

// let obj={
//     name:"Ankit",
//     age:21
// }
// const personMethods={
//     about:function(){
//         console.log(`name is ${this.name} and age is ${this.age}`)
//     },
//     is18:function(){
//         const result=this.age>=18?"you are eligible":"you are not eligible";
//         console.log(result)
//     }
// }
// function createObjects(name,age)
// {
//     let obj=Object.create(personMethods);
//     obj.name=name;
//     obj.age=age;
    // this.about=personMethods.about;
    // this.is18=personMethods.is18;
    
//     return obj
// }
// const person=createObjects("Ravi",33)
// console.log(person)
// const person2=createObjects("mitali" ,23)
// console.log(person2)
// const person3=createObjects("nikhil",19)
// console.log(Object.getPrototypeOf(person3))
// person3.about()
// person3.is18()

// constructor function is used to  to create and initialize objects
// let obj={
//     name:"mitali",
//     age:21
// }

// class CreateObject {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     about() {
//         console.log(`name is ${this.name} and age is ${this.age}`);
//     }
// }
// const person1=new CreateObject('vimal',23)
// console.log(Object.getPrototypeOf(person1))

// let arr=[];
// console.log(Object.getPrototypeOf(arr))


// call apply and bind
// In JavaScript, call, apply, and bind are methods used to manipulate the value of this inside a function. They allow you to control the context (this keyword) in which a function executes.