/* 
Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array"
*/ 
// const sevenBoom = (arr) => {
//     let counter = 0; 
//     let currentDig = arr[0]
//     for (i =0; i<arr.length;i++){
//         if (currentDig.contain(7)){
//             console.log('Boom');
//             console.log(counter);
//         }else{
//             currentDig = arr[i]
//             counter= arr[i]
//         }
//     }
// }

arr = [1,2,3,4,5,6,8,97,7]

const sevenBoom = (arr) => {
        if (arr.join('').includes(7)){
                console.log('Boom');
            }
        else{
            console.log('there is no 7 in the array');

        }}
// const sevenBoom = (arr) => {
// 	return (arr.join('').includes('7') ? "Boom!" : "there is no 7 in the array");
// }
sevenBoom(arr)
// const sevenBoom = arr =>
// /7/.test(arr) ? 'Boom!' : 'there is no 7 in the array';
// seven = sevenBoom(arr)
// console.log(seven);