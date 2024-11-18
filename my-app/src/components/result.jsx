import React from 'react';
import '../App.css';

const Result = ({ bmi }) => {
  if (!bmi) return null;

  let message;
  if (bmi < 18.5) message = 'Underweight';
  else if (bmi < 24.9) message = 'Normal weight';
  else if (bmi < 29.9) message = 'Overweight';
  else message = 'Obesity';

  return (
    <div className="bmi-result">
      <span>Your BMI is: {bmi.toFixed(1)} ({message})</span>
    </div>
  );
};

export default Result;