const temps = ["kelvin", "celsius", "fahrenheit", "rankine"];
const volumes = [
  "liters",
  "tablespoons",
  "cubic-inches",
  "cubic-feet",
  "gallons",
];

/**
 * 
 * @param {*} inputValueString - input value string
 * @param {*} inputUnit 
 * @param {*} targetUnit 
 * @param {*} studentResponseString 
 * @returns success if value is valid
 */
export const unitConversionTest = (
  inputValueString,
  inputUnit,
  targetUnit,
  studentResponseString
) => {
  console.log(inputValueString)
  console.log(studentResponseString)
  let inputValue = Number(inputValueString);
  console.log(inputValue);
  console.log(inputValueString)
  console.log(studentResponseString)
  let studentResponse = Number(studentResponseString);

  //check inputValueString and studentResponseString is empty or not
  if(String(inputValueString).length && String(studentResponseString).length){

  if (isNaN(inputValue)) {
    console.log("invalid blcok");
    return "Invalid input";
  }

  if (isNaN(studentResponse)) {
    console.log("incorect log");
    return "Incorrect response";
  }

  if (temps.includes(inputUnit) && temps.includes(targetUnit)) {
    let kelvinTemp = tempToKelvin(inputValue, inputUnit);
    let correctAnswer = kelvinToTarget(kelvinTemp, targetUnit);

    return studentResponse === correctAnswer ? "Success" : "Incorrect";
  } else if (volumes.includes(inputUnit) && volumes.includes(targetUnit)) {
    let literVolume = volumeToLiters(inputValue, inputUnit);
    let correctAnswer = litersToTarget(literVolume, targetUnit);

    return studentResponse === correctAnswer ? "Success" : "Incorrect";
  } else {
    return "Invalid";
  }
}
};

const tempToKelvin = (originalTemp, originalUnit) => {
  switch (originalUnit) {
    case "kelvin":
      return originalTemp;
    case "celsius":
      return originalTemp + 273.15;
    case "fahrenheit":
      return ((originalTemp - 32) * 5) / 9 + 273.15;
    case "rankine":
      return originalTemp / 1.8;
  }
};

const kelvinToTarget = (kelvinTemp, targetUnit) => {
  switch (targetUnit) {
    case "kelvin":
      return kelvinTemp;
    case "celsius":
      return kelvinTemp - 273.15;
    case "fahrenheit":
      return (kelvinTemp - 273.15) * 1.8 + 32;
    case "rankine":
      return kelvinTemp * 1.8;
  }
};

const volumeToLiters = (originalVol, originalUnit) => {
  switch (originalUnit) {
    case "liters":
      return originalVol;
    case "tablespoons":
      return originalVol / 67.628;
    case "cubic-inches":
      return originalVol / 61.024;
    case "cubic-feet":
      return originalVol * 28.317;
    case "gallons":
      return originalVol * 3.785;
    case "cups":
      return originalVol / 4.227;
  }
};

const litersToTarget = (litersVolume, targetUnit) => {
  switch (targetUnit) {
    case "liters":
      return litersVolume;
    case "tablespoons":
      return litersVolume * 67.628;
    case "cubic-inches":
      return litersVolume * 61.024;
    case "cubic-feet":
      return litersVolume / 28.317;
    case "gallons":
      return litersVolume / 3.785;
    case "cups":
      return litersVolume * 4.227;
  }
};
