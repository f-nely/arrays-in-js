const numbers = [1, 2, 3, 4];

const twiceAnumber = numbers.map((number, index) => {
  console.log(`${index} 🠒 ${number}`);
  return number * 2;
});

console.log(twiceAnumber);
