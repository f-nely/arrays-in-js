// const arr = [1, 2, [3, 4, 5]];
// const arr = [1, 2, ...[3, 4, 5]];

// console.log(arr);
// console.log(arr[2][0]);
// console.log(arr);

const asianFruits = ["Jackfruit", "Dragon fruit", "Pomelo"];
const africanFruits = ["Ackee", "Pineapple", "Star Apple"];
const canadianFruits = ["Peache", "Currant", "Pear"];
const fruits = [...asianFruits, ...africanFruits, ...canadianFruits];
console.log(fruits);
