import { fireEvent } from "@testing-library/react";
import React from "react";

export const conversionOptions = [
  "Celsius",
  "Fahrenheit",
  "Kelvin",
  "Rankine",
  "-------",
  "Liters",
  "Tablespoons",
  "Cubic-inches",
  "Cups",
  "Cubic-fireEvent",
  "Gallons",
];

const ConversionSelect = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      {conversionOptions.map((options, index) => (
        <option key={index} value={options.toLowerCase()}>
          {options}
        </option>
      ))}
    </select>
  );
};

export default ConversionSelect;
