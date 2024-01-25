const array1 = [2, 4, 6, 8, 10];
const array2 = [2, 4, 6, 8, 11];

const pare1 = array1.every(num => num % 2 === 0);
const pare2= array2.every(num => num % 2 === 0);

console.log(pare1);
console.log(pare2);

////////////////////////////////////////

const array = [1, 2, 3, 4, 5];

array.forEach(num => console.log(num));

////////////////////////////////////////

const numArray = [1, 2, 3, 4, 5];

const sum = numArray.reduce((acum, Numcurent) => acum + Numcurent, 0);

console.log(sum);