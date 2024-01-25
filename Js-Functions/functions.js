function calculeazaVenitAnual(nume, propozitie) {
    const cursuriValutare = { "euro": 4.95, "usd": 4.7 };
    let venitAnual = 0;
  
    propozitie.split(/\s+/).forEach((cuvant, index, cuvinte) => {
      if (cuvant === "lei" || cursuriValutare[cuvant]) {
        const suma = parseFloat(cuvinte[index - 1].replace(',', '')) || 0;
        const frecventa = cuvinte[index + 2] === "luna" ? 12 : 1;
        const curs = cursuriValutare[cuvant] || 1;
  
        venitAnual += suma * frecventa * curs;
      }
    });
  
    return `Venitul anual al lui ${nume} este de ${venitAnual.toFixed(2)} lei/an.`;
  }
  
  const primaPropozitie = "Ion castiga 5000 lei pe luna din salariu, 10000 lei pe an bonus si 1500 lei pe luna din freelancing.";
  const aDouaPropozitie = "Andrei are un salariu de 1000 de euro pe luna, un bonus de 9000 de lei pe an si mai castiga suplimentar aproximativ 500 usd pe luna din freelancing.";
  
  console.log(calculeazaVenitAnual("Ion", primaPropozitie));
  console.log(calculeazaVenitAnual("Andrei", aDouaPropozitie));