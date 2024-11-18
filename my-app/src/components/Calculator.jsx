import React, { useState } from 'react';
import Input from './input';
import Result from './result';
import '../App.css';

const Calculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [classification, setClassification] = useState('');

  // Function to calculate BMI and classify the result
  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height; // Height is already in meters
      const calculatedBMI = weight / (heightInMeters * heightInMeters);

      // Set BMI value
      setBmi(calculatedBMI);

      // Classify BMI into weight categories
      if (calculatedBMI < 18.5) {
        setClassification('Underweight');
      } else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) {
        setClassification('Normal weight');
      } else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) {
        setClassification('Overweight');
      } else {
        setClassification('Obese');
      }
    }
  };

  const resetFields = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setClassification('');
  };

  return (
    <div className="bmi-calculator">
      <h1>BMI Calculator</h1>
      <Input
        label="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <Input
        label="Height (meters)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button className="bmi-calculate-btn" onClick={calculateBMI}>
        Calculate BMI
      </button>
      <button className="bmi-reset-btn" onClick={resetFields}>
        Reset
      </button>
      <Result bmi={bmi} classification={classification} />
    </div>
  );
};

export default Calculator;
