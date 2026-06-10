// 1. upper left traingle
// *
// **
// ***
// ****
// *****

// function upperLeftTraingle(n){
//     let pattern='';
//     for(let i=0;i<n;i++){
//         for(let j=0;j<i+1;j++){
//             pattern+='*'
//         }
//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(upperLeftTraingle(5))

// 2.upper right traingle
//     *
//    **
//   ***
//  ****
// *****

// function upperRightTraingle(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n-i+1; j++) {
//             pattern+=' ';
//         }
//         for (let k = 0; k < i+1; k++) {
//             pattern+='*';
//         }
//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(upperRightTraingle(5))

// 3. lower right traingle
// *****
//  ****
//   ***
//    **
//     *

// function lowerRightTraingle(n){
//     let pattern='';
//     for (let i = 0; i <n; i++) {
//         for (let j = 0; j < i; j++) {
//             pattern+=' ';
//         }
//         for (let k = 0; k < n-i; k++) {
//             pattern+='*';
//         }
//         pattern+='\n';
//     }
//     return pattern;

// }
// console.log(lowerRightTraingle(5))

// 4.lower left traingle
// *****
// ****
// ***
// **
// *

// function lowerLeftTraingle(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n-i; j++) {
//             pattern+='*';
//         }
//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(lowerLeftTraingle(8))

// 5. pyramid pattern
//        *
//      * * *
//    * * * * *
//  * * * * * * *
// * * * * * * * *
// function upperPyramid(n){
//     let pattern='';
//     for (let i = 0; i <n; i++) {
//         for (let j = 0; j < n-i+1; j++) {
//             pattern+=' ';
//         }
//         for (let k = 0; k < 2*i+1; k++) {
//             pattern+='*';
//         }
// pattern+='\n';
//     }
//     return pattern;
// }
// console.log(upperPyramid(5))

// 6.Inverted pyramid
// *********
//  *******
//   *****
//    ***
//     *

// function invertedPyramid(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         for (let k = 0; k < i; k++) {
//             pattern+=' ';
//         }
//         for (let j = 0; j <2*n-(2*i+1); j++) {
//             pattern+='*';
//         }
//         pattern+='\n';
//     }
//     return pattern;

// }
// console.log(invertedPyramid(5))

// 7. Left inverted pyramid

//      *
//     **
//    ***
//   ****
//  *****
//   ****
//    ***
//     **
//      *

// function LeftInvertedPyramid(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n-i-1; j++) {
//             pattern+=' ';
//         }
//         for (let k = 0; k < i+1; k++) {
//             pattern+='*';
//         }
//         pattern+='\n';
//     }
//     for (let i = 0; i < n; i++) {
//        for (let j = 0; j < i+1; j++) {
//         pattern+=' ';
//        }
//        for (let k = 0; k < n-i-1; k++) {
//         pattern+='*';
//        }
//        pattern+='\n';
//     }
//     return pattern;
// }
// console.log(LeftInvertedPyramid(5))

// 8.Right inverted pyramid.
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// function rightInvertedPyramid(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//          for (let j = 0; j < i+1; j++) {
//                 pattern+='*';
//          }
//          pattern+='\n'
//         }
//         for (let i= 0; i < n; i++) {
//            for (let j = 0; j < n-i-1; j++) {
//                           pattern+='*';
//            }
//            pattern+='\n';
//         }
//     return pattern;
// }
// console.log(rightInvertedPyramid(5))

// 9. diamond pattern
//         *
//        ***
//       *****
//      *******
//     *********
//      *******
//       *****
//        ***
//         *

// function diamondPattern(n){
//     let pattern='';
//     // top part of diamond
//     for (let i = 0; i <n; i++) {
//         for (let j = 0; j < n-i-1; j++) {
//             pattern+=' ';
//         }
//         for (let k = 0; k < 2*i+1; k++) {
//             pattern+='*';
//         }
//         pattern+='\n';
//     }
//      // bottom part of diamond
//      for (let i = 0; i < n; i++) {
//        for (let j = 0; j <i+1; j++) {
//         pattern+=' ';
//        }
//        for (let k = 0; k <2*(n-i-1)-1; k++) {
//         pattern+='*';

//        }
//        pattern+='\n';

//      }
//     return pattern;
// }
// console.log(diamondPattern(5))

// 10. hollow diamond
//      *
//     * *
//    *   *
//   *     *
//  *       *
//   *     *
//    *   *
//     * *
//      *

// function hollowDiamond(n){
//     let pattern='';
//     // top  part
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n-i-1; j++) {
//             pattern+=' ';
//         }
//         for (let k = 0; k < 1; k++) {
//             pattern+='*';
//         }

//         if(i>0){
//         for (let l = 0; l < 2*i-1; l++) {
//            pattern+=' '
//         }

//             pattern+='*';
//     }

//         pattern+='\n';
//     }
//     // bottom  part
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < i+1; j++) {
//             pattern+=' '
//         }
//             pattern+='*';

//         if(i<n-2){
//         for (let l = 0; l <2*(n-i-1)-1; l++) {
//             pattern+=' '
//         }

//             pattern+='*';
//     }
//         if(i===n-1) break;
//         pattern+='\n';

//     }

//     return pattern
// }
// console.log(hollowDiamond(7))

// 11.Inverted Hollow Diamond Pattern
// *********
// **** ****
// ***   ***
// **     **
// *       *
// **     **
// ***   ***
// **** ****
// *********

// function invertedHollowDiamond(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j <= n-i-1; j++) {
//             pattern+='*';
//         }
//         for (let j = 0; j < 2*i-1; j++) {
//             pattern+=' ';
//         }
//         for (let k = 0; k <=n-i-1; k++) {
//             if(k===4) continue
//             pattern+='*';
//         }
//         pattern+='\n';
//     }
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j <i+1; j++) {
//             pattern+='*';
//         }
//         for (let j = 0; j <2*(n-i-1)-1; j++) {
//             pattern+=' ';
//         }

//         for (let k = 0; k <i+1; k++) {
//             if(k===4) continue
//             pattern+='*';
//         }
//         pattern+='\n';
//     }

//     return pattern;
// }
// console.log(invertedHollowDiamond(5))

// 12.square pattern

// function squarePattern(n){
//     let pattern ='';
//      for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             pattern+='* ';
//         }
//         pattern+='\n';
//      }
//      return pattern;
// }
// console.log(squarePattern(3))

// 13. Floyd pattern triangle pyramid
// 15 14 13 12 11
// 10 9 8 7
// 6 5 4
// 3 2
// 1

// function floydTrianglePyramid(n){
//     let num=n*(n+1)/2;
//     let pattern='';
//     for (let i = 0; i <n; i++) {
//         for (let j = 0; j<n-i; j++) {
//             pattern+=num--+' ';
//         }
//         console.log(i)
//         if(i===n-1) break;
//         pattern+='\n';

//     }
//     return pattern;
// }
// console.log(floydTrianglePyramid(5))

// 14. hollow pyramid pattern
//      *
//    *   *
//   *     *
//  *       *
// * ******* *
// function hollowPyramid(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j <n-i-1; j++) {

//             pattern+=' ';
//         }

//         pattern+='*';
//         if(i>0){
//         for (let j = 0; j < 2*i-1; j++) {
//             pattern+=' ';
//         }
//         pattern+='*';
//     }
//         pattern+='\n';
//     }
//     for (let i = 0; i < 2 * n - 1; i++) {
//          pattern += '*';
//          }
//          pattern += '\n';
//            return pattern;
// }
// console.log(hollowPyramid(9))

// 15.
// *********
// *       *
//  *     *
//   *   *
//     *

// function verticallyInvertedPyramid(n){
//     let pattern='';
//         for (let j = 0; j <2*n-1; j++) {
//         pattern+='*';
//     }
//     for (let i = 0; i <n; i++) {
//         for (let j = 0; j < i; j++) {
//             pattern+=' ';
//         }
//         pattern+='*';
//         if(i>0){
//         for (let k = 0; k < 2*n-(2*i+1); k++) {
//             pattern+=' ';
//         }
//         pattern+='*';
//     }
//         pattern+='\n';
//         }
//         return pattern;
// }
// console.log(verticallyInvertedPyramid(8))

// 16.
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// function printTrainglePattern(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j <i+1 ; j++) {
// pattern+=j+1;
//         }
//         if(i===n-1) break;
//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(printTrainglePattern(10))

// 17.
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// function printTrainglePattern(n){
//     let pattern='';
//     for (let i = 0; i <n ; i++) {
//         for (let j = 0; j < i+1; j++) {
//           pattern+=i+1;
//         }
//         if(i===n-1) break;
//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(printTrainglePattern(8))

// 18.
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
//         if(i===n-1)break;
//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(printAbovePattern(8))

// 19.
// 12345
// 1234
// 123
// 12
// 1
// function reverseTraingle(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n-i; j++) {
//             pattern+=j+1;
//         }
//         if(i===n-1) break;
//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(reverseTraingle(5))

// 20.
//      1
//     123
//    12345
//   1234567
//  123456789

// function numberPyramidPattern(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n-i-1; j++) {
//             pattern+=' ';
//         }
//         for (let k = 0; k < 2*i+1; k++) {
//             pattern+=k+1;
//         }
//         if(i===n-1)break;
//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(numberPyramidPattern(5))

// 21.
//     1
//    234
//   56789

// function numberPyramidPattern(n){
//     let pattern='';
//     let num=1;
//     for (let i = 0; i < n; i++) {
//         for (let k = 0; k < n-i+1; k++) {
//             pattern+=' ';

//         }
//         for (let j = 0; j < 2*i+1; j++) {
//             pattern+=num+' ';
//             num++;
//         }
//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(numberPyramidPattern(3))

// 22.
// *****
// *   *
// *   *
// *   *
// *****
// function hollowSquarePattern(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         if(i===0){
//             for (let j = 0; j < n; j++) {
//                 pattern+='*';
//             }
//         }
//         else if(i===n-1){
//             for (let k = 0; k < n; k++) {
//                 pattern+='*';
//             }
//         }
//         else{
//             pattern+='*';
//             for (let i = 0; i < n-2; i++) {
//                 pattern+=' ';
//             }
//             pattern+='*';
//         }
//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(hollowSquarePattern(20))

// interview practice nov 27
// 1. hollow left traingle
// function hollowLeftTraingle(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         pattern+='*';
//        for (let j = 0; j < i; j++) {
//         pattern+=' ';
//        }
//        if(i>0) pattern+='*';
//        pattern+='\n';
//        if(i===n-1) for (let k = 0; k < i+1; k++) {
//         pattern+='* ';
//        }
//     }
//     return pattern;
// }
// console.log(hollowLeftTraingle(8))

// 2.Downward Hollow Left Triangle
// * * * * *
// *     *
// *   *
// * *
// *
// function downHollowLeftTraingle(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         if(i===0){
//         for (let j = 0; j <n; j++) {
//             pattern+='*';
//         }
//     }
//     else{
//         pattern+='*';
//         for (let k = n-1; k > i; k--) {
//             pattern+=' ';
//         }
//         if(i<n-1)
//         pattern+='*'
//         }
//         pattern+='\n';
//     }
//         return pattern;
// }
// console.log(downHollowLeftTraingle(8))

// 3. hollow right traingle
//            *
//          * *
//        *   *
//      *     *
//    * * * * *

// function hollowRightTraingle(n){
//     let pattern='';
//     for (let i = 0; i < n-1; i++) {
//         for (let j = 0; j < n-i-1; j++) {
//         pattern+='s';
//         }
//             if(i>0){
//             pattern+='*';
//             for (let l = 0; l < i; l++) {
//                 pattern+=' ';
//             }
//         }
//         pattern+='*';
//               pattern+='\n';
//               if(i===n-2) for (let m = 0; m < n; m++) {
//                 pattern+='*';
//             }
//     }
//     return pattern;
// }
// console.log(hollowRightTraingle(5))

// 4.
//   * * * * *
//     *     *
//       *   *
//         * *
//           *

// function downHollowRightTraingle(n) {
//     let pattern='';
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//         pattern+=' ';
//     }
//     if(i===0){
//         for (let k = 0; k < n; k++) {
//             pattern+='*';
//         }
//     }
//     else if(i<n-1){
//         pattern+='*';
//         for (let l = 0; l < n-i-1; l++) {
//             pattern+=' ';
//         }
//         pattern+='*';
//     }
//     else{
//         pattern+='*';
//     }
//     pattern+='\n';
//   }
//   return pattern;
// }
// console.log(downHollowRightTraingle(8));

// 5.pyramid pattern
// function pyramid(n){
//     let pattern='';
//         for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n-i-1; j++) {
//         pattern+=' ';
//     }
//     for (let k = 0; k < 2*i+1; k++) {
//         pattern+='*'
//     }
//     pattern+='\n';
//     }
//     return pattern;
// }
// console.log(pyramid(5))

// 6.hollow pyramid
// function hollowPyramid(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j <n-i-1; j++) {
// pattern+=' ';
//         }
//         if(i===0){
//             pattern+='*';
//             pattern+='\n';
//         }

//         else if(i<n-1 ){
//             pattern+='*';
//         for (let k = 0; k < 2*i+1; k++) {
//             pattern+=' ';
//         }
//         pattern+='*';
//         pattern+='\n';
//     }
//     else{
//         pattern+=' ';
//         for (let l = 0; l < 2*n-1; l++) {
//             pattern+='*';
//         }
//     }

//     }
//     return pattern;
// }
// console.log(hollowPyramid(5))

// 7 diamond pattern
// function diamond(n){
//     let pattern='';
//     // top part of diamond
//     for (let i = 0; i <n; i++) {
//         for (let j = 0; j < n-i-1; j++) {
//             pattern+=' ';
//         }
//         for (let k = 0; k < 2*i+1; k++) {
//             pattern+='*';
//         }
//         pattern+='\n';
//     }
//     // bottom part of diamond
//     for (let i = 0; i< n-1; i++) {
//         for (let j = 0; j < i+1; j++) {
//             pattern+=' ';
//         }
//         for (let k = 0; k <2*(n-i-1)-1; k++) {
//             pattern+='*';
//         }
//         pattern+='\n';
//     }
// return pattern;
// }
// console.log(diamond(5))

// 8. hollow diamond
//      *
//     * *
//    *   *
//   *     *
//  *       *
//   *     *
//    *   *
//     * *
//      *

// function hollowDiamond(n){
//     let pattern='';
//     // top part of hollow diamond
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j <n-i-1; j++) {
//             pattern+=' ';
//         }
//         if(i>0){
//         pattern+='*';
//         for (let k = 0; k < 2*i-1; k++) {
//             pattern+=' ';
//         }

//     }

//         pattern+='*';
//         pattern+='\n';
//     }
//     // down part of hollow diamond
//     for (let i = 0; i < n-1; i++) {
//         for (let j = 0;  j< i+1; j++) {
// pattern+=' ';
//         }
//         pattern+='*';
//         for (let k = 0; k <2*(n-i-1)-1; k++) {
//             pattern+=' ';
//         }
//         if(i!==n-2)
//         pattern+='*';
//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(hollowDiamond(12))

// 9.palindrome numbers
// 1
// 121
// 12321
// 1234321
// 123454321

// function palindromePattern(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < i+1; j++) {
//             pattern+=j+1;
//         }
//         for (let k = i; k >0; k--) {
//             pattern+=k;
//         }
//         if(i==n-1) break;
//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(palindromePattern(5))

// 10. Alphabet Triangle:
// A
// AB
// ABC
// ABCD
// ABCDE

// function alphabetTraingle(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//     let ch='A';
//         for (let j = 0; j < i+1; j++) {
//             pattern+=ch;
//             ch=String.fromCharCode(ch.charCodeAt(0)+1);
//         }
//         pattern+='\n';
// }
// return pattern;
// }
// console.log(alphabetTraingle(15))

// november 28
// 11.

// 12345
// 1234
// 123
// 12
// 1
// function reverseNumberTraingle(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n-i; j++) {
//             pattern+=j+1;
//         }
//         if(i==n-1) break;
//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(reverseNumberTraingle(5))

// 12.
// 123456789
//  1234567
//   12345
//    123
//     1
//    123
//   12345
//  1234567
// 123456789
// function hourglassPattern(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j <i; j++) {
//             pattern+=' ';
//         }
//         for (let k = 0; k <2*n-(2*i+1); k++) {
//             // pattern+=k+1;
//             pattern+='*';
//         }
//         pattern+='\n';
//     }
//     for (let i = 0; i < n; i++) {
//         if(i>0){
//         for (let j = 0; j < n-i-1; j++) {
//             pattern+=' ';
//         }
//         for (let k = 0; k < 2*i+1; k++) {
//             // pattern+=k+1;
//             pattern+='*';
//         }
//         if(i===n-1) break;
//         pattern+='\n';
//     }
//     }

//     return pattern;
// }
// console.log(hourglassPattern(5))
// 13.
// * * * * *
//  * * * * *
// * * * * *
//  * * * * *
// * * * * *

// function checkBoardPattern(n) {
//   let pattern = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if ((i + 1) % 2 === 0) {
//         if(j===0) pattern += " ";
//         pattern += "* ";
//       } else {
//         pattern += "* ";
//       }
//     }
//     pattern += "\n";
//   }
//   return pattern;
// }
// console.log(checkBoardPattern(8));

// 14.
//      1
//     1 1
//    1   1
//   1     1
//  1       1
// function hollowNumericPyramid(n){
//     let pattern='';
//     for (let i = 0; i <n; i++) {
//         for (let j = 0; j < n-i-1; j++) {
//             pattern+=' ';
//         }
//      pattern+='1';
//      if(i>0){
//      for (let k = 0; k < 2*i-1; k++) {
//         // if(i==1) continue;
//         pattern+=' ';
//      }
//      pattern+='1';
//     }
//     pattern+='\n';
//     }
//     return pattern;
// }

// console.log(hollowNumericPyramid(5))

// 15.
//       A
//      ABA
//     ABCBA
//    ABCDCBA
//   ABCDEDCBA

// function alphabetTriangle(n){
//     let pattern='';
//     let ch='A';
//     for (let i = 0; i < n; i++) {
//         ch='A';
//         for (let j = 0; j < n-i-1; j++) {
//             pattern+=' ';
//         }
//         for (let k = 0; k < i+1; k++) {
//             // pattern+='*';
//             pattern+=ch;
//             ch=String.fromCharCode(ch.charCodeAt(0)+1)

//         }
//         ch=String.fromCharCode(ch.charCodeAt(0)-1)
//             for (let l = 0; l < i; l++) {
//                 ch=String.fromCharCode(ch.charCodeAt(0)-1)
//                 pattern+=ch;
//             }
//         if(i===n-1) break;
//         pattern+='\n';
//     }
//     return pattern;

// }
// console.log(alphabetTriangle(5))

// Dec 1.
// 1.
//      *     *
//       *   *
//         *
//       *   *
//     *      *

// function printCross(n){
//     let pattern='';
//     for (let i = 0; i < Math.ceil(n/2); i++) {
//         for (let j = 0; j < i; j++) {
//             pattern+=' ';
//         }
//         pattern+='*';

//        if(i!==Math.floor(n/2)){
//         for (let k = 0; k < n-2*(i+1); k++) {
//         pattern+=' ';
//     }
//     pattern+='*';};

//        pattern+='\n';
//     }
//     for (let i = Math.floor(n/2)-1; i >=0; i--) {
//         console.log(i)
//         for (let j =0 ; j< i; j++ ) {
//           pattern+=' ';
//         }
//         pattern+='*';
//         for (let k = 0; k < n - 2 * (i + 1); k++) {
//             pattern += ' ';
//         }
//         pattern+='*';

//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(printCross(5))

// 2. butterfly
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

// function printbutterfly(n){
//     let pattern='';
//     for (let i = 0; i <n; i++) {
//       for (let j = 0; j < i+1; j++) {
//       pattern+='*';
//       }
//       if(i==n-1){
// pattern+='*';      }
//       else{
//       for (let k = 0; k <2*n-(2*i+1); k++) {
//         pattern+=' ';
//       }
//     }
//       for (let l = 0; l < i+1; l++) {
//         pattern+='*';
//       }
//       pattern+='\n';
//     }
//     // bottom part
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n-i-1; j++) {
//             pattern+='*';
//         }
//         for (let k = 0; k < 2*(i+1)+1; k++) {
//            pattern+=' ';
//         }
//         for (let l = 0; l <  n-i-1; l++) {
//             pattern+='*';
//         }
//         pattern+='\n'
//     }
//     return pattern;
// }console.log(printbutterfly(5))

// 3.
//       1
//      121
//     12321
//    1234321
//   123454321

// function numberPyramidPattern(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n-i-1; j++) {
//             pattern+=' ';
//         }
//         for (let k = 0; k <i+1; k++) {
//             pattern+=k+1;
//         }
//         for (let l = i; l >0; l--) {
//             pattern+=l;
//         }
//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(numberPyramidPattern(5))

// 4.
// 1
// 01
// 101
// 0101
// 10101

// function traingle1s2s(n) {
//   let pattern = "";

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i + 1; j++) {
//       if ((i+j) % 2 === 0) {
//         pattern += '1';
//       } else {
//         pattern += '0';
//       }
//     }
//     pattern += "\n";
//   }
//   return pattern;
// }
// console.log(traingle1s2s(5));

// 5.
//     1
//    3 3
//   5 5 5
//  7 7 7 7
// function oddNumbersPyramid(n){
//     let pattern='';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n-i-1; j++) {
//             pattern+=' ';
//         }
//         for (let k = 0; k <i+1; k++) { 
//                 pattern+=2*i+1+' ';
//         }
//         if(i===n-1) break;
//         pattern+='\n';

//     }
//     return pattern;
// }
// console.log(oddNumbersPyramid(5))

// date Dec 11
// 1.Right-aligned number triangle:   
//     1
//    12
//   123
// function rightAlignedNumber(n){
//     let pattern='';
//     for (let i = 0; i <n; i++) {
//         for (let j = 0; j < n-i-1; j++) {
//            pattern+=' ';  
//         }
//         for (let k = 0; k < i+1; k++) {
//             pattern+=k+1;          
//         }
//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(rightAlignedNumber(3))
// 2.Zigzag number pattern:
//  1
//  121
//  12321
//  121
//  1

// function zigzagPattern(n){
//     let pattern='';
//     for (let i = 0; i < Math.ceil(n/2); i++) {
//         for (let j = 0; j < i+1; j++) {
//            pattern+=j+1;
//         }
//         for (let k = i; k > 0; k--) {
//             pattern+=k;
//         }
//         pattern+='\n';
//     }
//     for (let i = Math.floor(n/2)-1; i >=0 ; i--) {
//         for (let j = 0; j <i; j++) {
//            pattern+=j+1;
//         }
//         for (let k = i+1; k > 0; k--) {
//             pattern+=k;
//         }
//         pattern+='\n';
//     }
//     return pattern;
// }
// console.log(zigzagPattern(5))

