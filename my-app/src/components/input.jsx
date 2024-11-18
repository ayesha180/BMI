import React from 'react';
import '../App.css';

const Input = ({ label, value, onChange }) => (
  <div className="bmi-input-container">
    <label className="bmi-input-label">{label}</label>
    <input
      type="number"
      className="bmi-input-field"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Input;
