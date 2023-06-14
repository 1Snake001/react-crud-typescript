import React from "react";

interface InputProp {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}
const Input = ({ name, onChange } : InputProp) => {
  

  return (
    <div>
      <label htmlFor=""></label>
      <input name={name} onChange={onChange} type="text" />
    </div>
  );
};

export default Input;
