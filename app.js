// // RETURNING A VALUE BASED OFF A BOOLEAN
// function firstFalsy (value1, value2) {
//     if (!value1) {
//         return value1;
//     }
//     else {
//         return value2;
//     }
// }
// console.log(firstFalsy(1, 500));

// //shortened
// function firstFalsy(elmt1, elmt2) {
//     return (!elmt1) ? elmt1 : elmt2;
// }
// console.log(firstFalsy(0, 5))


//              ARRAYS
// // LENGTH OF GIVEN ARRAY
// function arrayLength(arr) {
//     return arr.length;
// }
// console.log(arrayLength([1, 2, 3]));
// console.log(arrayLength([]));
// console.log(arrayLength([5, 0, -4, 1, 9, 3]));

// // LAST ELEMENT OF GIVEN ARRAY
// function lastInArr(arr) {
//     return arr[arr.length - 1];
// }
// console.log(lastInArr([3, 2, 0, 6, 2]));
// console.log(lastInArr([`dog`, `cat`, `mouse`]));

// // DYNAMIC SUM OF ARRAY
// function arraySum(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(arraySum([2, 2 , 2]));
// console.log(arraySum([3, 7 , 12, 48]));

// // FINDING THE LARGEST NUMBER
// function arrLargest(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max
// }
// console.log(arrLargest([5, 100, 0]));
// console.log(arrLargest([12, 10, -20]));
// console.log(arrLargest([-300, -100, -3]));


//                      ADDING 
// // FROM A SINGLE NUMBER
// function numSum (num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log(numSum(8));

// // SECONDS TO MM:SS FORMAT - changing format
// function timeFormat(secs) {
//     let timeMin = Math.floor(secs / 60);
//     let timeSecs = secs % 60;
//     if (timeMin.toString().length === 1) {
//         timeMin = `0` + timeMin;
//     }
//     return timeMin + `:` + timeSecs;
// }
// console.log(timeFormat(70));
// console.log(timeFormat(143));
// console.log(timeFormat(1243));


// // REVERSE A STRING
// function reverseString(str) {
//     let reverseString = ``;
//     for (let i = 0; i < str.length; i++) {
//         reverseString = str[i] + reverseString;
//     }
//     return reverseString
// }
// console.log(reverseString(`abc`));

// // SHORTENED and DEGRESIVE FORMAT - converting string to array and back
// function reverseString(str) {
//     return str.split(``).reverse().join(``);
// }
// console.log(reverseString(`abc`));



// // MODIFYING ARRAY DATA - for loop
// function convertZero(arr) {
//     let zeroArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         zeroArr[i] = 0;
//     }
//     return zeroArr;
// }
// console.log(convertZero([5, 100, 0]));
// console.log(convertZero([12]));
// console.log(convertZero([1, 2 , 3, 4, 5, 6]));

// // MODIFYING ARRAY DATA - array `fill`
// function convertZero(arr) {
//     return new Array(arr.length).fill(0);
// }
// console.log(convertZero([5, 100, 0]));
// console.log(convertZero([12]));
// console.log(convertZero([1, 2 , 3, 4, 5, 6]));

// // MODIFYING ARRAY DATA - array .map method
// function convertZero(arr) {
//     return arr.map(elem => 0);
// }
// console.log(convertZero([5, 100, 0]));
// console.log(convertZero([12]));
// console.log(convertZero([1, 2 , 3, 4, 5, 6]));

// // FILTERING AN ARRAY - for loop
// function noApples(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== `Apple`) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(noApples([`Banana`, `Apple`, `Orange`, `Apple`]));
// console.log(noApples([`Tomato`, `Orange`, `Banana`]));
// console.log(noApples([`Banana`, `Orange`, `Apple`]));

// // FILTERING AN ARRAY - .filter method
// function noApples(arr) {
//     return arr.filter(elem => elem !== `Apple`)
// }
// console.log(noApples([`Banana`, `Apple`, `Orange`, `Apple`]));
// console.log(noApples([`Tomato`, `Orange`, `Banana`]));
// console.log(noApples([`Banana`, `Orange`, `Apple`]));

// // FILTERING FALSY VALUES - for loop
// function noFalsy(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let newArr = []
//         if (arr[i] !== noFalsy) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(['', [], 0, null, undefined, `0`])
// console.log([`Tomato`, `Orange`, `Banana`, false])
// console.log([`Banana`, `Orange`, `Apple`])

// FILTERING FALSY VALUES - .filter method
function noFalsy(arr) {
    return arr.filter(elem => !!elem === true)
}
console.log(noFalsy['', [], 0, null, undefined, `0`]);
console.log(noFalsy[`Tomato`, `Orange`, `Banana`, false]);
console.log(noFalsy[`Banana`, `Orange`, `Apple`]);