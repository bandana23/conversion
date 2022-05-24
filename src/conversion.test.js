import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { unitConversionTest } from "./conversion";

import App from "./App";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
  });

  test("should convert celcius to Farhenite", () => {
    render(<App />);

    const inputValueString = 12;
    const inputUnit = "celsius";
    const targetUnit = "fahrenheit";
    const studentResponseString = 45;

    const res = unitConversionTest(
      inputValueString,
      inputUnit,
      targetUnit,
      studentResponseString
    );
    expect(res).toBe("Incorrect");
  });

  test("should convert celcius to Farhenite", () => {
    render(<App />);

    const inputValueString = 12;
    const inputUnit = "celsius";
    const targetUnit = "fahrenheit";
    const studentResponseString = 45;

    const res = unitConversionTest(
      inputValueString,
      inputUnit,
      targetUnit,
      studentResponseString
    );
    expect(res).toBe("Correct");
  });
});
