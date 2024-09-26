// src/BMICalculator.js

import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "weight") {
      setWeight(value);
    } else if (name === "height") {
      setHeight(value);
    }
  };

  const calculateBMI = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      const calculatedBmi = (weight / (height * height)) * 703;
      setBmi(calculatedBmi.toFixed(2));

      if (calculatedBmi < 25) {
        setCategory("Underweight");
      } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
        setCategory("Healthy weight");
      } else {
        setCategory("you are Overweight");
      }
    }
  };

  return (
    <div>
      <div className="app">
        <div className="container">
          <h1>BMI Calculator</h1>
          <form onSubmit={calculateBMI}>
            <div>
              <label>
                Weight (kg):
                <input
                  type="text"
                  name="weight"
                  value={weight}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Height (cm):
                <input
                  type="text"
                  name="height"
                  value={height}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <button type="submit">Calculate BMI</button>
          </form>
          {bmi && (
            <div>
              <h2>Your BMI: {bmi}</h2>
              <h3>Category: {category}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
