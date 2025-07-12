const fruits = ["apple", "papaya", "orange", "banana"];
// console.log(fruits);
// console.log(fruits[0]);

const result = fruits.indexOf("banana");
if (result !== -1) {
  fruits[result] = "grape";
}
// console.log(result);
console.log(fruits);
