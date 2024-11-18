import React from 'react';

const Result = ({ bmi, classification }) => {
  return (
    <div className="bmi-result">
      {bmi && (
        <div>
          <h2>Your BMI: {bmi.toFixed(2)}</h2>
          <p>Classification: {classification}</p>
        </div>
      )}
    </div>
  );
};

export default Result;
