// 1.How to Append an Element in an Array in JavaScript
// solution
// let arr=[1,2,3,4,5]
// for(let i=arr.length;i>=2;i--){
//     if(i===2){
//         arr[i]=45;
//     }
//     else{
//         arr[i]=arr[i-1];
//     }
// }
// console.log(arr)

// 2.JavaScript Array Reference
// solution
// a. let arr=[1,2,3,4,5]
// let arr2=[...arr]
// console.log(arr,arr2)
// b. let arr=[1,2,3,4,5]
// let copyArray=[]
// arr.forEach(value=>copyArray.push(value))
// copyArray.pop()
// console.log(arr,copyArray)

// 3. JavaScript Remove the Last Item from an Array
// solution
// /* a. */ let arr=[1,2,3,4,5]
// arr.pop()
// console.log(arr)
// b. arr=arr.slice(0,arr.length-1)
// console.log(arr)

// 4. Get the First and Last Item in an Array Using JavaScript
// a. let firstItem=arr[0];
// let lastItem=arr[arr.length-1];
// console.log(arr,firstItem,lastItem)
// b.  let [f,l]=arr.filter((value,index)=>(index===0)||(index===arr.length-1))
// console.log(f,l)

// 5.reverse an array
// a. for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i])
// }
// b. let i=0;
// let j=arr.length-1
// while(i<=j)
// {
//     let temp=arr[i]
//     arr[i]=arr[j];
//     arr[j]=temp;

//     i++;
//     j--;

// }
// console.log(arr)

// 6. How to Empty an Array in JavaScript
// let arr=[1,2,3,4,5]
// a. arr=[]
// console.log(arr,arr.length)
// b. while(arr.length>0){
//     arr.pop();
// }
// console.log(arr)
// c. arr.splice(0,arr.length)
// console.log(arr)

// 7. JavaScript Program to Convert an Array into a String
//  let arr=[1,2,3,4,5]
// console.log(arr,typeof arr)
// a. arr=arr.join(' ')
// console.log(arr,typeof arr)
// b. arr=arr.toString()
// console.log(arr)
// c. console.log(JSON.stringify(arr))

// 8. How to Add Elements to the End of an Array in JavaScript
// let arr=[1,2,3,4,5]
// a. arr[arr.length]=45
// console.log(arr)
// b. arr.push(123)
//  console.log(arr)
// c. arr.splice(arr.length,0,"hello")
// console.log(arr)

// 9. Check if an Element is Present in an Array Using JavaScript
// a. console.log(arr.includes(3))
// b. for(let i=0;i<arr.length;i++){
//     if(arr[i]===4){
//       console.log(true)
//         break;
//     }
// }
// c. let result=arr.find((value)=>value===4)
// console.log(result)

// 10. JavaScript Program to Find the Largest Element in an Array
// let arr=[1,2,3,98,4,5]
// a. console.log(Math.max(...arr))
// b. let largest=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>=largest){
//         largest=arr[i]
//     }
// }
// console.log(largest)

// 11.How to Modify an Object’s Property in an Array of Objects in JavaScript
// let arrayOfObjects = [
//   { fname: "ravi", lname: "Patidar", age: 21 },
//   { fname: "vimal", lname: "chouhan", age: 22 },
//   { fname: "mitali", lname: "choudhary", age: 23 },
//   { fname: "jiganya", lname: "gupta", age: 24 },
// ];
// arrayOfObjects[1].lname="nimoda";
// console.log(arrayOfObjects)

// 12.Sort an Object Array by Date in JavaScript

// const data = [
//     { name: 'Event 1', date: new Date('2023-01-15') },
//     { name: 'Event 2', date: new Date('2022-12-20') },
//     { name: 'Event 3', date: new Date('2023-03-05') }
// ];
// data.sort((a,b)=>a.date-b.date)
// console.log(data)

// 13.Copy Array Items into Another Array in JavaScript
// let arr=[1,2,3,4,5]
// let arr2=arr; // this is a shallow copy
// let arr2=[...arr] // this is a deep copy
// let arr2=arr.slice(0) // this is a deep copy

// 14.convert an array to object in js
// let arr=[1,2,3,4,5]
// let obj=Object.assign({},arr)
// // console.log(JSON.stringify(obj))
// console.log(obj)

// 15 compare two arrays in js
// let arr=[1,2,3,4,5];
// let arr2=[1,2,3,4,5];
// if(JSON.stringify(arr)===JSON.stringify(arr2)){
//     console.log(true)
// }
// else{
//     console.log(false)
// }
// function isBothArraysAreEqual(){
//     if(arr.length!==arr2.length){
//         return false
//     }

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==arr2[i]){
//             return false
//         }
//         return true
//     }

// }
// console.log(isBothArraysAreEqual())

// 16.How to Insert an Item into Array at Specific Index in JavaScript
// let arr=[1,2,3,4,5]
// let specificIndex=3;
// function insertAtSpecificIndex(arr,specificIndex){
//     if(arr.length<specificIndex){
//         return `only ${arr.length} elements are in array`;
//     }
//     for(let i=arr.length;i>=specificIndex;i--){
//         if(specificIndex===i){
//             arr[specificIndex]=56;
//         }
//         else{
//             arr[i]=arr[i-1];
//         }
//     }
//     return arr
// }
// console.log(insertAtSpecificIndex(arr,specificIndex));

// 17.How to Create Two Dimensional Array in JavaScript
// let twoDimensionalArray=[
//     [1,2,3,4],
//     [1,2,3],
//     [1,2],
// ]
// // console.log(twoDimensionalArray)
//     for(let i=0;i<twoDimensionalArray.length;i++){
//         for(let j=0;j<twoDimensionalArray[i].length;j++){
//             console.log(twoDimensionalArray[i][j])
//         }
//         console.log('')
//     }

// 18.How to Create an Array Containing 1 to N Numbers in JavaScript
// let arr=[]
// for(let i=1;i<50;i++){
//     arr.push(i)
// }
// console.log(arr)

// 19. Different Ways to Delete an Item from an Array Using JavaScript
// let arr=[1,2,3,4,5]
// let indexOfItem=arr.indexOf(3);
// arr.splice(indexOfItem,1)
// console.log(arr)
// for(let i=indexOfItem;i<arr.length-1;i++){
//     arr[i]=arr[i+1]
// }
// arr.length=arr.length-1
// console.log(arr)
// arr.filter((value)=>{
// })
// console.log(arr)

// 20.How to Store an Array in LocalStorage
// let arr=[1,2,3,4,5]
// localStorage.setItem("data",JSON.stringify(arr))
// let result=localStorage.getItem("data")
// console.log(JSON.parse(result))

// 21. count empty elments from an array in js
// let arr=[1,2,,4,,5]
// let count=0;

// for(let i=0;i<arr.length;i++){
//     if(arr[i]===undefined){
//         count++
//     }   
// }
// console.log(count)

// 22. Most Frequent Element in an Array using JavaScript
// let arr=[1,2,6,3,6,4,1,2,6,8,9,6]
// let frequentItem;
// let maxCount=0
// for(let i=0;i<arr.length;i++){
//     let count=0;
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//             count++;
//         }
//     }
//     if(count>maxCount){
//             maxCount=count;
//             frequentItem=arr[i];
//     }
// }
// console.log(frequentItem,maxCount)

// 23.how to use map on an array in reverse order with javascript
// let arr=[1,2,3,4,5,6]
// arr.reverse().map(value=>console.log(value))

// 24. remove duplicate values from array of object
//   books = [
//     { title: "C++", author: "Bjarne" },
//     { title: "Java", author: "James" },
//     { title: "Python", author: "Guido" },
//     { title: "Java", author: "James" },
// ];

// let newArray=[];
// let newArray=[ { title: "C++", author: "Bjarne" }];

// for(let i=0;i<books.length;i++){
//      if(newArray.includes(books[i]))
//      {
//         newArray.push(books[i])
//      }
//     else{
//        continue; 
//     } 
// }
  

// console.log(newArray.includes())