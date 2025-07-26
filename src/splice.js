let fruits = ["Apple", "Banana", "Cherry", "Currant"];
// First argument -> accesses the array index
// Second argument -> remove the element

// Remove elements
// fruits.splice(0, 1);
// console.log(fruits); [ 'Banana', 'Cherry', 'Currant' ]

// fruits.splice(0, 2);
// console.log(fruits); [ 'Cherry', 'Currant' ]

// fruits.splice(1, 2);
// console.log(fruits); [ 'Apple', 'Currant' ]

// Add elements
// fruits.splice(0, 0, "Watermelon");
// console.log(fruits); [ 'Watermelon', 'Apple', 'Banana', 'Cherry', 'Currant' ]

// fruits.splice(0, 0, "Watermelon", "Peach");
// console.log(fruits); [ 'Watermelon', 'Peach', 'Apple', 'Banana', 'Cherry', 'Currant' ]

// fruits.splice(2, 0, "Coconut", "Guava");
// console.log(fruits); [ 'Apple', 'Banana', 'Coconut', 'Guava', 'Cherry', 'Currant' ]

fruits.splice(2, 2, "Plum", "Pear");
console.log(fruits); // [ 'Apple', 'Banana', 'Plum', 'Pear' ]
