// 1.write a js function that reverse a number
// function reverseNumber(num){
//     num=String(num)
//     // let reverse=Number(num.split('').reverse().join(''))
//     // return reverse
//     let reverse=''
//     for(let i=num.length-1;i>=0;i--){
//         reverse+=num[i]
//     }
//     return reverse
// }
// console.log(reverseNumber(1234567890))

// 2.check palindrom
// 1st way to check palindrom

// function checkPalindrom(str){
//     str=String(str);
//     let reverseStr=str.split('').reverse().join('')
//     if(reverseStr===str){
//         return `${str} is a palindrom`
//     }
//     return `${str} is a not palindrom`

// }
// console.log(checkPalindrom(121))

// 2nd way to check palindrom this will only work with numbers
// function checkPalindrom(originalNumber){
//     let num=originalNumber
//     let lastValue;
//     let revesers=''
//     while(num!=0){
//          lastValue=num%10;
//          revesers+=lastValue
//          num=Math.floor(num/10);
//     }
//     let isPalindrom= parseInt(revesers)===originalNumber
//     if(isPalindrom){
//         console.log(`${originalNumber} is palindrom`)
//     }
//     else{
//         console.log(`${originalNumber} is a not palindrom`)
//     }
// }
// checkPalindrom(44)

// 3.sort string in acending order
// function ascendingOrder(str){
// console.log(str.split('').sort().join('-'))
// }
// ascendingOrder("mitali")

// 4.function firstLetterUpperCase(str){
//     str=str.split(' ')
//     let newArray=[]

//     for(let i=0;i<str.length;i++){
//         newArray.push(str[i].charAt(0).toUpperCase()+str[i].slice(1))
//     }
//     console.log(newArray.join(' '))
// }
// firstLetterUpperCase('hello i am ravi patidar');

// function longestWordInString(str){
//     str=str.split(' ');
//     let longesWord=''
//     for(let i=0;i<str.length;i++){
//         if(str[i].length>longesWord.length){
//             longesWord=str[i]
//         }
//     }
//    return longesWord;
// }
// console.log(longestWordInString("this is mitali here"))

// function countVowels(str){
//     let count=0;
//     let vowels=['a','e','i','o','u','A','E','I','O','U']
//     for(let i=0;i<str.length;i++){
//         for(let j=0;j<vowels.length;j++){
//             if(str[i]===vowels[j]){
//                 count++;
//             }
//         }
//     }
//     console.log(count)
// }
// countVowels('hello rsAvi pAtiar')

// function countVowels(str){
//     let count=0;
//     let vowels="aeiouAEIOU"
//     for(let i=0;i<str.length;i++){

//             if(vowels.includes(str[i])){
//                 count++;
//             }
//     }
//     console.log(count)
// }
// countVowels('hello rsAvi pAtiar')

// function checkPrime(num){

//     let i=2;
//     let count=0
//     while(i<=num){
//         if(num%i===0){
//             count++
//         }
//         i++
//     }
//     if(count===1){
//         console.log(`${num} is prime number`)
//     }
//     else{
//         console.log(`${num} is not prime number`)
//     }
// }
// checkPrime(10);

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j]*2)
//     }
//     console.log('\n')
// }

//
// function findUniqueElements(arr){
//     let uniqueElements=[];
//     for(let i=0;i<arr.length;i++){
//                 if(!uniqueElements.includes(arr[i])){
//                     uniqueElements.push(arr[i])
//             }
//     }
//     console.log(uniqueElements)
// }
// findUniqueElements([5,3,4,1,2,5])

// function checkPerfect(num){
//     let sum=0;
//     let temp=num;

//     for(let i=1;i<temp;i++){
//         if(temp%i===0){
//             sum+=i;
//         }
//     }
//     if(sum===num){
//         console.log(`${num} is perfect number`)
//     }
//     else{
//         console.log(`${num} is not perfect number`)

//     }
// }
// checkPerfect(28)

// function findUniqueCharaters(str){
//     let uniqueCharacters="";
//     for(let i=0;i<str.length;i++){
//                 if(!uniqueCharacters.includes(str[i])){
//                     uniqueCharacters+=str[i]
//             }
//     }
//     console.log(uniqueCharacters)
// }
// findUniqueCharaters("hello this is ravi patidar")

// let persons = [
//   { name: "Alice", age: 25, id: 101},
//   { name: "Bob", age: 30, id: 102 },
//   { name: "Charlie", age: 35, id: 101 },
//   { name: "David", age: 40, id: 104 },
//   { name: "Eve", age: 45, id: 105 },
// ];

// function findUniqueObjects(person){
//     let uniqueObjects=[];
//     for(let i=0;i<person.length;i++){
//         let isUnique=true;
//         for(let j=0;j<person.length;j++)
//             {
//                 if(i!==j && person[i].id===person[j].id){
//                     isUnique=false
//                     break;
//                 }
//             }
//         if(isUnique){
//             uniqueObjects.push(person[i])
//         }
//     }
//     console.log(uniqueObjects)
// }
// findUniqueObjects(persons)

// sort an array using bubble sort algorithm
// let unsortedArr = [-1,1,7, 9, 11, 2, 7, 17];
// let n = unsortedArr.length;
// let isSorted;

// for (let i = 0; i < n - 1; i++) {
//     isSorted = 1;
//     for (let j = 0; j < n - i - 1; j++) {
//         if (unsortedArr[j] > unsortedArr[j + 1]) {
//             let temp = unsortedArr[j];
//             unsortedArr[j] = unsortedArr[j + 1];
//             unsortedArr[j + 1] = temp;
//             isSorted = 0;
//         }
//     }
//     if (isSorted) {
//         break;
//     }
// }

// console.log(unsortedArr);

// function isArmstrongNumber(number) {
//     let numStr = number.toString();

//     let sum = 0;

//     for (let i = 0; i < numStr.length; i++) {
//         sum+=parseInt(numStr[i]**numStr.length)
//         // ** ye wala operator mene power karne ke liye use kiya hai for example :- 2**3 ==8 like this tu chahe to Math.pow kar use kar sakti hai
//     }
//     if(sum===number){
//         console.log(`${number} is Armstrong number`)
//     }
//     else{
//         console.log(`${number} is not Armstrong number`)
//     }
// }

// isArmstrongNumber(1634)

// function generateFibonacci(num) {
//     let n1 = 0, n2 = 1, n3;

//         for (let i = 1; i < num; i++) {
//             n3 = n1 + n2;
//             n1 = n2;
//             n2 = n3;
//             console.log(n3);
//         }
//     }

// generateFibonacci(5);

// function findSecondLowestAndSecondGreatest(arr){
//     if(arr.length<2){
//         console.log("The array length must be atleast two elements");
//         return;
//     }
//     let uniqueElements=[];
//         for(let i=0;i<arr.length;i++){
//                     if(!uniqueElements.includes(arr[i])){
//                         uniqueElements.push(arr[i])
//                 }
//         }
//         console.log(uniqueElements)
//     let sortedArray=uniqueElements.sort((a,b)=>a-b)
//     let secondLowestElement=sortedArray[1]
//     let secondGreatestElement=sortedArray[sortedArray.length-2]
//     console.log(secondLowestElement,secondGreatestElement)
// }

// findSecondLowestAndSecondGreatest([4,65,11,19,12,34,3])

// function containingLargeElements(arr,num){
//     let largeElements=arr.filter(value=>value>num)
//     console.log(largeElements)
// }
// containingLargeElements([1,2,3],3)

// function generateID(num){
//     let string="";
//     let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

//     for(let i=0;i<num;i++){
//         string+=characters[Math.floor(Math.random()*characters.length)]
//     }
//     console.log(string)
// }
// generateID(30)

// function checkOccuranceOfCharacter(str,character){
//     if(character.length>1){
//         console.log('please provide only one character at a time')
//         return ;
//     }
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i].includes(character)){
//             count++;
//         }
//     }
//     console.log(count)
// }
// checkOccuranceOfCharacter('mittaali','aa')

// function firstNotRepeateCharacter(str){
//     for(let i=0;i<str.length;i++){
//         let count=0;
//         for(let j=0;j<str.length;j++){
//             if(i!==j && str[i]===str[j]){
//                 count++;
//             }
//         }
//         if(count===0){
//             return str[i];
//         }
//     }
// }
// console.log(firstNotRepeateCharacter('emmiemtaltafflgi'))

// function findLongestNameOfCountry(countries){
//     // return countries.reduce((lname,country)=>{
//     //     return lname.length<country.length ?lname:country
//     // })

//     let longestName=countries[0];
//     for(let i=0;i<countries.length;i++){
//         if(longestName.length>countries[i].length)
//             {
//                 longestName=countries[i]
//             }
//     }
//     console.log(longestName)
// }
// const countries = [
//     "United States",
//     "Canada",
//     "United Kingdom",
//     "Germany",
//     "France",
//     "Italy",
//     "Australia",
//     "Japan",
//     "China",
//     "India",
//     "Brazil",
//     "Russia",
//     "South Korea",
//     "Spain",
//     "Mexico",
//     "Indonesia",
//     "Netherlands",
//     "Switzerland",
//     "Sweden",
//     "Norway"
// ];

// console.log(findLongestNameOfCountry(countries))
// function funcwwName(a,b){
//     return funcwwName.name
// }
// console.log(funcwwName(12,5))

// function passAnotherFunction(about){
//     about()
// }
// function printName(){
//     console.log("fullName")
// }
// passAnotherFunction(printName)

// function findLargestOfFiveNumbers(...arr){
//     let greatest=arr[0];
//     arr.forEach((value)=>{
//         if(greatest<=value){
//             greatest=value
//         }
//     })
//     console.log(greatest)
// }
// findLargestOfFiveNumbers(111,212,23,4,15,78,445)
// function countOccurances(str){
//     let obj={}
//     for(let i=0;i<str.length;i++){
//         let count=0;
//         for(let j=0;j<str.length;j++)
//             {
//                 if(str[i]===str[j]){
//                     count++;
//                 }
//             }
//             obj[str[i]]=count;
//     }
//     console.log(obj)
// }
// countOccurances('Ravi')
// const a = function(str){
//      let c =str.replace(" ","")
//       let obj = {}
//        let arr = c.toLowerCase().split("")
//         for(let i of arr){
//              let filteredData = arr.filter((value)=>{ return value ==i })
//             obj[i] = filteredData.length } console.log(obj) }
//              a("jiganya gupta")

// function checkEvenOdd1To15(){
//     for(let i=1;i<=15;i++)
//         {
//             if(i%2===0){
//                 console.log(`${i} is even`)
//             }
//             else{
//                 console.log(`${i} is odd`)
//             }
//         }

// }
// checkEvenOdd1To15()

    // function findGrades(students){
    //     let gradeObject=[]
    //     let grades=[[60,'F'],[70,'D'],[80,'C'],[90,'B'],[100,'A']]
    //     for(let i=0;i<students.length;i++){  
    //         let grade='F'
    //         for(let j=0;j<grades.length;j++){
    //             if(students[i].marks<grades[j][0])
    //                 {
    //                      grade=grades[j][1];
    //                      break;
    //                 }
    //         }
    //         gradeObject.push({name:students[i].name,marks:students[i].marks,grades:grade})
    //     }console.log(gradeObject)

    // }
    // const students = [
    //         { name: "Alice", marks: 65},
    //         { name: "Bob", marks: 70 },
    //         { name: "Charlie", marks: 55 },
    //         { name: "David", marks: 90 },
    //         { name: "Eve", marks: 88 }
    //     ];
    //     findGrades(students)
    // function replaceMultipleOf3And5(){
//     for(let i=1;i<=100;i++){
//         if(i%3===0)console.log('Fizz')
//         else if(i%5===0) console.log('Buzz')
//         else console.log(i)

//     }
// }
// replaceMultipleOf3And5()
// function checkArmstrong(num){
//     let sum=0;
//     let temp=num;
//     while(temp!=0){
//         let val=temp%10;
//         sum+=Math.floor(val**3)
//         temp=Math.floor(temp/10);
//     }
//     if(sum===num){
//         console.log(`${num} is a armstrong number`)
//     }
//     else{
//         console.log(`${num} is not a armstrong number`)
//     }
// }
// checkArmstrong(407)

// function printPattern(){
//     for(let i=0;i<5;i++){
//         for(let j=0;j<=i;j++){
//             console.log("*");
//         }
//         console.log('\n')
//     }
// }
// printPattern()
//   setTimeout(()=>{
//         console.log("this will run after 2 seconds of delay")
//   },2000)
// console.log(document.cookie)
// document.cookie="name=ravi"
// document.cookie="lname=patidar"
// document.cookie = "username=JohnDoe";
// document.cookie = "firstname=Ravi";
// document.cookie="lastName=Patidar";

// console.log(document.cookie.split(';'))

        // function decimalToBinary(decimalNumber){
        //     let temp=decimalNumber;
        //     let remainder="";
        //     let quotient;
        //     while(temp!=0){
        //         quotient=Math.floor(temp/2)
        //         remainder+=temp%2;
        //         temp=quotient;
        //     }
        //     console.log(remainder.split('').reverse().join(''))
        // }
        // decimalToBinary(778);

        // function binaryToDecimal(binaryNumber){
        //     let length=binaryNumber.toString().length-1
        //     let stringBinary=binaryNumber.toString()
        //     let sum=0;
        //     for(let i=0;i<=length;i++){
        //         sum+=(parseInt(stringBinary[i]))*(2**(length-i))
        //     }

        //     console.log(sum)
        // }
        // binaryToDecimal(11000010)

        // function generateRandom(start,end){
        //     console.log(Math.floor(Math.random() * end) + start)
        // }
        // generateRandom(4,20) 
        // function findMax(arr){
        //     console.log(Math.min(...arr))
        // }
        // findMax([1,2,3,-4])
    
        // function power_Of_2(num){
        //     for(i=0;i<num;i++){
        //         let square=i**2;
        //         if(square===num){
        //             return true
        //         }
        //     }
        //     return false
        // }
        // console.log(power_Of_2(24))

        // console.log(-10.3079499.toFixed(3)).
        // console.log(Number.isInteger(NaN))
        
        // function sumOfArray(arr){
        //     let sum=0;
        //     arr.forEach(value=>sum+=value)
        //     console.log(sum)
        // }
        // sumOfArray([1,2,3,4,5])
        // function productOfArray(arr){
        //     let product=1;
        //     arr.forEach((value)=>{
        //         if(typeof value=="string") continue;

        //         else{
        //             product*=value;
        //         }
        //     })
            // for(let i=0;i<arr.length;i++){
            //     if(typeof arr[i]==="string"){
            //         continue;
            //     }
            //     else{
                //         product*=arr[i]
                //     }
                // }
                // console.log(product)
            // }
            // productOfArray([1,2,'af

            // function integerToRoman(num) {
            //     const val = [
            //         1000, 900, 500, 400, 100, 90,
            //         50, 40, 10, 9, 5, 4, 1
            //     ];
            //     const syms = [
            //         "M", "CM", "D", "CD", "C", "XC",
            //         "L", "XL", "X", "IX", "V", "IV", "I"
            //     ];
            //     let romanNumber = "";
            //     for (let i = 0; i < val.length; i++) {
            //         while (num >= val[i]) {
            //             romanNumber += syms[i];
            //             num -= val[i];
            //         }
            //     }
            //     return romanNumber;
            // }
            
            // Example usage:
            // console.log(integerToRoman(7789033)); // Output: "MMMMMDCLXXXVIII"
            
            // function romanToInteger(roman) {
            //     const romanMap = {
            //         'I': 1,
            //         'V': 5,
            //         'X': 10,
            //         'L': 50,
            //         'C': 100,
            //         'D': 500,
            //         'M': 1000
            //     };
            //     let integer = 0;
                
            //     for (let i = 0; i < roman.length; i++) {
            //         const currentVal = romanMap[roman[i]];
            //         const nextVal = romanMap[roman[i + 1]];
                    
            //         if (nextVal && currentVal < nextVal) {
            //             integer -= currentVal;
            //         } else {
            //             integer += currentVal;
            //         }
            //     }
                
            //     return integer;
            // }
            
            // // Example usage:
            // console.log(romanToInteger("MMMMMDCLXXXVIII")); // Output: 5688
            
            // function generateUUID(){
            //     let char='01234567890abcdef';
            //     let uuid=''

            //     for(let i=0;i<36;i++){
            //         if(i===8 || i===13 || i===18 ||  i===23){
            //             uuid+='-';
            //         }
            //         else{
            //             uuid+=char[Math.floor(Math.random()*16)];
            //         }
            //     }
            //     console.log(uuid)
            // }
            // generateUUID()

            // console.log(parseFloat((5.00010000).toFixed(4)))

            // function currencyMath(...currency){
            //                     let sum=0;
            //     for(let i=0;i<currency.length;i++){
            //         sum+=Number(currency[i].slice(1))
            //     }
            //     console.log(sum)
            //     let currencySymbol=currency[0].slice(0,1);
            //     console.log(`${currencySymbol}${sum}`)
            // }
            // currencyMath('$567','$334')
    // function  nthRoot(x,n){
    //     let result=Math.pow(x,1/n)
    //     console.log(result)
    // }
    // nthRoot(64,2)


    // let a=parseFloat('56.7');
    // console.log(typeof a)
    // console.log(a)

    // let arr=[1,2,3,4,5]
    // let [,a,b]=arr;
    // console.log(a,b)

    // function sum(...arr){
    //     let sum=0
    //     arr.forEach((value)=>{
    //         sum+=value;
    //     })
    //     console.log(sum)
    // }
    // sum(1,2,3,7,8,9)
    // let arr=[1,2,3,4,5]
    // console.log(arr)
    // console.log(...arr)
    // console.log(Math.max(...arr))

    // plaindrome
    // function checkIspalindrome(num){
    //     let originalNumber=num;
    //     let reverse=0;
    //     while(num>0){
    //         let lastValue=num%10;
    //         reverse=reverse*10+lastValue;
    //         num=Math.floor(num/10)

    //     }
    //     return originalNumber==reverse
    // }
    // console.log(checkIspalindrome(122))

    function isArmstrongNumber(num){
        let length=String(num).length;
        let originalNumber=num;
        let sum=0;
        while(num>0){
            let lastValue=num%10;
            sum+=Math.pow(lastValue,length);
            num=Math.floor(num/10);
        }
        return sum==originalNumber
    }
    console.log(isArmstrongNumber(375))