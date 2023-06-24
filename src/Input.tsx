import React from "react";

interface InputProp {
  name: string;
  errorMessage:string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue?: string;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}
const Input = ({ name, errorMessage, onChange, onBlur} : InputProp) => {


  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input id={name} name={name} onBlur={onBlur} onChange={onChange} type="text" className="form-control"/>
      <div>{errorMessage}</div>
    </div>
  );
};

export default Input;