import React from "react";

interface InputProp {
  name: string;
  errorMessage:string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue?: string;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}
const Input = ({ name, errorMessage, onChange, onBlur, inputValue} : InputProp) => {


  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input id={name} name={name} value={inputValue} onBlur={onBlur} onChange={onChange} type="text" className={`form-control ${errorMessage ? "border border-danger" : ''}`}/>
      <div className="text-danger">{errorMessage}</div>
    </div>
  );
};

export default Input;