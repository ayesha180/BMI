import React, { useState } from 'react';
import Input from './input';
import Result from './result';
import '../App.css';

const Calculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height * 0.0254; // Convert height from inches to meters
      const calculatedBMI = weight / (heightInMeters * heightInMeters);
      setBmi(calculatedBMI);
    }
  };

  const resetFields = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
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
        label="Height (inches)"
        value={height}
        onChange={(e) => {
          if (e.target.value <= 120) {
            setHeight(e.target.value); // Set height if it's less than or equal to 120
          }
        }}
      />
      <button className="bmi-calculate-btn" onClick={calculateBMI}>
        Calculate BMI
      </button>
      <button className="bmi-reset-btn" onClick={resetFields}>
        Reset
      </button>
      <Result bmi={bmi} />
    </div>
  );
};

export default Calculator;
