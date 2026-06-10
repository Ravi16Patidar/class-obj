// 1.Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
// function isPalindrome(str){
//     // method 1
//     // let reverse=str.split('').reverse().join('');
//     // return reverse===str?true:false
//     // return reverse===str?true:false

//     // method 2
//     let reverse='';
//     let temp=str;
//     for (let i = str.length-1; i >=0; i--) {
//         reverse+=str[i];
//     }
//     console.log(reverse,temp)
//     return reverse===temp?true:false;

// }
// console.log(isPalindrome('hello'))

// 2.Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers
// function returnEvenNumbers(arr){
//     // let evenValues=arr.filter((value)=>value%2===0)
//     let evenValues=[];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2===0) evenValues.push(arr[i])
//      }
//     return evenValues
// }
// console.log(returnEvenNumbers([1,2,3,4,5,6,7,8,9]))

// 3.Write a JavaScript program to calculate the factorial of a given number.
// function findFactorial(num){
//     let i=1;
//     let fact=1;
//     while(i<=num){
//         fact*=i;
//         i++;
//     }
//     return fact;
// }
// console.log(findFactorial(8))
// 4.Write a JavaScript function to check if a given number is prime.
// function isPrime(num){
//     let i=2;
//     let count=0;
//     while(i<=num){
//         if(num%i===0){
//             count++;
//         }
//         i++;
//     }
//     return count===1?true:false
// }
// console.log(isPrime(6))
// 5.Write a JavaScript program to find the largest element in a nested array.
// function findLargest(){
//     const nestedArray = [
//         [1, 12, 3],
//         [4, 5, 776],
//         [7, 8, 9]
//       ];
//       let largest=nestedArray[0][0];
//       for (let i = 0; i < nestedArray.length; i++) {
//         for (let j = 0; j < nestedArray[i].length; j++) {
//             if(largest<nestedArray[i][j]) largest=nestedArray[i][j];
//         }
//       }
//       return largest;
// }
// console.log(findLargest())

// 6.Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

// function fibonacciSeries(n){
//     let fibonacciSeries=[];
//     let a=0, b=1;
//     while(a<=n){
//         fibonacciSeries.push(a);
//         let temp=a+b;
//         a=b;
//         b=temp;
//     }
//     return fibonacciSeries;
// }
// console.log(fibonacciSeries(8))

// 7.Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).
// function capitalizeFirstLetterOfEachWord(str){
//     let newStr=str.split(' ');
//      let capitalize=[];
//     for (let i = 0; i < newStr.length; i++) {
//        capitalize.push(newStr[i].charAt(0).toUpperCase()+newStr[i].slice(1))
//     }
//     return capitalize.join(' ');
// }
// console.log(capitalizeFirstLetterOfEachWord('hello this is a string'))

// 8.Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order.
// function sortObject(){
//     let arrObj=[  {
//         name:"Ravi patidar",
//         email:'ravi@gmail.com',
//         phone:4567,
//         age:24,
//     },
//     {
//         name:"nisha patidar",
//         email:'nisha@gmail.com',
//         phone:3456667,
//         age:20,
//     },
//     {
//         name:"bhoomika patidar",
//         email:'nisha@gmail.com',
//         phone:88989,
//         age:13,
//     },
//     {
//         name:"asha patidar",
//         email:'nisha@gmail.com',
//         phone:334,
//         age:4,
//     },
// ]

//     return arrObj.sort((a,b)=>a['age']-b['age'])
// }
// console.log(sortObject())

// 9. Implement a function that flattens a nested array in JavaScript, converting it into a single-level array.
// function flattenArray(){
// let arr=[[1,2],[3,5],5,8,[1],[45,[67,8],3],9]
// let stack=[...arr]
// // console.log(stack)
// let result=[];
// while(stack.length){
//     let next=stack.pop();
//     if(Array.isArray(next)){
//         stack.push(...next)
//     }
//     else{
//         result.push(next);
//     }
// }
// return result;
// }
// console.log(flattenArray()).

// 10.
// Write a function that determines if two strings are anagrams of each other
// function isAnagram(str1,str2){
//     str1=str1.replaceAll(' ','');
//     str2=str2.replaceAll(' ','');
//     str1=str1.toLowerCase();
//     str2=str2.toLowerCase();
//     let sorted=(str)=>str.split('').sort().join('');
// return sorted(str1)===sorted(str2);
// }
// console.log(isAnagram('  Listen oN more ','Silent on More'))

// 11.Create a JavaScript function that returns the Fibonacci sequence up to a given number, utilizing memoization for optimized performance
// function fibonacciWithMemoization(num){
//     let a=0,b=1;
//     let fibonacci=[];
//     while(a<=num){
//         fibonacci.push(a);
//         let temp=a+b;
//         a=b;
//         b=temp;
//     }
//     return fibonacci;
// }
// console.log(fibonacciWithMemoization(8));

// 12.Write a function that takes an array of integers as input and returns a new array with only the unique elements.
// function findUnique(arr){
//     let unique=[];
//     for (let i = 0; i < arr.length; i++) {
//         let count=0;
//         for (let j = 0; j < arr.length; j++) {
//             if(i===j) continue
//             if(arr[i]===arr[j])count++
//         }
//         if(count===0){
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }
// console.log(findUnique([1,2,5,2,3,6,7,1]));

// 13.Given a string, write a function to count the occurrences of each character in the string.
// function countOccurance(str){
//     let occurrences={};
//     for (let i = 0; i < str.length; i++) {
//         let count=1;
//              for (let j = 0; j < str.length; j++) {
//                         if(i===j) continue;
//                         if(str[i]===str[j]) count++;
//              }
//              occurrences[str[i]]=count;
//     }
//     return occurrences;
// }
// console.log(countOccurance('hello'))

// 14.Implement a function to remove duplicates from an array.
// function removeDuplicate(arr){
//     let uniqueElements=[];
//     for (let i = 0; i < arr.length; i++) {
//         let count=0;
//         for (let j = i+1; j < arr.length; j++) {
//             // if(i===j) continue;
//             if(arr[i]===arr[j])     count++;
//         }
//         if(count===0) uniqueElements.push(arr[i])

//     }
//     return uniqueElements;
// }
// console.log(removeDuplicate([1,2,3,4,5,7,9,3,4,2]));

// function removeDuplicate(arr){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[i]===arr[j]){
//                 arr.splice(j,1);
//              }
//         }
//     }
//     return arr;
// }
// console.log(removeDuplicate([1,2,3,4,5,7,9,3,4,2]));

// 15.remove duplicated from array of object
// function removeDuplicateFromArrayOfObject(arrOfObj){
//     let unique=[];
//     for (let i = 0; i < arrOfObj.length; i++) {
//         let count=0;
//         for (let j = i+1; j < arrOfObj.length; j++) {
//             if(arrOfObj[i].id===arrOfObj[j].id){
//                 count++;
//             }
//         }
//         if(count===0){
//             unique.push(arrOfObj[i]);
//         }
//     }
//     return unique;
// }
// let arrayOfObject=[
//     {
//         id:1,
//         name:'Ravi',
//     },
//     {
//         id:2,
//         name:'Vimal',
//     },
//     {
//         id:1,
//         name:'Ravi',
//     },
//     {
//         id:3,
//         name:'mitali',
//     },
//     {
//         id:4,
//         name:'Arpit',
//     },
//     {
//         id:2,
//         name:'Vimal',
//     },
// ]

// console.log(removeDuplicateFromArrayOfObject(arrayOfObject));

// 16.Write a function that reverses the order of words in a sentence without using the built-in reverse() method.
// function reverseWordInSentence(str){
//     let reverseWords=[];
//     let words=str.split(' ');
//     for (let i = words.length-1; i >=0 ; i--) {
//         reverseWords.push(words[i])
//     }
//     return reverseWords.join(' ');
// }
// console.log(reverseWordInSentence('hello my name is ravi'))

// 17.Write a function that takes an array of integers and returns the largest difference between any two numbers in the array.
// function largestDiffernceOfTwoInteger(arr){
//     let largestDiffernce=0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++){
//             let difference=arr[i]-arr[j];
//            if(largestDiffernce<difference){
//             console.log(arr[i],arr[j])
//             largestDiffernce=difference
//            }
//         }
//     }
//     return largestDiffernce
// }
// console.log(largestDiffernceOfTwoInteger([1,2,3,5,4,9,7,8]));

// 18. Write a function that generates a random alphanumeric string of a given length.
//  function generateString(strLength){
//     let character='ABCDEFGHIJKLMNOPQRTSUVWXYZabcdefghijklmnopqsrtuvwxyz1234567890';
//     let randomString='';
//     for (let i = 0; i <strLength; i++) {
//        randomString+=character.charAt(Math.floor(character.length*Math.random()+0))
//     }
//     return randomString;
//  }
//  console.log(generateString(20))

// 19.
// function numberToRoman(num) {

//     const romanNumerals = [
//         { value: 1000, symbol: "M" },
//         { value: 900, symbol: "CM" },
//         { value: 500, symbol: "D" },
//         { value: 400, symbol: "CD" },
//         { value: 100, symbol: "C" },
//         { value: 90, symbol: "XC" },
//         { value: 50, symbol: "L" },
//         { value: 40, symbol: "XL" },
//         { value: 10, symbol: "X" },
//         { value: 9, symbol: "IX" },
//         { value: 5, symbol: "V" },
//         { value: 4, symbol: "IV" },
//         { value: 1, symbol: "I" },
//     ];

//     let roman = "";

//     for (const { value, symbol } of romanNumerals) {
//         while (num >= value) {
//             roman += symbol; // Append the Roman numeral symbol
//             num -= value; // Decrease the number
//         }
//     }

//     return roman;
// }

// // Example Usage
// console.log(numberToRoman(1987)); // Output: MCMLXXXVII
// console.log(numberToRoman(3999)); // Output: MMMCMXCIX
// console.log(numberToRoman(447877));   // Output: XLIV

// 20. Implement a function that finds the index of a specific element in an array. If the element is not found, the function should return -1.
// function findIndex(arr,element){
//     // for (let i = 0; i < arr.length; i++) {
//     //     if(arr[i]===element) return i;
//     // }
//     // return arr.findIndex(value=>value===element)
//     return -1;
// }
// console.log(findIndex([1,2,3,4,5,6],5))

// 21.Write a function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array.

// function removeFalsyValues(arr){
//     let afterRemove=[];
//     for (let i = 0; i < arr.length; i++) {
//     if(Boolean(arr[i])!==false){
//         afterRemove.push(arr[i])
//     }
//     }
//     return afterRemove;
// }
// console.log(removeFalsyValues([1,2,3,false, null, 0, '', undefined,NaN]))

// date : 27 november
// 22.Write a JavaScript function logicalCheck that takes three boolean values as input. The function should return true if at least two of the three values are true, and false otherwise.
// function logicalCheck(a,b,c){
//     let count=0;
//     if(a) count++;
//     if(b) count++;
//     if(c) count++;

// return count>=2;
// }
// console.log(logicalCheck(true,false,false))

// 23.return the first even number of array
// function firstEvenNumber(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2===0) return arr[i];
//     }
// }
// console.log(firstEvenNumber([1,3,12,5,4,7,8]));

// 24.convert hours into minutes
// function convertHoursToMinutes(hours){
//     return hours*60;
// }
// console.log(convertHoursToMinutes(3))

// function convertMinutesToSeconds(minutes){
//     return minutes*60
// }
// console.log(convertMinutesToSeconds(30))

// function convertHoursToSeconds(hours){
//     return hours*60*60
// }
// console.log(convertHoursToSeconds(55))

// 25.check leap year
// function isLeapYear(year){
//     if(year%4===0){
//         if(year%100===0){
//         return year%400===0;
//         }
//         return true;
//     }
//     return false;
// }
// console.log(isLeapYear(1984))

// 26.Write a program to count the number of vowels in a string.

// function countVowels(str){
// let vowels='aeiouAEIOU';
// let countVowels=0;
// for (let i = 0; i < str.length; i++) {
//   if(vowels.includes(str[i])) countVowels++;
// }
// return countVowels;
// }

// console.log(countVowels('hello'))

// 27.Write a higher-order function that takes two numbers and a callback to perform addition, subtraction, multiplication, or division.
// function operates(num1,num2,callback){

//     return callback(num1,num2)
// }
// const add=(num1,num2)=>num1+num2;
// const subtract=(num1,num2)=>num1-num2;
// const multiply=(num1,num2)=>num1*num2;
// const divide=(num1,num2)=>num1/num2;
// console.log(operates(12,12,add))

// 28.Write a function that checks if two objects are deeply equal.
// function isObjectDeeplyEqual(){
// let obj1={
//     name:'mitali',
//     age:24
// }
// let obj2={
//     name:'m',
//     age:24
// }
// console.log(JSON.stringify(obj1)==JSON.stringify(obj2))
// }
// console.log(isObjectDeeplyEqual())

// 29.Write a function to move all zeroes in an array to the end while maintaining the relative order of other elements.
// function moveAllZeroToEnd(arr){
// let count=0;
//   let afterMoveZero=arr.filter((value)=>{
//    if(value===0){
//     count++;
//     return false;
//    }
//    return true
//   })
//   for (let i = 0; i < count; i++) {
//     afterMoveZero.push(0);
//   }
//   return afterMoveZero;
// }
// console.log(moveAllZeroToEnd([1,2,0,3,0,6,9,0,'hello',null,undefined,false]));

// 30.Implement a function to remove falsy values (false, 0, null, undefined, NaN, "") from an array.
// function removeFalsyValues(arr){

//     let afterRemoveFalsy=arr.filter((value)=>Boolean(value))
//     return afterRemoveFalsy;
// }
// console.log(removeFalsyValues([false, 0, null, undefined, NaN, "",8,9,10,1,2,'hhg']))

// 31.Write a program to find all pairs in an array whose sum equals a given number.
// function findPairs(arr,target){
//     let pairs=[]
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[i]+arr[j]===target) {
//                 pairs.push([arr[i],arr[j]])
//             }
//         }
//     }
//     return pairs.length?pairs:'no pairs found';
// }
// console.log(findPairs([1,2,3,4,5,6],4))

// Nov 28
// 32.write a program to swap two numbers
// function swapTwoNumbers(a,b){
//     // method 1
//     // let temp=a;
//     // a=b;
//     // b=temp;

//     // return {a,b}
//     // method 2
//     // a=a+b;
//     // b=a-b;
//     // a=a-b;
//     // return {a,b};

// }
// let {a,b}={...swapTwoNumbers(12,34)}
// // console.log(swapTwoNumbers(12,34))
// console.log(a,b)

// 33.find GCD
// function findGCD(a,b){
//     while(b!=0){
//        let remainder=a%b;
//         a=b;
//         b=remainder;
//     }
//     return a ;
// }
// console.log(findGCD(488,18))

// 34.find LCM
// function findLCM(a,b){
//     let tempa=a;
//     let tempb=b;
//     while(b!=0){
//        let remainder=a%b;
//         a=b;
//         b=remainder;
//     }
//     return tempa*tempb/a ;

// }
// console.log(findLCM(488,18))

// 35.Create a program to count the frequency of each element in an array.
// function countFrequency(arr){
//     let frequency={}
//     let frequentItem=0;
//     let maxCount=0;
//     for (let i = 0; i < arr.length; i++) {
//         let count=1;
//     for (let j = 0; j < arr.length; j++) {
//         if(i===j) continue;
//         if(arr[i]===arr[j]){
//             count++;
//         }
//     }
//     frequency[arr[i]]=count;
//     if(count>maxCount){
//         maxCount=count;
//         frequentItem=arr[i];
//     }
//     }
//     return frequentItem;
// }
// console.log(countFrequency([1,2,3,1,4,9,3,5,2,2,9,9]))
// 36.Implement a function to check if an object is empty.
// function isObjEmpty(obj){

// return Object.keys(obj).length >0
// }
// console.log(isObjEmpty({}))

// 37.Write a function to find the maximum product of any two numbers in an array

// function findMaxProduct(arr){
//     let product=0
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             let result=arr[i]*arr[j];
//             if(result>product){
//                 product=result;
//             }
//         }
//     }
//     return product;
// }
// console.log(findMaxProduct([1,2,3,7,4,5,6]))

// 38.Write a function to reverse the order of words in a sentence, without reversing the words themselves.
// nov 29
// 38. Write a function to find the intersection of multiple arrays.
// function findIntersection(...arr){
//     // console.log(a)
//     let intersectionOfArray=arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       intersectionOfArray=intersectionOfArray.filter((element)=>arr[i].includes(element))
//       if(intersectionOfArray.length==0) break;
//     }
//     return intersectionOfArray;

//     }
//     console.log(findIntersection([1,2,3,4],[9,11,45,2,3],[89,34,3,2,6,23,21]))

// 38.Create a function that accepts an array of objects and removes duplicates based on a specific key.
// function removeDuplicateFromArrayOfObject(arrOfObj){
//     let removeDuplicate=[];
//     for (let i = 0; i < arrOfObj.length; i++) {
//         for (let j = i+1; j < arrOfObj.length; j++) {
//             if(arrOfObj[i].id===arrOfObj[j].id){
//                 if(removeDuplicate.includes(arrOfObj[i])){
//                     continue;
//                 }
//                 else{
//                     removeDuplicate.push(arrOfObj[i])
//                 }
//             }
//         }
//     }
//     return removeDuplicate;
// }
// let arrOfObj=[
//     {
//         id:1,
//         name:'Ravi',
//     },
//     {
//         id:2,
//         name:'mitali',
//     },
//     {
//         id:3,
//         name:'vikas',
//     },
//     {
//         id:1,
//         name:'Ravi',
//     },
//     {
//         id:3,
//         name:'vikas',
//     },
// ]
// console.log(removeDuplicateFromArrayOfObject(arrOfObj))

// 39.
//1. Write a program to swap two numbers without using a third variable.
// function swapTwoNumbers(a,b){
//     a=a+b;
//     b=a-b;
//     a=a-b;

//     return {a,b}
// }
// console.log(swapTwoNumbers(15,16))
// 2.Find the largest among three numbers.
// function findLargest(...num){
//     let largest=num[0];
//     for (let i = 0; i < num.length; i++) {
//         if(largest<num[i]){
//             largest=num[i];
//         }
//     }
//     return largest;
// }
// console.log(findLargest(1,12,3))
// 3.Write a function to check if a number is prime.
// function checkPrime(num){
//     let temp=num;
//     let count=0;
//     let i=2;
//     while(i<=temp)
//     {
//         if(temp%i===0) count++;
//         i++;
//     }
//    return count===1?true:false;
// }
// console.log(checkPrime(23))
// 4.Create a program to find the factorial of a number.
// function findFactorial(num){
//     let fact=1;
//     let i=1;
//     while(i<=num){
//         fact*=i;
//         i++;
//     }
//     return fact;
// }
// console.log(findFactorial(5))
// 5.Write a function to generate the Fibonacci sequence up to n terms.
// function fibonacciSeries(n){
//     let fibonacci=[];
//      let a=0,b=1;
//      while(a<=n){
//         fibonacci.push(a);
//         let temp=a+b;
//         a=b;
//         b=temp;
//      }
//      return fibonacci;
// }
// console.log(fibonacciSeries(8))
// 6.Convert Celsius to Fahrenheit and vice versa.
// function celsiusToFehrenheit(celsius){
//     let fahrenheit=9/5*celsius+32
//     return +fahrenheit.toFixed(2)

// }
// console.log(celsiusToFehrenheit(67))
// 7.Check if a given string is a palindrome.
// function checkPalindrome(str){
//     if(typeof str!=='string') str=String(str);
//     console.log(str)
//     let reverse='';
//     let i=str.length-1;
//     while (i>=0) {
//         reverse+=str[i];
//         i--;
//     }
//     return str===reverse

// }
// console.log(checkPalindrome('abbabba'))
// 8.Write a function to find the greatest common divisor (GCD) of two numbers.
// function findGCD(a,b){
//     while(b!==0){
//         let remainder=a%b;s
//         a=b;
//         b=remainder;
//     }
//     return a;
// }
// console.log(findGCD(70,15))
// 9.Find the largest and smallest numbers in an array.
// function findLargestAndSmallest(arr){
//     let smallest=arr[0];
//     let largest=arr[0];
// for (let i = 0; i < arr.length; i++) {

//         if(smallest>arr[i]) {smallest=arr[i];}
//         else if(largest<arr[i]){largest=arr[i];}
// }
// return {smallest,largest};
// }
// console.log(findLargestAndSmallest([12,45,338,90,15,34,13,11]))
// 10.Write a function to remove duplicates from an array.
// function removeDuplicate(arr){
//     let unique=[];
//     for (let i = 0; i < arr.length; i++) {
//             if(!unique.includes(arr[i])) unique.push(arr[i])
//     }
//     return unique;
// }
// console.log(removeDuplicate([1,2,3,11,23,3,2,11,5]));
// 11.Sort an array in ascending and descending order.
// function sortArray(arr){
//     let asendingOrder=[...arr].sort((a,b)=>a-b);
//     let descendingOrder=[...arr].sort((a,b)=>b-a);
//     return {asendingOrder,descendingOrder}
// }
// console.log(sortArray([1,2,45,23,56,77,12,4,41]))
// 12.Find the second largest number in an array.
// function findSecondLargest(arr) {
//   let largest = arr[0];
//   let secondLargest = arr[1];
//   for (let i = 0; i < arr.length; i++) {
//     if (largest < arr[i]) largest = arr[i];
//   }
//   for (let j = 0; j < arr.length; j++) {
//     if (secondLargest < arr[j] && arr[j] !== largest) secondLargest = arr[j];
//   }
//   return secondLargest;
// }
// console.log(findSecondLargest([1, 2, 45, 23, 56, 77, 12, 4, 41]));

// dec 2
// 1.Write a function that takes an array of numbers and returns a new array with each number squared but removes any numbers that were originally less than 5.
// function squareEachNumber(arr){
//     console.log(arr)
//    let squared=arr.filter((value)=>value>5).map((value)=>value*value)
//    return squared
// }

// console.log(squareEachNumber([1,2,7,8,11,22,34]))

// console.log([1,3,[4,5,[8,[34,55],9],7],11].flat(Infinity))/
// 2.How do you create a copy of an array without mutating the original?
// function copyArray(arr){
//     // method 1
//     // let arr2=[...arr];
//     // arr2.push(78);
//     // console.log(arr,'\n',arr2)
//     // method 2

// //    let arr2=JSON.parse(JSON.stringify(arr));
// //    arr2.push('helo')
// //     console.log(arr,'\n',arr2)

// }
// console.log(copyArray([1,2,3,[78,909],4,5,6]))
// 3.Write a function to reverse an array.
// function reverseArray(arr){
//     // method 1
// //     let reverse=[];
// //    for (let i = arr.length-1; i >=0; i--) {
// //     reverse.push(arr[i])
// //    }
// //    return reverse;
// //  method 2
// //     let i=0;
// //     let j=arr.length-1;
// //     while(i<=j)
// //     {
// //         let temp=arr[i];
// //         arr[i]=arr[j];
// //         arr[j]=temp;
// //         i++;
// //         j--;
// //     }
// // return arr;
// }
// console.log(reverseArray([1,2,3,4,5]))
// 4.how do flatten a nested array
// function flattenArray(arr){
//    let stack=[...arr];
//    let result=[];
//    while(stack.length){
//     let next=stack.pop()
//     if(Array.isArray(next)){
//         stack.push(...next);
//     }else{
//     result.push(next);
//     }
//    }
//    return result;
// }
// console.log(flattenArray([1,2,3,[4,5],[6,[98,45],78],11]))
// 5.Write a function to find the second largest number in an array.
// function secondLargest(arr){
//     let largest=arr[0];
//     let secondLargest=[0];
//     let thirdLargest=[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(largest<arr[i]){
//             largest=arr[i];
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if(secondLargest<arr[i] && arr[i]!==largest){
//             secondLargest=arr[i];
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if(thirdLargest<arr[i] && arr[i]!==secondLargest && arr[i]!==largest){
//             thirdLargest=arr[i];
//         }
//     }
//     return {largest,secondLargest,thirdLargest};
// }
// console.log(secondLargest([1,2,3,4,78,142,348]));
// 6.How can you find the intersection of two arrays?
// method 1
// function intersectionOfTwoArray(arr,arr2){
//     let intersection=[];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if(arr[i]===arr2[j]){
//                 if(!intersection.includes(arr[i])){
//                     intersection.push(arr[i])
//                 }
//             }
//         }
//     }
//     return intersection;
// }
// console.log(intersectionOfTwoArray([1,2,17,3],[56,3,12,17]))
// method 2
// function intersectionOfManyArray(...arr){
// // console.log(arr)
// let intersection=arr[0];
// for (let i = 1; i < arr.length; i++) {
//      intersection=intersection.filter((value)=>arr[i].includes(value))
//      if(intersection.length==0) break;
// }
// return intersection;
// }
// console.log(intersectionOfManyArray([1,2,3],[34,56,3,78,2],[5,6,7,9,2,3]))
// 7.Write a function to find the union of two arrays.
// method 1
// function unionOfTwoArray(arr,arr2){
//     let union=[];
//     for (let i = 0; i < arr.length; i++) {
//         if(!union.includes(arr[i])){
//             union.push(arr[i]);
//         }
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         if(!union.includes(arr2[i])){
//             union.push(arr2[i]);
//         }
//     }
//     return union;
// }
// console.log(unionOfTwoArray([1,2,3,3,4],[6,7,8,3,2]))
// method 2
// function unionOfTwoArray(...arr){
//     let union=[];
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length; j++) {
//      if(!union.includes(arr[i][j])){
//          union.push(arr[i][j])
//         }
//       }
//     }
//     return union;
// }
// console.log(unionOfTwoArray([1,2,3,3,4],[6,7,8,3,2],[3,5,9,11,23,2]))
// 8.How do you remove duplicates from an array.
// function removeDuplicate(arr){
//     let unique=[];
//     for (let i = 0; i < arr.length; i++) {
//         if(!unique.includes(arr[i])) unique.push(arr[i]);
//     }
//     return unique;
// }
// console.log(removeDuplicate([1,2,3,3,4,7,9,3,2,9]))
// 9.how to rotate an array
// function rotateAnArray(arr,k){
//     if(arr.length<=k) return `array length is only ${arr.length}`
//     let left=arr.splice(0,k)
//     arr.push(...left);
//    return arr;
// }
// console.log(rotateAnArray([1,2,3,4,5],4))
// 10.How can you remove falsy values from an array?
// function removeFalsyValues(arr){
//         arr=arr.filter((value)=>Boolean(value))
//         return arr
// }
// console.log(removeFalsyValues([1,2,3,false,null,0,undefined]));
// 11.Write a function to split an array into chunks of a given size.
// function splitInChunks(arr,chunk){

//     let chunksArr=[];
//     for (let i = 0; i < arr.length; i+=chunk){
//         let currentChunk=arr.slice(i,i+chunk);
//         chunksArr.push(currentChunk);
// }
//     return chunksArr;

// }
// console.log(splitInChunks([1,2,3,4,5,6,7,8],3))

// date dec 11
// 1.How do you find the first occurrence of a value in an array?
// function firstOccurance(arr,target){
//     for (const i in arr) {
//       if(arr[i]===target) return i;
//     }
// }
// console.log(firstOccurance([1,2,3,2,5,7,3,1],3))
// 2.Write a function to find all indexes of a given value in an array.
// function findAllIndexes(arr,target){
//     let allIndexs=[];
//     for (const i in arr) {
//         if(arr[i]===target) allIndexs.push(Number(i))

//     }
// return allIndexs;
// }
// console.log(findAllIndexes([1,2,3,11,4,3,2,5,7,3],3))
// 3.How do you check if an array contains all elements of another array?
// method 1
// function isArrayExist(arr,arr2){
// for (let i = 0; i < arr2.length; i++) {
//     let found=false;
//     for (let j =0; j < arr.length; j++) {
//         if(arr2[i]===arr[j]){
//              found=true;
//              break;
//             }
//     }
//     if(!found)return false;
// }
// return true;
// }
// console.log(isArrayExist([1,2,3,11,4,3,5,2,7,3],[1,2,11,3,4,5,7,3]))
// method 2
// function isArrayExist(arr,arr2){
//     return arr2.every((value)=>arr.includes(value))
// }
// console.log(isArrayExist([1,2,3,11,4,3,5,2,7,3],[1,2,11,3,4,5,7,3]))

// 4.Write a function to filter out all prime numbers from an array.
// function findAllPrime(arr){
//     let allPrime=arr.filter((value)=>{
//     if(value<1) return false
//       let i=2;
//       let count=0;
//       while(i<=value){
//         if(value%i==0) count++;
//         i++;
//       }
//       if(count===1) return value
//     })
//     return allPrime;
// }
// console.log(findAllPrime([1,2,3,45,6,7,8,9,5]))

//Dec 12
// 1.Write a function to reverse an array in place.
// function reverseArray(arr){
//     // method 1
// // let reverse=[];
// // for (let i = arr.length-1; i>=0; i--) {
// //    reverse.push(arr[i]);
// // }
// // return reverse;
// // method 2
// let i=0;
// let j=arr.length-1;
// while(i<=j){
//     let temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
//     i++;
//     j--;
// }
// return arr;
// }
// console.log(reverseArray([1,2,3,4,5]))
// 2.Implement a function to rotate an array by k positions.
// function rotateAnArray(arr,k){
//     // method 1
//     // let values=arr.splice(0,k);
//     // arr.push(...values)
//     // return arr;
//     // method 2
// //     let values=[];
// //     let newArray=[];
// //     for (let i = 0; i < k; i++) {
// //         values.push(arr[i]);
// //     }
// //    for (let i = k; i < arr.length; i++) {
// //     newArray.push(arr[i])
// //    }
// //    newArray.push(...values)
// //    return newArray
// }
// console.log(rotateAnArray([1,2,3,4,5],2))

// 3.Write a function to flatten a nested array to a single level.
// function flattenArray(arr){
//     // method 1
//     // console.log(arr.flat(Infinity))
//     // method 2
//     // let stack=[...arr]
//     // let result=[];
//     // while(stack.length){
//     //     let next=stack.pop();
//     //     if(Array.isArray(next)){
//     //         result.push(...next)
//     //     }
//     //     else{
//     //         result.push(next)
//     //     }
//     // }
//     // return result;
// }
// console.log(flattenArray([[1,2],[3,5],5,8,[1],[45,[67,8],3],9]))
// 4.Remove duplicate elements from an array without using Set.
// function removeDuplicate(arr){
//     // method 1
//     // let unique=[];
//     // for (let i = 0; i < arr.length; i++) {
//     //    if(!unique.includes(arr[i])){
//     //     unique.push(arr[i]);
//     //    }
//     // }
//     // return unique;
//     // method 2
//     //  return arr.filter((item,index)=>arr.indexOf(item)===index)
// }
// console.log(removeDuplicate([1,2,3,3,5,9,3,2,5,11,7]))
// 5.Find the intersection of two arrays (common elements).
// function intersectionOfArray(arr,arr2){
//     let intersection=[];
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr2.length; j++) {
//         if(arr[i]===arr2[j]){
//             intersection.push(arr2[j])
//         }
//       }

//     }
//     return intersection;

// }
// console.log(intersectionOfArray([1,2,3,9,11,14,7,4],[4,7,9,34,55,23]))
// 6.Find the union of two arrays.
// function findUnion(arr1,arr2){
//     let union=[];
//      for (let i = 0; i < arr1.length; i++) {
//         if(!union.includes(arr1[i])){
//             union.push(arr1[i])
//         }
//      }
//      for (let j = 0; j < arr2.length; j++) {
//         if(!union.includes(arr2[j])){
//             union.push(arr2[j])
//         }
//      }
//     return union;
// }
// console.log(findUnion([1,2,3,3],[2,3,5,6]))
// 7.Find the difference between two arrays (elements in one but not the other).
// function findDifference(arr1,arr2){
//     let difference=[];
//     for (let i = 0; i < arr1.length; i++) {
//         let found=false;
//        for (let j = 0; j < arr2.length; j++) {
//         if(arr1[i]===arr2[j]){
//             found=true;
//             break;
//         }
//        }
//        if(!found) difference.push(arr1[i])
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         let found=false;
//        for (let j = 0; j < arr1.length; j++) {
//         if(arr2[i]===arr1[j]){
//             found=true;
//             break;
//         }
//        }
//        if(!found) difference.push(arr2[i])
//     }
// return difference;
// }
// console.log(findDifference([1,2,7,3],[3,4,5,6,11]))
// 8.Merge two sorted arrays into one sorted array.
// function mergeTwoSortedArray(arr1,arr2){
//     return [...arr1,...arr2]
// }
// console.log(mergeTwoSortedArray([1,2,3],[23,25,30]))
// 9.Remove falsy values (null, undefined, false, 0, NaN, '') from an array.
// function removeFalsyValues(arr){
//     return arr.filter((value)=>Boolean(value)===true)
// }
// console.log(removeFalsyValues([1,2,3,null,undefined,0,false,true,-34,'hello']))
// 10.Write a function to find the index of the maximum element in an array.
//  function findMaximumIndex(arr){
//     let max=arr[0];
//     let maxIndex=0;
//     for (let i = 1; i < arr.length; i++) {
//         if(max<arr[i]){
//             max=arr[i];
//             maxIndex=i;
//         }
//     }
//     return maxIndex
//  }
//  console.log(findMaximumIndex([112,2,3,11,17,4,6,19,5]))
// 11.Find the frequency of each element in an array.
// function findFrequency(arr){
//     let frequency={};
//     for (let i = 0; i < arr.length; i++) {
//         let count=0;
//       for (let j = 0; j < arr.length; j++) {
//         if(arr[i]===arr[j]){
//             count++;
//         }
//       }
//       frequency[[arr[i]]]=count;
//     }
//     return frequency;
// }
// console.log(findFrequency([1,2,3,3,5,9,2,5,7,9,9]))
// 12.Check if an array is a subset of another array.
// function isSubset(arr1,arr2){
//     for (let i = 0; i < arr1.length; i++) {
//         let found = false;
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 found = true;
//                 break;
//             }
//         }
//         if (!found) return false;
//     }
//     return true;

// }
// console.log(isSubset([1,2,3],[6,9,3,5,2,1]))
// 13.Find the second largest element in an array.
// function findSecondLargest(arr){
// let largest=0;
// for (let i = 0; i < arr.length; i++) {
//     if(largest<arr[i]){
//         largest=arr[i];
//     }
// }
// let secondLargest=0;
// for (let i = 0; i < arr.length; i++) {
//     if(secondLargest<arr[i] && arr[i]!==largest){
//         secondLargest=arr[i];
//     }
// }
// return {largest,secondLargest};
// }
// console.log(findSecondLargest([1,2,67,89,23,45,111,5,454]))
// 14.Find all pairs of numbers in an array that sum to a target value.
// function findPairs(arr,target){
//     let pairs=[];
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i+1; j < arr.length; j++) {
//         let sum=arr[i]+arr[j];
//         if(sum===target){
//             pairs.push(`(${arr[i]},${arr[j]})`)
//         }
//       }
//     }
//     return pairs;

// }
// console.log(findPairs([1,2,3,4,5],6))
// 15.Write a function to find the majority element (occurs more than n/2 times) in an array.
// function findMajorityElements(arr) {
//   let majority = Math.floor(arr.length / 2) + 1;
//   console.log(majority)
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }
//     if (count > majority) {
//       return arr[i];
//     }
//   }
//   return null;
// }
// console.log(findMajorityElements([1, 2, 3, 5, 2, 3, 7, 3, 3, 3, 3, 3,3]));

//  Dec 13
// 1.Determine if a given array is a palindrome
// function isArrayPalindrome(arr) {
//   let reverse = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverse.push(arr[i]);
//   }
//   return JSON.stringify(reverse)===JSON.stringify(arr)

// }
// console.log(isArrayPalindrome([5,1, 2, 3, 2, 1,5]));

// 2.Write a function to count occurrences of a value in an array.
// function countOccurance(arr,elem){
//     let count=0;
//     arr.forEach(element => {
//         if(element===elem) count++;
//     });
//     return count;

// }
// console.log(countOccurance([1,2,3,5,2,3,7,2,2],2))
// 3.Find the indices of all occurrences of a specific value in an array.
// function findAllIndices(arr, elem) {
// // let indices=[];
// // arr.forEach((element,index)=>{
// //     if(element===elem) indices.push(index)
// // })
// // return indices.length?indices:-1;
// //   let indices = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     if (elem === arr[i]) {
// //       indices.push(i);
// //     }
// //   }
// //   return indices.length?indices:-1;
// }
// console.log(findAllIndices([1, 2, 3, 5, 2, 3, 7, 2, 2], 2));

// 4.Sort an array of objects by a property.
// function sortArrayOfObject(arrOfObj){
// return arrOfObj.sort((a,b)=>a.id-b.id)
// }
//  const people = [
//     { id: 1, name: "Ethan", age: 25 },
//     { id: 5, name: "Bob", age: 30 },
//     { id: 3, name: "Charlie", age: 22 },
//     { id: 4, name: "Diana", age: 28 },
//     { id: 2, name: "Alice", age: 35 }
// ];
// console.log(sortArrayOfObject(people))
// 5.Write a function to shuffle an array randomly.
// function shuffleArray(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//       const randomIndex = Math.floor(Math.random() * (i + 1));

//       let temp=arr[i];
//       arr[i]=arr[randomIndex]
//       arr[randomIndex]=temp;
//     }
//     return arr;
//   }

//   const array = [1, 2, 3, 4, 5];
//   console.log(shuffleArray(array)); // Output: Randomly shuffled array

// 6.Rearrange an array so that all negative numbers come before positive numbers.
// function rearrangeElements(arr){
//     for (let i = arr.length-1; i >=0; i--) {
//       if(arr[i]<0){
//         let negativeElem=arr.splice(i,1)
//         arr.push(...negativeElem)
//       }
//     }
//     return arr
// }
// console.log(rearrangeElements([1,2,-5,-3,676,-45,-17,23,-1]))
// 7.Sort an array of strings by their length.
// function sortArrayOfString(arrOfStr){
//     return arrOfStr.sort((a,b)=>a.length-b.length)
// }
// console.log(sortArrayOfString(['hello','dear','meghaa','vimal']))
// 8.Write a function to sort an array based on the frequency of elements.
// function sortbyFrequency(arr){
//     let frequency={};
//     for (let i = 0; i < arr.length; i++) {
//         let count=0;
//         for (let j = 0; j < arr.length; j++) {
//             if(arr[i]===arr[j]){
//                 count++;
//             }
//         }
//         frequency[[arr[i]]]=count;
//     }
//     let higherFrequency=arr.sort((a,b)=>{
//         if(frequency[b]!==frequency[a]){
//           return  frequency[b]-frequency[a];
//         }
//         return a-b;

//     })
//     return higherFrequency
// }
// console.log(sortbyFrequency([4, 5, 6, 5, 4, 3, 2, 5, 4, 6, 6]))
// 9.Sort an array of numbers but keep the odd numbers in their original relative positions.
// function sortArray(arr) {
//   let sorted= arr.sort((a, b) => {
//     if (a % 2 === 0 && b % 2 === 0) {
//         return a - b;
//     }
//     return 0;
//   });
//   return sorted;
// }
// console.log(sortArray([1, 5, 14, 11, 2, 12, 11, 7, 4]));
// 10.Multiply every element in an array by its index.
// function multiplebyIndex(arr){
//     return arr.map((element,index)=>element*index)
// }

// console.log(multiplebyIndex([1,2,3,4,5]))
//  Dec 14
// 1.Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// function returnNElementsOfArray(arr,n){
//     // this is for first n elements
//     // if(arr.length<n) n=arr.length;
//     // let nElements=[];
//     // for (let i = 0; i < n; i++) {
//     //    nElements.push(arr[i])
//     // }
//     // return nElements;

//     // this is for last n elements
//     // if(arr.length<n) n=arr.length;
//     // let nElements=[];
//     // for (let i = arr.length-n; i<arr.length; i++) {
//     //    nElements.push(arr[i])
//     // }
//     // return nElements;

// }
// console.log(returnNElementsOfArray([1,2,3,4,5],2))
// 2.Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
// function insertsDashes(num){
//     let temp=String(num);
//     let newStr=temp[0];
//     for (let i = 0; i < temp.length-1; i++) {
//      if(temp[i]%2===0 && temp[i+1]%2===0){
//         newStr+='-';
//      }
//      newStr+=temp[i+1];
//     }
//     return newStr;

// }
// console.log(insertsDashes(1249768))
// Date 15 Dec
// 1.Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
// function swapString(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//      str=str.replace(str[i], str[i].toUpperCase());
//     }

//    else if (str[i] === str[i].toUpperCase()) {
//       str=str.replace(str[i], str[i].toLowerCase());
//     }
//   }
//   return str;
// }

// console.log(swapString("The Quick Brown Fox"));
// 2.find leap year
// function isLeapYear(start,end){
//     let leapYears=[];
//     for (let i = start; i <= end; i++) 
        
//         if(i%4===0){
//             if(i%100===0 && i%400){
//                 leapYears.push(i);
//                 continue;
//             }
//             leapYears.push(i);
//         }
//         return leapYears;
//     }

// console.log(isLeapYear(1900,2024))
// 3.Union of Two Arrays
// function unionOfTwoArray(...arr){
//     // for two array only
//     // let union=[];
//     // for (let i = 0; i < arr1.length; i++) {
//     //   if(!union.includes(arr1[i])){
//     //     union.push(arr1[i]);
//     //   }
//     // }
//     // for (let i = 0; i < arr2.length; i++) {
//     //   if(!union.includes(arr2[i])){
//     //     union.push(arr2[i]);
//     //   }
//     // }
//     // return union;
//     // for multiple arrays
//     // let union=[];
//     // for (let i = 0; i < arr.length; i++) {
//     //     for (let j = 0; j < arr[i].length; j++) {
//     //         if(!union.includes(arr[i][j])) union.push(arr[i][j])
//     //     }
//     // }
//     // return union;

// }
// console.log(unionOfTwoArray([1,2,3,2,3],[4,5,3,2],[7,9,11,4,5,3]))
// 4.Write a JavaScript function to find the difference between two arrays.
// function findDifference(arr1,arr2){
//     let difference=[];
//     for (let i = 0; i < arr1.length; i++) {
//         let found=false;
//      for (let j = 0; j < arr2.length; j++) {
//      if(arr1[i]===arr2[j]){
//         found=true;
//         break;
//      } 
//      }
//      if(!found) difference.push(arr1[i]);
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         let found=false;
//      for (let j = 0; j < arr1.length; j++) {
//      if(arr2[i]===arr1[j]){
//         found=true;
//         break;
//      } 
//      }
//      if(!found) difference.push(arr2[i]);
//     }
//     return difference;
// }
// console.log(findDifference([1,2,3],[100,2,1,0]))
 
// Dec 19
// 1.