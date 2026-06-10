
// 1.. Write a JavaScript function to check if a given string is a palindrome
// function checkPalindrom(str){
//     let temp=String(str)
//     let revStr=""
//   for(let i=temp.length-1;i>=0;i--){
//     revStr+=temp[i]
//   }
//   console.log(revStr)
//   if(revStr===temp){
//     return true
//   }
//   return false
// }
// console.log(checkPalindrom(121))

// 2.Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
// function returnOnlyEvenElements(arr){
// let evenElements=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         evenElements.push(arr[i])
//     }
// }
// return evenElements
//     const evenElements=arr.filter(value=>value%2===0)
//     return evenElements
// }
// let arr=[1,2,3,4,5,6,7,8,9,0]
// console.log(returnOnlyEvenElements(arr))

// 3. find factorial of number
// function findFactorial(num){
// let fact=1;
// for(let i=1;i<=num;i++){
//     fact*=i
// }
//     let i=1;
//     while(i<=num){
//         fact*=i;
//         i++;
//     }
//     return fact;
// }
// console.log(findFactorial(6))

// 4. check given is prime or not
// function isPrime(num){
//     let count=0;
//     let i=2;
//     while(i<=num){
//         if(num%i===0){
//             count++;
//         }
//         i++
//     }
//     if(count==1){
//         return true
//     }
//     return false;
// }
// console.log(isPrime(19))

// 5.find largest from nested array

// const nestedArray = [1, [2, 3, [4, 5], 6], [7, 8], 9];
// function maxIterative(arr){
//     let largest=Number.MIN_SAFE_INTEGER;
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             largest = Math.max(largest, maxIterative(arr[i]));
//         }
//         else{
//             largest=Math.max(largest,arr[i])

//         }
//     }
//     return largest
// }
// console.log(maxIterative(nestedArray))

// 6.fibonacci series
// function fibonacciSeries(){
//     let first=0,second=1;
//     console.log(first)
//     console.log(second)
//     for(let i=0;i<8;i++){
//         let temp=first+second;
//         console.log(temp)
//         first=second;
//         second=temp;
//     }
// }
// fibonacciSeries()

// 7.Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 
// function capitalizeFirstLetter(str){
//     let arr=str.split(' ')
//     console.log(arr)
//     let newStr=[]
//     for(let i=0;i<arr.length;i++){
//         newStr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1))
//     }
//     console.log(newStr.join(' '))
// }
// capitalizeFirstLetter("hello this is ravi here")

// 8. remove elements from array
// let arr = [1, 8, 15, 22, 29,29, 35, 15, 48, 4];
// a. using splice
// arr.splice(2,1)
// b. using filter
// arr=arr.filter(value=>value!==15)
// c. Remove Element from Array using for() loop and new array
// let newArray=[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==15){
//         continue
//     }
//     newArray.push(arr[i])

// }
// console.log(newArray)
// d. Remove Element from Array using forEach(), indexOf(), and splice()
// arr.forEach((item,index)=>{
//     if(item==15){
//             arr.splice(index,1)
//     }
// })
// console.log(arr)
// e. remove element without using any method
// let indexOfRemoveElement = arr.indexOf(15);
// for (let i =indexOfRemoveElement ; i < arr.length-1; i++) { 
//     arr[i]=arr[i+1]
// }
// arr.length=arr.length-1
// console.log(arr)

// 9 . remove duplicate values from an array 
// function removeDuplicate(){
// return arr.filter((value,index)=>arr.indexOf(value)===index)
// // console.log(arr)
// }
// console.log(removeDuplicate())
// 9. replace and item from an array in js
// for(let i=0;i<arr.length;i++){
     
// }
// for(let i=0;i<arr.length;i++){
//     if(arr[i]===15){
//         arr[i]=20;
//         break;
//     }
// }
// console.log(arr)
// 10. append element in js 
// a. using splice 
// arr.splice(2,0,"hello")
// console.log(arr)
// b.
// let newArray=[1,2,3,4,5,6]
// for(let i=newArray.length;i>=2;i--){
//     if(i===2){
//         newArray[i]=345;
//     }
//     else{
//         newArray[i]=newArray[i-1]
//     }
// }
// console.log(newArray)

// 11.Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38/
// setInterval(() => {
//      let dateInGivenFormate=new Date();
//      let time=dateInGivenFormate.toLocaleTimeString();
//      let day=dateInGivenFormate.getDay()
//      let dayList=['Sunday','Monday','Tuesday','Wednusday','Thusday','Friday','Saturday']
//      console.log("Today is :",dayList[day],'\n',"Current time is :",time)
// }, 1000);

// 12.print current window content
// document.getElementById('btn').addEventListener('click',()=>{
//     print()
// })

// 13.Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// let date=new Date();
// console.log(date.toLocaleDateString())

// 14.Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.
// let string='w3resource'
// let i=0;
// let j=string.length-1;
// let arr=string.split('')

// while(i<=j){
//     let temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
//     i++;
//     j--;
// }
// string=arr.join('')
// console.log(string)

// 15.Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050. 
// for(let i=2014;i<=2050;i++){
//     let date=new Date(`1 january ${i}`)
//     let dayList=['Sun','Mon','Tue','Wed','Thus','Fri','Sat']
//     if(dayList[date.getDay()]==='Sun'){
//         console.log(i,dayList[date.getDay()])
//     }
// }

// 16.Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  

// let randomNumber=Math.floor(Math.random()*10)+1;
// let guessNumber;
// do{
//      guessNumber=+prompt('Guess the correct number between 1 to 10');
//     if(guessNumber===randomNumber){
//         console.log(`good work random Number : ${randomNumber} and guessNumber ${guessNumber} are equal`)
//     }
//     else{
//         console.log('not matched , try again')
//     }
// }while(guessNumber!==randomNumber)

// 17.Write a JavaScript program to calculate the days left before Christmas.  
// let today=new Date();
// let currentYear=today.getFullYear()+1;
// let christmas=new Date(currentYear,11,25)
// if(today>christmas){
//     today.setFullYear(currentYear+1)
// }
// let oneDay=24*60*60*1000
// let daysLeft=Math.round((christmas-today)/oneDay)

// console.log('Days left in christmas :',daysLeft)

// 18.convert fahrenheit to celsius and celsius to fahrenheit
// formula: f=(9/5*celsius)+32
// formula:c=(5/9*fehrenheit-32)
// let celsius=60;
// let fehrenheit=45;

// let celsiusToFehrenheit=(9/5*celsius)+32
// console.log(`${celsiusToFehrenheit}\u00B0F`)

// let fehrenheitToCelsius=(5/9)*(fehrenheit-32)
// console.log(`${fehrenheitToCelsius}\u00B0C`).


// 19.Write a JavaScript program to get the website URL (loading page).
// console.log(document.URL)

// 20.Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference. 

// function checkIsGivenIsbroader(givenNumber){
//     if(givenNumber>13){
//         return 2*Math.abs(givenNumber-13);
//     }
//     return Math.abs(13-givenNumber)
    
// }
// console.log(checkIsGivenIsbroader(11))

// 21. Merge Two Sorted Lists

// function mergerTwoLists(list1,list2){
//     let mergeList=[]
//     let i = 0, j = 0;
    
//     while (i < list1.length && j < list2.length) {
//         if (list1[i] <= list2[j]) {
//             mergeList.push(list1[i]);
//             i++;
//         } else {
//             mergeList.push(list2[j]);
//             j++;
//         }
//     }
    
//     while (i < list1.length) {
//         mergeList.push(list1[i]);
//         i++;
//     }
    
//     while (j < list2.length) {
//         mergeList.push(list2[j]);
//     j++;
// }
// return mergeList;
// }

// let list1=[1,2,4,7,9];
// let list2=[1,3,3,4];
// mergerTwoLists(list1,list2);

// 22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  
// let str="string";
// let specificPosition=3;
// let newString=str.slice(0,specificPosition)+str.slice(specificPosition+1)
// console.log(newString)
// let newString="";
// for(let i=0;i<str.length;i++){
//     if(i===specificPosition)
//     {
//         continue;
//     }
//     newString+=str[i]
// }
// console.log(newString)

// 23. Write a JavaScript program to find the largest of three given integers.  
// let a=5,b=10,c=23;
// function findLargest(){
//     if(a>b){
//         if(a>c){
//             return `a=${a} is large`
//         }
//         else{
//             return `c=${c} is large`
//         }
//     }else{
//         if(b>c){
//             return `b=${b} is large`
//         }
//         else{
//             return `c=${c} is large`
//         }
//     }

// }
// console.log(findLargest())
// let arr=[23,45,7]
// let largest=arr[0];
// function findLargest(arr){
//     arr.forEach((value)=>{
//         if(value>=largest){
//             largest=value
//         }
//     })
//     return largest;
// }
// console.log(findLargest(arr))

// 24. Write a JavaScript program to find the closest value to 100 from two numerical values.  

// function findClosestTo100(num1,num2){
//           let num1Difference=Math.abs(100-num1)
//           let num2Difference=Math.abs(100-num2)
//           if(num1===num2){
//             return `${num1} and ${num2} both are equal`;
//           }
//           if(num1Difference>num2Difference){
//             return `${num2} is closest to 100`;
//           }
//           else{
//             return `${num1} is closest to 100`
//           }

// }
// console.log(findClosestTo100(223,187));

// 25. Write a JavaScript application that transforms a provided numerical value into hours and minutes.  
// function convertNumberToHoursAndMinutes(num){
//     let minutes=Math.floor(num%60)
//     let hours=Math.floor(num/60)
//     console.log(minutes,hours)
// }
// convertNumberToHoursAndMinutes(130)

// 26.Write a JavaScript program to convert letters of a given string alphabetically.  
    // let str="string"; 
    // str=str.split('').sort().join('');
    // console.log(str)

// 27.Write a JavaScript program to find the longest string from a given array of strings. 
// let strArray=['ravi','mitali','jiganya','arpit','harshal','jaya','vimal'];
// let longestString=strArray[0];
// for(let i=0;i<strArray.length;i++){
//     if(longestString.length<=strArray[i].length){
//         longestString=strArray[i];
//     }
// }
// console.log(longestString)

// 28.Write a JavaScript program to replace each character in a given string with the next in the English alphabet.
// let str="jiganyaZ";
// let alphabets='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let newString="";
// console.log(alphabets.indexOf('z'))
// for(let i=0;i<str.length;i++){
//     let index=alphabets.indexOf(str[i])
//     if(index===25){
//         newString+='a';
//     }
//     else if(index===51){
//         newString+='A';
//     }
//     else{
//         newString+=alphabets[index+1]
//     }
//     }
    
//     console.log(newString)

// 29.Write a JavaScript program to replace all numbers with a specified number in an array of integers. 
// let arr=[1,2,3,4,5,6,2,2]
// let specificNumber=34;
// arr.filter((value,index,array)=>{
//     if(value===2){
//         array[index]=specificNumber
//     }
// })
// for(let i=0;i<arr.length;i++){
//    if(arr[i]===2){
//     arr[i]=specificNumber;
//    }
// }
// console.log(arr)

// 30.Write a JavaScript program to get the largest even number from an array of integers. 
// let arr=[2,9,34,56,178,11,23,67,110,34];
// let largestEvenNumber=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         if(largestEvenNumber<arr[i]){
//             largestEvenNumber=arr[i];
//         }
//     }
// }
// console.log(largestEvenNumber)

// 31.Write a JavaScript program to find the number of even digits in a given integer.
    // function findEvenDigitNumber(){
    // let rangeStart=23;
    // let rangeEnd=150;
    // for(let i=rangeStart;i<=rangeEnd;i++){
    //     let n=i;
    //     if(n%2===0){
    //         let count=0;
    //         while(n!=0){
    //             let digits=n%10;
    //             if(digits%2===0){
    //                 count++;
    //                 n=Math.floor(n/10);
    //             }
    //             else{
    //                 break;
    //             }
    //         }
    //         if(String(i).length===count){
    //             return i
    //         }
    //     }
    // }
    // }
    // console.log(findEvenDigitNumber())

    // 32. Write a JavaScript program to compute the sum of cubes of all integers from 1 to a given integer.  
    // let num=3;
    // let sum=0;
    // for(let i=1;i<=num;i++){
    //     let cube=Math.pow(i,3);
    //     sum+=cube;
    // }
    // console.log(sum)

    //  12 Write a JavaScript program to convert a specified number into an array of digits.
    // let num=456;
    // let arr=[]
    // while(num!=0){
    //     arr.push(num%10);
    //     num=Math.floor(num/10);
    // }
    // console.log(arr)

    // 33.Write a JavaScript program to filter out non-unique values in an array.
// let arr=[145,78,23,55,23,55,7,9,23,78]
// let nonUniqueArray=[]; 
// for(let i=0;i<arr.length;i++){
//     let count=0;
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//             count++;
//         }
//     }
//     if(count>1){
//         if(!nonUniqueArray.includes(arr[i])){
//         nonUniqueArray.push(arr[i])
//         }
//     }
// }
// console.log(nonUniqueArray)

// 34 Write a JavaScript function that reverses a number..
// let num=1234;
// let reverseNumber=+String(num).split('').reverse().join('')
// let reverseNumber="";
// while(num!=0){
//     let lastDigit=num%10;
//     reverseNumber+=lastDigit;
//     num=Math.floor(num/10)
// }
//     console.log(+(reverseNumber))

// 35 Write a JavaScript function that checks whether a passed string is a palindrome or not?
// function isPalindrom(str){
//     let convertToString=String(str)
//     let reverse=""
//      for(let i=convertToString.length-1;i>=0;i--){
//         reverse+=convertToString[i];
//      }
//      if(reverse==str){
//         return true
//      }
//      return false

// }
// console.log(isPalindrom('abba'))

// 36.Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
// let str='hello'
// let strArr=[];
// for(let i=0;i<str.length;i++){
//     for(let j=i;j<str.length;j++)
//         { 
//         let addStr=""
//        for(let k=i;k<=j;k++){
//         addStr+=str[k];
//        }    
//        strArr.push(addStr)
//     }
// }
// console.log(strArr.join(','))

// 37. Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// let arr=[34,56,4,23,11,7,17,5];
// arr.sort((a,b)=>a-b)
// let secondLowest=arr[1];
// let secondGreatest=arr[arr.length-2];
// console.log(arr,secondGreatest,secondLowest)

// 38. Write a JavaScript function to convert an amount into coins.
// let amount=111;
// function convertAmountToCoin(amount){
//     let coins=[20,10,5,2,1];
//     let result={}
//     for(let i=0;i<coins.length;i++){
//         let coinValue=coins[i];
//         result[coinValue]=Math.floor(amount/coinValue)
//         amount=amount%coinValue;
//     }
//     return result;
// }
// console.log(convertAmountToCoin(amount))

// 38.count occurance of elements in array
// let arr=[1,2,3,1,4,6,2,5,1,3,5];
// let occurance={};

// for(let i=0;i<arr.length;i++){
//     let count=1;
//     for(let j=0;j<arr.length;j++){
//         if(i===j){
//             continue;
//         }
//         else if(arr[i]===arr[j]){
//             count++;
//         }
//     }
//     occurance[arr[i]]=count;
// }
// console.log(occurance)

// 39.Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// let str="hello";
// let vowels="aeiouAEIOU";
// let count=0;
// for(let i=0;i<str.length;i++){
//     if(vowels.includes(str[i])){
//         count++
//     }
// }
// console.log(count)

// 40.Write a JavaScript function to extract unique characters from a string
// let str="hellothisisravihere"
// // expected output helotisrav
// let result=str[0];
// for(let i=0;i<str.length;i++){
//     if(result.includes(str[i])){
//         continue;
//     }
//     else{
//         result+=str[i];
//     }
// }
// console.log(result)

// 41. Write a JavaScript function to get the number of occurrences of each letter in a specified string.
// let str="Rakshabandhan";
// let occurance={};
// for(let i=0;i<str.length;i++){
//     let count=1
//     for(let j=0;j<str.length;j++){
//         if(i===j){
//             continue;
//         }
//         else if(str[i]===str[j]){
//             count++
//         }
//     }
//     occurance[str[i]]=count;
// }

// console.log(occurance)

// 42.Write a function for searching JavaScript arrays with binary searches.
// let count=0
// function binarySearch(){

// let arr=[1,4,7,11,23,45,89,112,234,345,445,567,778,789,810,820,890,910,950,970,990,1000,1120,1134];
// let findElement=1000;
// let low=arr[0];
// let high=arr.length-1;
// while(low<=high){
//     let mid=Math.floor((high+low)/2)
//     count++;
//     if(arr[mid]===findElement)
//     {
//         return mid;
//     }
//     if(arr[mid]<=findElement)
//     {
//         low=mid+1;
//     }
//     else{
//         high=mid;
//     }
// }
// return -1;
// }
// console.log(binarySearch(),count)

// 43. Write a JavaScript function that generates a string ID (specified length) of random characters.
// let id="";
// let characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// let length=12;
// for(let i=1;i<=length;i++){
// id+=characters[(Math.floor(Math.random()*characters.length))]
// }
// console.log(id)

// 44.Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[1,2],[1,3],[2,3]]

// let arr=[1,2,3];
// let permanentArr=[]
// for(let i=0;i<arr.length-1;i++){
//     for(let j=i+1;j<arr.length;j++){
//             permanentArr.push([arr[i],arr[j]])
// }
// }
// console.log(permanentArr)

// 45.Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// let str="hello";
// let letter='l';
// let occurance={};
// let count=0;
// for(let i=0;i<str.length;i++){
//     if(str[i]===letter){
//             count++;
//     }
// }
// occurance[letter]=count;
// console.log(occurance)

// 46. Write a JavaScript function to find the first not repeated character
// function findNotRepeatedCharacter() {
//   let str = "abbaceedeffcd";
//   let count=0;
//     for(let i=0;i<str.length;i++){
//         count=0;
//         for(let j=0;j<str.length;j++){
//             if(str[i]===str[j]){
//                 count++;
//             }
//         }
//         if(count===1){
//             return i
//         }
//     }
//     return -1
// }

// console.log(findNotRepeatedCharacter())

// 47. Write a JavaScript function that accepts a list of country names as input and returns the longest country name.
// function findLongestCountryName(){
//     let countryNames=["Australia", "Germany", "United States of America","Russia"]
//     let longestCountryName=countryNames[0];
//     for(let i=0;i<countryNames.length;i++){
//         if(longestCountryName.length<=countryNames[i].length){
//             longestCountryName=countryNames[i];
//         }
//     }
//     return longestCountryName;

// }
// console.log(findLongestCountryName())

// function helo(){
//     console.log('ddsjlkfsj')
// }
// console.log(helo.name)

// ḷeet code problem 
// 48. Find Words Containing Character
// Input: words = ["leet","code"], x = "e"
// Output: [0,1].
// let words=["mamta",'mittu','ravi','ashu','shree','ruby','shyam']
// var findWordsContaining = function(words, x) {
//     let indices=[]
//     for(let i=0;i<words.length;i++){
//         if(words[i].includes(x)){
//             indices.push(i)
//         }
//     }
//     return indices
// };
// // console.log(findWordsContaining(["mamta",'mittu','ravi','ashu','shree','ruby','shyam'],'a'))
// findWordsContaining(["mamta",'mittu','ravi','ashu','shree','ruby','shyam'],'a')

// 49.Split Strings by Separator
    // var splitWordsBySeparator = function(words, separator) {
    //     let splitWords=[]
    //     for(let i=0;i<words.length;i++){
    //     splitWords=splitWords.concat(words[i].split(separator))
    //     }
    //     return splitWords;

    // };
    // splitWordsBySeparator(["one.two.three","four.five","six"],'.')
// console.log(splitWordsBySeparator(["one.two.three","four.five","six"],'.'))

// 50. Write a JavaScript function to generate a random integer.
// function generateRandomNumber(start=0,end=0){
//     let randomNumber=Math.floor(Math.random() * (end - start + 1)) + start;
//     return randomNumber;
// }
// console.log(generateRandomNumber(20,1))

// 51.Write a JavaScript function to create a UUID identifier.
// function uuidIdentifire() {
//     let idCharacters = 'abcdef0123456789';
//     let uuid = '';
//     for (let i = 0; i < 36; i++) {
//         if (i === 8 || i === 13 || i === 18 || i === 23) {
//             uuid += '-';
//         } else {
//             let randomIndex = Math.floor(Math.random() * idCharacters.length);
//             uuid += idCharacters[randomIndex];
//         }
//     }
//     return uuid;
// }

// console.log(uuidIdentifire());

// 52. Create a Counter Function
// let count=0;
// function createCounter(n){
// count++;
//    return n+(count-1);
// }
// console.log(createCounter(2))
// console.log(createCounter(2))
// console.log(createCounter(2))
// console.log(createCounter(2))

// 53.Move Zeroes to the End of Array
// let arr = [0, 1, 3, 0, 2, 0, 5];
// let tempArr=[]
// for (let i = 0; i < arr.length; i++) {
//   if(arr[i]!==0){
//     tempArr.push(arr[i])
//   }
// }
// while(tempArr.length<arr.length){
//     tempArr.push(0)
// }
// console.log(arr,tempArr)

// 54.Count Common Words Occurring Once in Two Arrays
// let words1=['hello','we','are','we','hel','work'];
// let words2=['hello','we1','are1','we1','hel','work'];


// function countWords(){
//     let uniqueWords1=[];
//     let uniqueWords2=[];
//     // to find and push unique elements in uniqueWords1 array
//     for(let i=0;i<words1.length;i++){
//        let count=0
//         for(let j=0;j<words1.length;j++){
//             if(i===j){
//                 continue;
//             }
//             else if(words1[i]===words1[j]){
//                 count++;
//             }
//         }
//         if(count===0){
//             uniqueWords1.push(words1[i])
//         }
//     }
//     // to find and push unique elements in uniqueWords2 array
//     for(let i=0;i<words2.length;i++){
//         let count=0;
//         for(let j=0;j<words2.length;j++){
//             if(i===j){
//                 continue;
//             }
//             else if(words2[i]===words2[j]){
//                 count++;
//             }
//         }
//         if(count===0){
//             uniqueWords2.push(words2[i])
//         }
//     }
    
//     console.log(uniqueWords1)
//     console.log(uniqueWords2)
    
//     // compare and count;
//     let countWord=0
//     for(let i=0;i<uniqueWords1.length;i++){
//         if(uniqueWords2.includes(uniqueWords1[i])){
//             countWord++;
//         }
//     }
//     return countWord;
// }
// let result=countWords(words1,words2)
// console.log(result)

// 55. fibonasci series
// var fibGenerator = function () {
// let length=10   ;
// let a=0;
// let b=1;
// let i=1;
// while(i<=length){
//     console.log(a)
//     let temp=a+b;
//     a=b;
//     b=temp;
//     i++
// }
// }
// fibGenerator()

// 56. Kth Distinct String in an Array 

// function kthDistinct(arr,k){
//     let uniqueElements=[];
//     for(let i=0;i<arr.length;i++){
//         let count=0;
//         for(let j=0;j<arr.length;j++){
//             if(i===j){
//                 continue;
//             }
//             else if(arr[i]===arr[j]){
//                 count++;
//             }
//         }
//         if(count==0){
//             uniqueElements.push(arr[i])
//         }
//     }
//     console.log(uniqueElements)
//     if(uniqueElements.length>=k){
//     return uniqueElements[k-1]
//     }
//     else{
//         return `""`
//     }
// }
// console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2))

// 57. Contains Duplicate in Array
// var containsDuplicate = function(nums) {
//     for(let i=0;i<nums.length;i++){
//             for(let j=0;j<nums.length;j++){
//                 if(i===j){
//                     continue;
//                 }
//                 else if(nums[i]===nums[j]){
//                     return true;
//                 }
//             }
//     }
//     return false
// };
// console.log(containsDuplicate([1,2,3,4,6,7,67,2]));

// 58.merge two sorted array
// let arr1=[1,2,3,7,9];
// let arr2=[1,2,13,17,19];
// function mergerTwoLists(arr1,arr2){
//     let mergeArray=[]
//     let i=0,j=0;
//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i]<=arr2[j]){
//             mergeArray.push(arr1[i])
//             i++;
//         }
//         else {
//             mergeArray.push(arr2[j])
//             j++;
//         }
//     }
//     while(i<arr1.length){
//         mergeArray.push(arr1[i]);
//         i++;
//     }
//     while(j<arr2.length){
//         mergeArray.push(arr2[j]);
//         j++;
//     }
//     return mergeArray;
// }
// console.log(mergerTwoLists(arr1,arr2)
// )

// 59.Write a JavaScript function to test if a number is a power of 2.
// let count=0;
// function isNumberPowerOf2(n){

//         for(let i=1;i<n;i++){
//             count++;
//             if(Math.pow(2,i)===n){
//                 return true
//             }
//         }
//         return false
// }
// console.log(isNumberPowerOf2(600),count)

// 60.Write a JavaScript function to round up an integer value to the next multiple of 5.
// function multipleOf5(n){
//      let result;
//      if(n%5===0){
//         result=n+5;
//         return result;
//      }
//      else{
//             while(n%5 !==0){
//                 n+=1;
//             }
//             result=n;
//             return result;
//      }
// }
// console.log(multipleOf5(156))

// 61.Write a JavaScript function to count integer digits.
// function countIntegerDigit(num){
//     let temp=num;
//     let count=0;
//     while(temp>0){

//         temp=Math.floor(temp/10);
//         count++;
//     }
//     return count;
// }
// console.log(countIntegerDigit(54))

// 62. Write a JavaScript function to get all prime numbers from 0 to a specified number.
// function getAllPrimeFactor(n){
//     let count=0;
//     let allPrimeFactors=[];
//     let i=2;
//     for(let i=2;i<=n;i++){
//         count=0;
//         for(let j=2;j<=i;j++)
//         {
//             if(i%j===0){
//                 count++;
//             }
//         }
//         if(count==1){
//             allPrimeFactors.push(i)
//         }
// }
// return allPrimeFactors;
// }
// console.log(getAllPrimeFactor(7))

// 63.Write a JavaScript function to subtract elements from an array.
// function subtractElementsOfarray(arr){
//       let result=arr[0];
//         for(let i=1;i<arr.length;i++){
//             result-=arr[i];
//         }
//         return result;
// }
// console.log(subtractElementsOfarray([7,2,3,4]))

// 64.Find Common Elements Between Two Arrays
// function commonBetweenTwoArray(){
//     let arr1=[1,2,3,4];
//     let arr2=[4,72,1,34];
//     let commonElements=[]
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]===arr2[j]){
//                 if(!commonElements.includes(arr1[i])){
//                     commonElements.push(arr1[i])
//                 }
//             }
//         }
//     }
//     return commonElements;
// }
// console.log(commonBetweenTwoArray())

// 65.Write a function that removes all falsy values (false, 0, "", null, undefined, NaN) from an array.
// function removeFalsyValues(){
//     let arr=[1,2,7,9,false, 0, "",null, undefined, NaN,11,2,5,23,'hello']
//     let afterRemoveFalsyValues=[]
//     for(let i=0;i<arr.length;i++){
//         if(!arr[i]===false || null || undefined || NaN || 0){
//             afterRemoveFalsyValues.push(arr[i])
//         }
//     }
//     return afterRemoveFalsyValues;
// }
// console.log(removeFalsyValues())

// 66.Write a function that takes an array of numbers and returns an object with two properties: even and odd. The even property should contain an array of all even numbers, and the odd property should contain an array of all odd numbers.
// function seperateEvenAndOdd(){
//     let arr=[1,2,3,4,5,6,7,8,9,10];
//     let evenOddObj={
//         even:[],
//         odd:[]
//     };
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2===0){
//             evenOddObj.even.push(arr[i])
//         }
//         else{
//             evenOddObj.odd.push(arr[i])
//         }
//     }
//     return evenOddObj;
// }
// console.log(seperateEvenAndOdd())

// 67.Write a function that takes two arrays and returns a new array containing elements that are present in the first array but not in the second.
// function differenceBetweenTwoArrays(){
//     let arr1=[1,2,3,4,5];
//     let arr2=[7,9,12,4,2,5];
//     let differentElements=[]
//     let count=0;
//     for(let i=0;i<arr1.length;i++){
//         count=0;
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]===arr2[j]){
//                 count++;
//             }
//         }
//         if(count===0){
//             if(!differentElements.includes(arr1[i])){
//             differentElements.push(arr1[i])
//         }
//         }
//     }
//     return differentElements;
// }
// console.log(differenceBetweenTwoArrays())

// 68. 