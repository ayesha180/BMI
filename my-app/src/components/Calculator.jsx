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
      const heightInMeters = height / 100;
      const calculatedBMI = weight / (heightInMeters * heightInMeters);
      setBmi(calculatedBMI);
    }
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
        label="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button className="bmi-calculate-btn" onClick={calculateBMI}>
        Calculate BMI
      </button>
      <Result bmi={bmi} />
    </div>
  );
};

export default Calculator;
