// 1-masala
// let n = 5;
// let newNumberArray = [];
// const getInitialOdds = function (n) {
//   let k = 1;
//   for (let i = 1; i <= n; i++) {
//     if (i == 1) {
//       newNumberArray.push(i);
//     } else {
//       newNumberArray.push((k += 2));
//     }
//   }
//   return newNumberArray;
// };

// console.log(getInitialOdds(n));

// 1-masala 2-usul bilan
// let n = 5;
// let newNumberArray = [];
// const getInitialOdds = function (n) {
//   let k = 1;
//   for (let i = 1; i <= n * 2; i++) {
//     if (!(i % 2 === 0)) {
//       newNumberArray.push(i);
//     }
//   }
//   return newNumberArray;
// };

// console.log(getInitialOdds(10));

// 2-masala
// let number = [4, 5, 7, 8, 6, 9];
// let newNumber = [];

// number.forEach((arr) => {
//   if (arr % 2 == 0) {
//     newNumber.unshift(arr);
//   }
// });
// console.log(newNumber);

// 3-masala
// let number = [4, 5, 7, 8, 6, 9];
// const addNumber = (arr) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i], arr[arr.length - 1 - i]);
//   }
//   return result;
// };
// console.log(addNumber(number));

// 4-masala;
// const rangeSum = (arr, K, L) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i >= K && i <= L) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// };

// let arr = [1, 6, 9, 5, 8, 10, 15];
// console.log(rangeSum(arr, 2, 5));

// 5-masala
// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
// function removeDuplicates(arr) {
//   let unique = [];
//   arr.forEach((element) => {
//     if (!unique.includes(element)) {
//       unique.push(element);
//     }
//   });
//   return unique;
// }
// console.log(removeDuplicates(arr));

// 6-masala
// function swapMinAndMax(arr) {
//   let minIndex = 0;
//   let maxIndex = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[minIndex]) {
//       minIndex = i;
//     }
//     if (arr[i] > arr[maxIndex]) {
//       maxIndex = i;
//     }
//   }
//   const temp = arr[minIndex];
//   arr[minIndex] = arr[maxIndex];
//   arr[maxIndex] = temp;

//   return arr;
// }
// const array = [13, 4, 9, 2, 3, 1, 5];
// const result = swapMinAndMax(array);

// console.log(result);

// 7-masala
// let arr = [1, 5, 8, 9, 10];
// let newArr = [];
// function moveOneIndex(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (i == arr.length - 1) {
//       newArr.push(arr[0]);
//     } else {
//       let n = arr[i + 1];
//       newArr.push(n);
//     }
//   }
//   return newArr;
// }
// console.log(moveOneIndex(arr));
