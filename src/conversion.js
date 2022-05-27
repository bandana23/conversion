const temps = ["kelvin", "celsius", "fahrenheit", "rankine"];
const volumes = [
  "liters",
  "tablespoons",
  "cubic-inches",
  "cubic-feet",
  "gallons",
  "cups",
];

/**
 *
 * @param {*} inputValueString - input value string
 * @param {*} inputUnit
 * @param {*} targetUnit
 * @param {*} studentResponseString
 * @returns correct if value is valid
 */
export const unitConversionTest = (
  inputValueString,
  inputUnit,
  targetUnit,
  studentResponseString
) => {
  let inputValue = Number(inputValueString);

  let studentResponse = Number(studentResponseString);

  //check inputValueString and studentResponseString is empty or not
  if (String(inputValueString).length && String(studentResponseString).length) {
    if (temps.includes(inputUnit) && temps.includes(targetUnit)) {
      let kelvinTemp = tempToKelvin(inputValue, inputUnit);
      let correctAnswer = kelvinToTarget(kelvinTemp, targetUnit);

      return studentResponse.toFixed(1) === correctAnswer.toFixed(1)
        ? "Correct"
        : "Incorrect";
    } else if (volumes.includes(inputUnit) && volumes.includes(targetUnit)) {
      let literVolume = volumeToLiters(inputValue, inputUnit);
      let correctAnswer = litersToTarget(literVolume, targetUnit);

      return studentResponse.toFixed(1) === correctAnswer.toFixed(1)
        ? "Correct"
        : "Incorrect";
    } else {
      return "Invalid";
    }
  }
};

//convert each temp to kelvin in this function
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
//convert kelvinTemp to target Unit
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

//convert each volume to litres and return response
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

//convert Litres to target unit and return response
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
