const initialValues = [
    42,
    3.14,
    "Salut!",
    true,
    null,
    undefined,
    { nume: "Iustin", varsta: 25 }, //Obiect
    [1, 2, 3],
  ];

  const otherValues = [
    ...initialValues,
    function() {
        console.log("Salut dintr-o funcție!");
      },
    123,
    "Bună seara!",
    [4, 5, 6,7],
  ];
  
  console.log("initialValues:", initialValues);
  console.log("otherValues:", otherValues);

  initialValues.push(...otherValues);
  console.log("Exercitiul 2 (push): ", initialValues);

  //Exercitiul 3 si 4:

  for (let i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "number") {
      initialValues[i] += 2;
    }
  }

  console.log("Exercitiul 3 si 4 (operatii): ", initialValues);

  //Exercitiul 5:

  for (let i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "string") {
      initialValues[i] += " happy coding";
    }
  }

  console.log("Exercitiul 5 (concatenare): ", initialValues);

  //Exercitiul 6: 

  for (let i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "boolean") {
      initialValues[i] = !initialValues[i];
    }
  }

  console.log("Exercitiul 6 (inversare ! ): ", initialValues);