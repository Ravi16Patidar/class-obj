// 1.Write a program to check whether a number is even or odd.
// function isEvenOrOdd(num){
//         if(num%2===0){
//             return 'even'
//         }
//         return 'odd'
// }
// console.log(isEvenOrOdd(34))

// 2. Write a program to determine if a number is prime.
// function checkPrime(num){
//     let i=2;
//     let count=0;
//     while(i<=num){
//         if(count>1){
//                 return false
//             }
//             if(num%i===0){
//             count++;
//         }
//         i++
//     }
//     return count===1?true:false;
// }
// console.log(checkPrime(24))

// 3.Write a program to check if a given year is a leap year.
// function isLeapYear(year){
//     if(year%4===0){
//         if(year%100===0){
//             return year%400===0
//         }
//         return true
//     }
//     return false
// }
// console.log(isLeapYear(1984))

// 4. Write a program to check if a number is an Armstrong number.
// function isArmstrong(num){
//     let length=String(num).length
//     let temp=num;
//     let sum=0
//     while(temp!==0){
//         let lastDigit=temp%10;
//         sum+=Math.pow(lastDigit,length)
//         temp=Math.floor(temp/10)
//     }
//     return sum===num?true:false
// }
// console.log(isArmstrong(407))

// 5. Write a program to generate the Fibonacci series up to a given number.
// function fibonacciSeries(limit){
//     let a=0,b=1;
//     while(a<=limit){
//         console.log(a)
//         let temp=a;
//         a=b;
//         b=temp+b
//     }
// }
// fibonacciSeries(10)

// 6. Write a program to check if a string or number is a palindrome.
// function checkPalindrome(value){
//     let temp=String(value)
//     let reverse=temp.split('').reverse().join('')
//     return reverse==value?true:false
// }
// console.log(checkPalindrome(121))

// 7.Write a program to create different star patterns (e.g., pyramid, diamond).
//     *
//    ***
//   *****
//  *******
// *********

// function createDiamondPattern() {
//     for (let i = 0; i < 5; i++) {
//         let line = '';
//         // Print spaces
//         for (let j = 4; j > i; j--) {
//             line += ' ';
//         }
//         // Print stars
//         for (let k = 0; k < i * 2 - 1; k++) {
//             line += '*';
//         }
//         console.log(line);
//     }
// }
// createDiamondPattern();

// 8.Write a program to compute the factorial of a given number.

// function factorial(num){
//     let fact=1;
//     for(let i=1;i<=num;i++){
//         fact=fact*i;
//     }
//     return fact;
// }
// console.log(factorial(8))

// 9. Write a program to calculate the sum of digits of a number.
// function calculateDigitsOfNumber(num){
//     let sum=0;
//     while(num!=0){
//         let lastDigit=num%10;
//         sum+=lastDigit;
//         num=Math.floor(num/10)
//     }
//     return sum
// }
// console.log(calculateDigitsOfNumber(130))

// 10.Write a program to find the GCD of two numbers.

// function findGCD(a,b){
//     while(b!==0){
//         let remainder=a%b;
//         a=b;
//         b=remainder;
//     }
//     return a;
// }
// console.log(findGCD(48,12))

// 11.Write a program to find the lCM of two numbers.
// function findLCM(num1,num2){
//     let a=num1;
//     let b=num2;

//     let divisor=2;
//     let lcm=1;
//     while(a>1 || b>1){
//         if(a%divisor===0 || b%divisor===0){
//             lcm*=divisor;
//             if(a%divisor===0) a/=divisor;
//             if(b%divisor===0) b/=divisor;
//         }
//         else{
//             divisor++;
//         }
//     }
//     return lcm

// }
// console.log(findLCM(15,12))

// 12.Write a program to count vowels and consonants in a given string.
// function countConstantsAndVowels(str){
//     let vowel='aeiouAEIOU';
//     let countVowels=0;
//     let countConstants=0;
//     for(let i=0;i<str.length;i++){
//         if(vowel.includes(str[i])){
//             countVowels++
//         }
//         else{
//             countConstants++
//         }
//     }
//     return [countVowels,countConstants]
// }
// console.log(countConstantsAndVowels('hello'))

// 13 Write a program to reverse a given string.
// function reverseString(str){
//     // return str.split('').reverse().join('')
//     let reverseStr='';
//     for(let i=str.length-1;i>=0;i--){
//         reverseStr+=str[i]
//     }
//     return reverseStr;

// }
// console.log(reverseString('hello'))

// 14.Write a program to find the largest and smallest numbers in an array.
// function findLargeAndSmallElemOfArr(arr) {
//   let smallestElem = arr[0];
//   let largestElem = arr[1];
//   for (let i = 0; i < arr.length; i++) {
//     if(smallestElem>=arr[i]) smallestElem=arr[i]
//     if(largestElem<=arr[i]) largestElem=arr[i]
//   }
//   return {smallestElem:smallestElem,largestElem:largestElem}
// }
// console.log(findLargeAndSmallElemOfArr([45, 7,4, 12, 9, 61, 14,112, 76,340,33]));

// 15. Write a program to sort an array of numbers in ascending order.
// function sortArray(arr){
//     return arr.sort((a,b)=>a-b)
// }
// console.log(sortArray([45, 7,4, 12, 9, 61, 14,112, 76,340,33]))

// 16. Write a program to find the sum of elements in an array.
// function sumOfArrayElements(arr){
//     let sumOfArrayElem=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(typeof arr[i]==='string') continue
//         sumOfArrayElem+=arr[i];
//     }
//     return sumOfArrayElem;
// }
// console.log(sumOfArrayElements([45, 7,4, 12, 9, 61,'hello',14,112, 76,340,33]))

// 17. Write a program to find all Armstrong numbers within a given range
// function armstrongInRange(){
//     let armstrongArr=[]
//     for(let i=1;i<=500;i++){
//         let temp=i;
//         let digitCount=String(temp).length;
//         let sum=0;
//         if(i>=1 && i<=9) continue
//         while(temp!==0){
//             let lastDigit=temp%10;
//             sum+=Math.pow(lastDigit,digitCount);
//             temp=Math.floor(temp/10)
//         }
//         if(i===sum) armstrongArr.push(i)
//     }
// return armstrongArr;
// }
// console.log(armstrongInRange())

// 18.Write a program to generate multiplication tables for a given number.
// function generateMultiplicationTable(number) {
//   let str=''
//   for (let i = 1; i <= 10; i++) {
//         str+=`${number} * ${i} = ${number*i}\n`
//   }
//   console.log(str)
// }
// generateMultiplicationTable(5);

// 19.Write a program to find all prime numbers within a given range.
// function primeInRange(startRange, endRange) {
//   let primeNumbers = [];
//   for (let i = startRange; i <= endRange; i++) {
//     let j = 2;
//     let count = 0;
//     while (j <= i) {
//       if (i % j === 0) {
//         count++;
//       }
//       j++;
//     }
//     if (count === 1) {
//       primeNumbers.push(i);
//     }
//   }
//   return primeNumbers;
// }
// console.log(primeInRange(5, 40));

// 20. Write a program to determine if a number is a perfect number.
// function checkPerfect(num){
//     if(num<0) return "pls provide a number greater than 0";
//     let sum=0;
//     for(let i=1;i<num;i++){
//         if(num%i===0){
//             sum+=i;
//         }
//     }
//     return (sum===num)?true:false;
// }
// console.log(checkPerfect(28))

// 21.Write a program to find the sum of all even numbers within a given range.
// function sumOfEvenNumbers(start,end){
//     let sum=0;
//     for(let i=start;i<=end;i++){
//         if(i%2===0) sum+=i;
//     }
//     return sum;
// }
// console.log(sumOfEvenNumbers(1,18))

// 22.Write a program to find the sum of all odd numbers within a given range.
// function sumOfOddNumbers(start,end){
//     let sum=0;
//     for(let i=start;i<=end;i++){
//         if(i%2===1) sum+=i;
//     }
//     return sum;
// }
// console.log(sumOfOddNumbers(1,10))

// 23. Write a program to find the Fibonacci number at a specific position.
// function fibonacciAtSpecificPosition(limit,position){
// let a=0,b=1;
// let fibonacciSeriesArr=[]
// while(fibonacciSeriesArr.length<limit){
//     fibonacciSeriesArr.push(a)
//     let temp=a;
//     a=b;
//     b=temp+b;
// }
// if(position>fibonacciSeriesArr.length) return `We have elements only up to ${fibonacciSeriesArr.length} positions`
// return `${fibonacciSeriesArr[position-1]}`
// }
// console.log(fibonacciAtSpecificPosition(10,40))

// 24. Write a program to print all prime numbers less than a given number
// function printPrimeNumberLessThanANumber(num){
// for(let i=2;i<=num;i++){
//     let j=2;
//     let count=0;
//     while(j<=i){
//         if(i%j===0){
//             count++;
//         }
//         j++;
//     }
//     if(count==1){
//         console.log(i)
//     }
// }
// }
// console.log(printPrimeNumberLessThanANumber(20))

// 25.Write a program to count the number of digits in a given number.
// method 1
// function countNumberOfDigits(num){
//     return String(num).length;
// }
// console.log(countNumberOfDigits(2353344))
// method 2
// function countNumberOfDigits(num){
//     let count=0;
//     while(num!==0){
//         num=Math.floor(num/10)
//         count++;
//     }
//     return count
// }
// console.log(countNumberOfDigits(4748495948503))

// 26.Write a program to generate number patterns (e.g., sequential numbers in a matrix).
// 1
// 2 3
// 4 5 6
// function pattern(){
//     let num=1;
//     let str='';
//     for(let i=1;i<=3;i++){
//         for( j=1;j<=i;j++){
//             str+=num+' ';
//             num++;
//         }
//         str+='\n'
//     }
//     return str
// }
// console.log(pattern())

// 27.Write a program to find the sum of the digits of the factorial of a given number.
// function sumOfFactorial(num){
//     let i=1;
//     let fact=1;
//     while(i<=num){
//         fact*=i;
//         i++;
//     }
//     let sum=0;
//     let temp=fact;
//     while(temp!=0){
//         let lastDigit=temp%10;
//         sum+=lastDigit;
//         temp=Math.floor(temp/10)
//     }
//     return sum
// }
// console.log(sumOfFactorial(6))

// 28.Write a program to find missing numbers in a sequence from 1 to n
// function findMissingNumber(){
//     let sequence=[2,4,6,10,14];
//     let missingNumbers=[];
//     let start=sequence[0];
//     let end=sequence[sequence.length-1];
//     for (let i = start; i < end; i+=2) {
//       if(!sequence.includes(i)){
//         missingNumbers.push(i)
//       }
//      }

//      return missingNumbers

// }
// console.log(findMissingNumber())

// 29.Write a program to find the median of an array of numbers.
// function findMedian(arr){
//   arr.sort((a,b)=>a-b)
//   console.log(arr)
//     let n=arr.length;
//     // console.log(n)
//     if(n%2===1){
//         return arr[Math.floor(n/2)];
//     }
//     else{
//         let mid1=arr[n/2-1];
//         let mid2=arr[n/2];
//         console.log(mid1,mid2)
//         return (mid1+mid2)/2
//         }

// }
// console.log(findMedian([1,2,67,89,23,21,9,81]))

// 30.Write a program to calculate the power of a number
// method 1
// function calculatePowerOfNumber(base,exponent){
//     return Math.pow(base,exponent)
// }
// console.log(calculatePowerOfNumber(2,3))
// method 2
// function calculatePowerOfNumber(base,exponent){
//     return base**exponent
// }
// console.log(calculatePowerOfNumber(2,3))
// method 3
// function calculatePowerOfNumber(base,exponent){
//     let i=1;
//     let pow=1;
//     while(i<=exponent){
//             pow*=base;
//             i++;
//     }
//     return pow;

// }
// console.log(calculatePowerOfNumber(2,3))

// 31. Write a program to check if two strings are anagrams.
// function checkAnagram(str1,str2){

//     str1=str1.split('').sort().join('')
//     str2=str2.split('').sort().join('')
//     return str1===str2;

// }
// console.log(checkAnagram('listen','silgfent'))

// 32.Write a program to calculate the sum of all prime numbers within a given range
// function findSumOfPrimeNumbers(rangeStart,rangeEnd){
//     let sum=0;
//     for (let i = rangeStart; i <=rangeEnd; i++) {
//             let count=0;
//             let j=2;
//             while(j<=i){
//                 if(i%j===0){
//                     count++;
//                 }
//                 j++;
//             }
//             if(count===1){
//                 console.log(i)
//                 sum+=i;
//             }
//     }
//     return sum;
// }
// console.log(findSumOfPrimeNumbers(10,20))

// 33.Finding the N-th Triangular Number
// method 1
// function findNthTraingularNumber(n){
//     let tn=n*(n+1)/2
//     return tn;
// }
// console.log(findNthTraingularNumber(6))

// method 2
// function findNthTraingularNumber(n){
//     let tn=0;
//     for (let i = 1; i <=n; i++) {
//         tn+=i;
//     }
//     return tn
// }
// console.log(findNthTraingularNumber(5))

// 34. Write a program to determine if a number is a perfect square
// function isPerfectSquare(num){
//     let squareRoot=Math.sqrt(num)
//     console.log(squareRoot)
//     return Number.isInteger(squareRoot)
// }
// console.log(isPerfectSquare(160000))

// 35.Write a program to find the sum of the squares of the digits of a number.
// function sumOfSquare(num){
//     let temp=num;
//     let sum=0;
// while(temp!=0){
//     let square=temp%10;
//     sum+=square*square;
//     temp=Math.floor(temp/10)
// }
// return sum
// }
// console.log(sumOfSquare(1235))

// 36.Write a program to generate a square matrix of a given size and fill it with sequential numbers.
// function generateMatrix(row){
//     let matrix=''
//     let num=1;
//     for (let i = 1; i <= row; i++) {
//             for(let j=1;j<=row;j++){
//                 matrix+=num+' ';
//                 num++;
//             }
//             matrix+='\n'
//     }
//     return matrix
// }
// console.log(generateMatrix(3))

// 38.Write a program to keep summing the digits of a number until a single digit is obtained.
// function sumOfDigitUntilSingleDigit(n) {
//   let sum = 0;
//   let temp = n;
//   while (temp >= 10) {
//     sum = 0;
//     while (temp != 0) {
//       let lastDigit = temp % 10;
//       sum += lastDigit;
//       temp = Math.floor(temp / 10);
//     }
//     temp = sum;
//   }
//   return sum;
// }
// console.log(sumOfDigitUntilSingleDigit(23545));

// 39.Write a program to count the occurrences of a specific digit in a number.
// function countOccurance(num, digit) {
//   let count = 0;
//   let number = String(num);
//   for (let i = 0; i < number.length; i++) if (digit == number[i]) count++;

//   return count;
// }
// console.log(countOccurance(1111111111122333, 1));

// 40.Write a program to find all divisors of a given number
// function findAllDivisors(num){
//     let divisors=[]
//     for(let i=1;i<=num;i++){
//         if(num%i===0){
//             divisors.push(i)
//         }
//     }
//     return divisors.join(',')
// }

// console.log(findAllDivisors(25))

// 41.Write a program to calculate the average of numbers in an array.

// function averageOfArray(arr){
//     // method 1
//     // let sum=arr.reduce((a,b)=>a+b)
//     // return sum/arr.length

//     // method 2
//     // let sum=0;
//     // arr.forEach((value)=>sum+=value)
//     // return sum/arr.length

//     // method 3
//     // let sum=0;
//     // arr.map((value)=>sum+=value)
//     // return sum/arr.length;

// }
// console.log(averageOfArray([1,2,3,4,5]))

// 42.Write a program to find the mode (most frequent number) in an array.
// function findMode(arr) {
//   let mode = "";
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }
//     if()
//   }
// }
// console.log(findMode([1, 2, 4, 5, 3, 2, 1, 4, 3]));

// 43
//  let pattern = '';
// for (let i = 1; i <= 5; i++) {
//     // Add leading spaces
//     for (let j = 0; j < 5 - i; j++) {
//         pattern += ' ';
//     }
//     // Add stars\

//     for (let k = 0; k < 2*i-1; k++) {
//         pattern += '*';
//     }
//     pattern += '\n'; // Move to the next line
// }

// console.log(pattern);

// 44.
// function multiply(a,b){
//     let result=0;
//     let negative=b<0;
//     let positive=Math.abs(b)
//     for(let i=0;i<positive;i++){
//         result+=a;
//     }
//     return negative ? -result:result

// }
// console.log(multiply(50,-5))

// 45.Write a program to determine the length of a string without using built-in functions.
// function findStringLength(str){
//     let count=0;
//  for (const element of str) {
//     count++
//  }
//     return count
// }
// console.log(findStringLength('hello we are here'))

// 46.Write a program to generate a pyramid of numbers (e.g., 1, 12, 123, etc.).
// 1
// 12
// 123
// 1234
// function printPyramid(){
//     let pyramid='';
//     for (let i = 1; i < 5; i++) {
//     for (let j = 1; j <=i; j++) {
//         pyramid+=j;
//     }
//     pyramid+='\n'
//     }
//     return pyramid
// }
// console.log(printPyramid())

// 47.Write a program to find the sum of the prime factors of a given number.
// function primeFactors(num){
//      let temp=num;
//      let pf=[];
//      for (let i = 2; i <=temp; i++) {
//          while(temp%i===0){
//             temp/=i;
//             pf.push(i)
//          }
//      }
//      return pf;
// }

// console.log(primeFactors(460))

// 48. Write a program to find the second largest number in an array.
// function findSecondLargest(arr){
//     arr.sort((a,b)=>b-a)
//     return arr[1]

// }
// console.log(findSecondLargest([23,56,13,8,78,4,19]))

// 49. Write a program to find the longest substring without repeating characters in a given string.
// function findSubstring(str){
//     let substring='';
//     for (let i = 0; i < str.length; i++) {
//         if(!substring.includes(str[i])){
//             substring+=str[i];
//         }
//         else{
//             return substring
//         }
//     }
// }
// console.log(findSubstring('abcabcbb'))

// 50.Write a program to calculate the sum of the series 1 + 1/2 + 1/3 + ... + 1/n up to the nth term
// function calculateSeries(){
//     let sum=1;
//     for(let i=2;i<=4;i++){
//         sum+=1/i;
//     }
//     return sum;
// }
// console.log(calculateSeries())

// 52.Write a program to generate multiplication tables for numbers within a specified range.
// function generateMultiplicationTable(start,end){
//     for (let i = start; i <= end; i++) {
//         for (let j = 1; j <=10; j++) {
//             console.log(i*j)
//         }
//         console.log('\n')
//     }
// }
// generateMultiplicationTable(2,5)

// 53.Write a program to find all pairs of elements in an array whose sum equals a specified target.
// function findPair(arr,target){
//     const pair=[];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[i]+arr[j]===target){
// pair.push(`(${arr[i]}, ${arr[j]})`)
//                 }
//             }
//         }
//         return pair;
//     }

// console.log(findPair([1,2,3,4,5,6],6))
// 54.Write a program to create a diamond pattern with stars of a given size.
//      *
//     ***
//    *****
//     ***
//      *
// function createDiamondPattern() {
//     let pattern = '';
//     const n = 3; // This represents the middle line height

//     // Create the top half of the diamond
//     for (let i = 1; i <= n; i++) {
//         for (let j = 0; j < n - i; j++) {
//             pattern += ' ';
//         }
//         for (let k = 0; k < 2 * i - 1; k++) {
//             pattern += '*';
//         }
//         pattern += '\n';
//     }

//     // Create the bottom half of the diamond
//     for (let i = n - 1; i >= 1; i--) {
//         for (let j = 0; j < n - i; j++) {
//             pattern += ' ';
//         }
//         for (let k = 0; k < 2 * i - 1; k++) {
//             pattern += '*';
//         }
//         pattern += '\n';
//     }

//     return pattern;
// }

// console.log(createDiamondPattern());

// 55.Write a program to generate a matrix where each element at position (i, j) is the product of i and j.
// 123
// 246
// 369
// function printTableMatrix(){
//     let pattern=''
// for (let i = 1; i <= 3; i++) {
//      for (let j = 1; j <=3; j++) {
//                   pattern+=i*j;
//      }
//      pattern+='\n'
// }
// return pattern;
// }
// console.log(printTableMatrix())

// 56.Write a program to find the GCD of multiple numbers.

// function findGCD(a, b) {
//     while (b !== 0) {
//         let remainder = a % b;
//         a = b;
//         b = remainder;
//     }
//     return a;
// }

// function findGCDForMultipleNumbers(...arr) {
//     if (arr.length === 0) return null; // Handle empty array
//     let gcd = arr[0]; // Start with the first number
//     for (let i = 1; i < arr.length;  i++) {
//         gcd = findGCD(gcd, arr[i]);
//     }
//     return gcd;
// }

// console.log(findGCDForMultipleNumbers(48,12)); // Output: 12

// 57Write a program to calculate the sum of the first N odd numbers.
// function sumOf_N_OddNumbers(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         if(i%2===1)
//         sum+=i;
//     }
//     return sum;
// }
// console.log(sumOf_N_OddNumbers(8))

// 58.Write a program to find how many perfect numbers exist up to a given limit.
// function countPerfectNumbers(limit){
//     let count=0;
//     for (let i = 2; i <=limit; i++) {
//         let sum=0;
//         for (let j = 1; j <i; j++) {
//             if(i%j===0){
//                 sum+=j;
//             }
//         }
//         if(sum===i){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countPerfectNumbers(50))

// 59. Write a program to find the largest prime factor of a given number.
// function largestPrimeFactor(n) {
//     let largestFactor=1;
//   for (let i = 2; i <= n; i++) {
//     let count = 0;
//     let j = 2;
//     while (j <= i) {
//       if (i % j === 0) {
//         count++;
//       }
//       j++;
//     }
//     if(count===1 && n%i===0){
//         largestFactor=i;
//     }
//   }
//   return largestFactor;
// }

// console.log(largestPrimeFactor(87897))

// 60.Write a program to generate a matrix where each element is a Fibonacci number.
// function matrixOfFibonacciSeries(row){
//     let j=0;
//     let matrix='';
//     let a=0,b=1;
//     while(j<row*3){
//         matrix+=a+' ';
//         let temp=a+b;
//         a=b;
//         b=temp;
//         j++;
//         if(j%3===0) matrix+='\n'
//     }
//     return matrix.trim();
// }
// console.log(matrixOfFibonacciSeries(5))

// 61.Write a program to calculate the sum of the first N prime numbers.
// function sum_N_PrimeNumbers(n){
// let numberOfPrime=1;

// let j=2;
// let sum=0;
// while(numberOfPrime<=n){
//     let count=0;
// let i=2;
// while(i<=j){
// if(j%i==0){
//     count++;
// }
// i++;
// }
// if(count===1){
//     numberOfPrime++;
//     sum+=j;
// }
// j++;
// }
// return sum
// }
// console.log(sum_N_PrimeNumbers(5))

// 62. Write a program to extract and sum all numbers present in a given string
// method 1
// function sumOfStringNumber(str){
//     str= str.split(' ');
//     let sum=0;
//     str.forEach(element => {
//        let result=Number(element);
//        if(!Number.isNaN(result))  sum+=result;
//     });
//     return sum
// }
// console.log(sumOfStringNumber('hello the numbers are 12 and 60'))
// method 2

// 63.Write a program to create a triangle pattern of stars with a specified height.
// function printPattern(row){
//     let pattern='';
//     for(let i=1;i<=row;i++){
//         for (let j = 1; j <=i; j++) {
//             pattern+='*'; 
//         }
//         pattern+='\n';
//     }
//     return pattern;
// }

// console.log(printPattern(4))

// 64.Write a program to calculate the difference between the sum of even and odd numbers in an array.
// function findDifferenceSumOfEvenOdd(arr){
//     let sumOfEvenNumbers=0;
//     let sumOfOddNumbers=0;
//     for (let i = 0; i < arr.length; i++) {    
//         if(arr[i]%2===0){
//             sumOfEvenNumbers+=arr[i];
//         }    
//         else{
//             sumOfOddNumbers+=arr[i];
//         }
//     }
//     return Math.abs(sumOfEvenNumbers-sumOfOddNumbers)
// }
// console.log(findDifferenceSumOfEvenOdd([1,2,3,4,5]))

// 65.Write a program to generate a square matrix where each element is a random value.
// function squareMatrix(row){
//     let matrix='';
//     for(let i=0;i<row*3;i++){
//         if(i%3===0 && i!==0)matrix+='\n'
//         let randomValue=Math.floor(Math.random()*(9-1)+1)
//         matrix+=randomValue+' ';
//     }
//     return matrix
// }
// console.log(squareMatrix(3))

// 66.Write a program to find the length of the longest word in a given string.
// function longestString(str){
//     str=str.split(' ');
//     let lengthOflongestString=str[0].length;
//     str.forEach(element => {
//         if(lengthOflongestString<=element.length){
//             lengthOflongestString=element.length
//         }
//     });
//     return lengthOflongestString;
// }
// console.log(longestString('hello this is bigest string australia'))

// 67. Write a program to generate a matrix filled with random numbers.
// function generateMatrix(row,column){
//     let matrix='';
//      for (let i = 0; i < row; i++) {
//         for(let j=0;j<column;j++){
//             let randomValue=Math.floor(Math.random()*(9-1)+1)
//             matrix+=randomValue;
//     }
//         matrix+='\n'

//      }
//      return matrix;
// }
// console.log(generateMatrix(3,2))

// function main() {
//     let n=10;
//     let pattern='';
//     for (let i = 0; i < n; i++)
//     {
//         let ch='A';
//         for (let j = 0; j < n; j++)
//         {
//             pattern+=ch;
//            ch= String.fromCharCode(ch.charCodeAt(0) + 1);         }
//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(main())

// 123
// 456
// 789
// function printPattern(){
//     let n=3;
//     let pattern='';
//     let count=1;
//     for(let i=0;i<n;i++){
//         for(let j=0;j<3;j++){
//             pattern+=count;
//             count++;
//         }
//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(printPattern())

// ABC
// DEF
// GHI

// function printAbovePattern(n){
//     let ch='A';
//     let pattern='';
//     for (let i = 0; i <n; i++) {
//         for(let j=0;j<n;j++){
//             pattern+=ch;
//             ch=String.fromCharCode(ch.charCodeAt(0)+1)
//         }
//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(printAbovePattern(4))

// A
// BB
// CCC
// DDDD

// function printAbovePattern(n){
//     let pattern='';
//     let ch='A';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < i+1; j++) {
//             pattern+=ch;
//         }
//         ch=String.fromCharCode(ch.charCodeAt(0)+1);
//         pattern+='\n'
//     }
//     return pattern;
// }
// console.log(printAbovePattern(5))

// 1
// 22
// 333
// 4444
// 55555
// function printAbovePattern(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < i+1; j++) {
//             pattern+=i+1;
//         }
//         pattern+='\n';        
//     }
//     return pattern;
// }
// console.log(printAbovePattern(15))

// 1
// 12
// 123
// 1234
// 12345

// function printAbovePattern(n){
//     let pattern="";
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < i+1; j++) {
//             pattern+=j+1;
//         }
//         pattern+='\n'
        
//     }
//     return pattern;
// }
// console.log(printAbovePattern(5))

// 1
// 21
// 321
// 4321
// 54321

// function printAbovePattern(n){
//     let pattern='';
//     for (let i = 0; i <n; i++) {
//         for(let j=i+1;j>0;j--){
//             pattern+=j;
//         }
//         pattern+='\n';      
//     }
//     return pattern;
// }
// console.log(printAbovePattern(5))

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// function printAbovePattern(n){
//     let num=1;
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < i+1; j++) {
//             pattern+=num+' ';
//             num++;
//         }
//         pattern+='\n';

//     }
//     return pattern;
// }
// console.log(printAbovePattern(4))
// A
// B C
// D E F
// G H I J


// function printAbovePattern(n){
//     let ch='A';
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < i+1; j++) {
//             pattern+=ch+' ';
//            ch=String.fromCharCode(ch.charCodeAt(0)+1);
//            if(ch==='[')break;
//         }
//         pattern+='\n';

//     }
//     return pattern;
// }
// console.log(printAbovePattern(7))

// 1111
//  222
//   33
//    4

// function printAbovePattern(n){
//     let pattern='';
//     for (let i = 0; i <n ; i++) {
//         for (let k = 0; k < i; k++) {
//             pattern+=' ' 
//         }
//         for (let j = 0; j < n-i; j++) {
//             pattern+=i+1+' ';
//         }
//         pattern+='\n'
//     }
//     return pattern;
// }
// console.log(printAbovePattern(4))


//        1
//      1 2 1
//    1 2 3 2 1
//  1 2 3 4 3 2 1
//  function printAbovePattern(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         for (let j = n; j > i+1; j--) {
//             pattern+=' ';
//         }
//         for (let k = 0; k <i+1; k++) {
//             pattern+=k+1;
//         } 
//         for (let m = i; m > 0 ; m--) {
//             pattern+=m;
//         }
//         // for (let l = n; l >i+1; l--) {
//         //     pattern+=' ';
//         // }
//         pattern+='\n';
        
//     }
//     return pattern
//  }
//  console.log(printAbovePattern(5))

//     *
//   *    *
//  *      *      
// *        *
//  *      *
//   *   *
//     *

//    1
//   222
//  33333
// 4444444
// function printAbovePattern(n){
//    let pattern='';
//    for (let i = 0; i <n; i++) {
//       for (let j = 0; j < n-i+1; j++) {
//          pattern+=' ';
//       }
//       for (let k = 0; k < 2*i+1; k++) {
//         pattern+=i+1; 
//       }
//       pattern+='\n';
//    }
//    return pattern;
// }
// console.log(printAbovePattern(4))

//    1
//   333
//  55555
// 7777777

// function printAbovePattern(n){
//    let pattern='';
//    for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n-i+1; j++) {
//          pattern+=' ';
//       }
//       for (let k = 0; k < 2*i+1; k++){
//    pattern+=2*i+1;         
//       }
//       pattern+='\n';
//   }
//   return pattern;
// }
// console.log(printAbovePattern(4))

//    1
//   123
//  12345
// 1234567

// function printAbovePattern(n){
//    let pattern='';
//    for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n-i+1; j++) {
//          pattern+=' ';
//       }
//       for (let k = 0; k < 2*i+1; k++) {
//         pattern+=k+1;
//       }
//       pattern+='\n';
//    }
//    return pattern;
// }
// console.log(printAbovePattern(4))

//    1
//   321
//  54321
// 7654321

// function printAbovePattern(n){
//    let pattern='';
//    for (let i = 0; i < n; i++) {
//       for (let j = 0; j <n-i+1; j++) {
//          pattern+=' ';
//       }
//       for (let k = 2*i+1; k >0; k--) {
//         pattern+=k;
//       }
//       pattern+='\n';
//    }
//    return pattern;

// }
// console.log(printAbovePattern(4))

//    0
//   101
//  21012
// 3210123

// function printAbovePattern(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n-i+1; j++) {
//             pattern+=' ';
//         }
//         for (let j = i; j >=0; j--) {
//             pattern+=j;
//         }
//         for (let k = 0; k < i; k++) {
//             pattern+=k+1;
//         }
//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(printAbovePattern(4))

//     *
//    ***
//   *****
//  *******
//   *****
//    ***
//     *
// function printAbovePattern(n) {
//     let pattern = '';

//     // Upper part of the diamond
//     for (let i = 0; i < n; i++) {
//         // Add spaces (decreasing)
//         for (let j = 0; j < n - i - 1; j++) {
//             pattern += ' ';
//         }
//         // Add stars (increasing odd numbers)
//         for (let k = 0; k < 2 * i + 1; k++) {
//             pattern += '*';
//         }
//         pattern += '\n'; // Move to the next line
//     }

//     // Lower part of the diamond
//     for (let i = 0; i < n ; i++) {
//         // Add spaces (increasing)
//         for (let j = 0; j <i+1; j++) {
//             pattern += ' ';
//         }
//         // Add stars (decreasing odd numbers)
//         for (let k = 0; k < 2 * (n - i - 1) - 1; k++) {
//             pattern += '*';
//         }
//         pattern += '\n'; // Move to the next line
//     }

//     return pattern;
// }

// console.log(printAbovePattern(4));

function printAbovePattern(n) {
    let pattern = '';

    // Upper part of the diamond
    for (let i = 0; i < n; i++) {
        // Add spaces (decreasing)
        for (let j = 0; j < n - i - 1; j++) {
            pattern += ' ';
        }
        // Add stars (increasing odd numbers)
        for (let k = 0; k < 2 * i + 1; k++) {
            pattern += '*';
        }
        pattern += '\n'; // Move to the next line
    }

    // Lower part of the diamond
    for (let i = 0; i < n ; i++) {
        // Add spaces (increasing)
        for (let j = 0; j <i+1; j++) {
            pattern += ' ';
        }
        // Add stars (decreasing odd numbers)
        for (let k = 0; k < 2 * (n - i - 1) - 1; k++) {
            pattern += '*';
        }
        pattern += '\n'; // Move to the next line
    }

    return pattern;
}

console.log(printAbovePattern(4));


