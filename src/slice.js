const animals = ["Donkey", "Cheetah", "Goat", "Pigeon"];

// string.slice(posicaoInicial [, posicaoFinal])
console.log(animals.slice(1)); // [ 'Cheetah', 'Goat', 'Pigeon' ]
console.log(animals.slice(1, 2)); // [ 'Cheetah' ]
console.log(animals.slice(0, 3)); // [ 'Donkey', 'Cheetah', 'Goat' ]
console.log(animals.slice(2, -1)); // [ 'Goat' ]
console.log(animals.slice(1, -1)); // [ 'Cheetah', 'Goat' ]
console.log(animals.slice(1, -2)); // [ 'Cheetah' ]
console.log(animals.slice(-2)); // [ 'Goat', 'Pigeon' ]
console.log(animals.slice()); // [ 'Donkey', 'Cheetah', 'Goat', 'Pigeon' ]
