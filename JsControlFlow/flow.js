const tipVehicul = prompt("Introduceti tipul vehiculului (auto, motocicleta, camion, etc):").toLowerCase();

const capacitateCilindrica = parseFloat(prompt("Introduceti capacitatea cilindrica a vehiculului (in cm3):"));

function calculImpozit(tipVehicul, capacitateCilindrica) {

  switch (tipVehicul) {
    case "auto":
    case "motocicleta":
    case "camion":
      if (capacitateCilindrica <= 1600) {
        return Math.floor(capacitateCilindrica / 200) * 8;
      } else if (capacitateCilindrica <= 2000) {
        return Math.floor(capacitateCilindrica / 200) * 22;
      } else if (capacitateCilindrica <= 2600) {
        return Math.floor(capacitateCilindrica / 200) * 85;
      } else if (capacitateCilindrica <= 3000) {
        return Math.floor(capacitateCilindrica / 200) * 171;
      } else {
        return Math.floor(capacitateCilindrica / 200) * 345;
      }
    case "autobuz":
    case "autocar":
    case "microbuz":
      return capacitateCilindrica * 28;
    case "tractor":
    case "combina":
      return capacitateCilindrica * 22;
    default:
      return "Tip de vehicul necunoscut.";
  }
}

const impozit = calculImpozit(tipVehicul, capacitateCilindrica);

console.log(`Impozitul pentru ${tipVehicul} cu capacitatea cilindrica ${capacitateCilindrica} cm3 este ${impozit} lei.`);