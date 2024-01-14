const numere = [10, 25, 30, 5, 35];

function MediaAritmetica(arr) {
  if (arr.length === 0) {
    return "nu se poate calcula media.";
  }

  let suma = 0;

  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }

  const media = suma / arr.length;
  return media;
}

const rezultatMedie = MediaAritmetica(numere);
console.log("Media aritmetica este: ", rezultatMedie);

/////////////////////////////////////////////////////////

const mixedArray = [23, true, "55", false, 23, "234", true, "ABC", 235];

function CalculSuma(arr) {

  let suma = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      suma += arr[i];
    }
  }

  return suma;
}

const rezultatSuma = CalculSuma(mixedArray);
console.log("Suma numerelor din array este:", rezultatSuma);

////////////////////////////////////////////////////////////

function fibonacci(n) {

    const fibArr = [0, 1];
  
    for (let i = 2; i < n; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
  
    return fibArr;
  }
  
  const rezultat = fibonacci(20);
  console.log("Primele 20 de nr din sirul lui Fibonacci:", rezultat);