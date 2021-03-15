import React from "react";

const Input = ({ label, error, ...rest }) => {
  return (
    <div className="Input">
      <label>{label}</label>
      <input {...rest} />
      {error && (
        <div>
          <span className="Input"> {error}</span>
        </div>
      )}
    </div>
  );
};
export default Input;
