/**
 * No Array chamado "data" coloque 2 novos itens logo antes do último item em um Array.
 */
const data = [8];
data.splice(-1, 0, 4, 6);
console.log(data);

// data.splice(data.length - 1, 0, 1, 1); Teacher's answer
