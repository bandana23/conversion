import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { unitConversionTest } from "./conversion";

import App from "./App";

/**
 *
 * @param {*} inputValueString
 * @param {*} inputUnit
 * @param {*} targetUnit
 * @param {*} studentResponseString
 */
describe("App", () => {
  it("renders App component", () => {
    render(<App />);
  });

  it("should convert fahrenheit to rankine", () => {
    render(<App />);
    const res = unitConversionTest("84.2", "fahrenheit", "rankine", "543.87");
    expect(res).toBe("Correct");
  });

  it("should convert kelvin to fahrenheit", () => {
    render(<App />);
    const res = unitConversionTest("317.33", "kelvin", "fahrenheit", "111.554");
    expect(res).toBe("Incorrect");
  });
  it("should convert cups to liters", () => {
    render(<App />);
    const res = unitConversionTest("25.6", "cups", "liters", "6.1");
    expect(res).toBe("Correct");
  });

  it("should convert gallons to kelvin", () => {
    render(<App />);
    const res = unitConversionTest("73.12", "gallons", "kelvin", "19.4");
    expect(res).toBe("Invalid");
  });

  it("should convert fahrenheit to rankine", () => {
    render(<App />);
    const res = unitConversionTest("6.5", "fahrenheit", "rankine", "dog");
    expect(res).toBe("Incorrect");
  });

  it("should convert dog to celsius", () => {
    render(<App />);
    const res = unitConversionTest("6.5", "dog", "celsius", "45.32");
    expect(res).toBe("Invalid");
  });
});
