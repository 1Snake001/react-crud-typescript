import React, { useState } from "react";
import Input from "./Input";

const Form = () => {
  interface InputValue {
    name: string;
    email: string;
    address: string;
  }

  const [inputValues, setInputValues] = useState<InputValue>({
    name: "",
    email: "",
    address: "",
  });

  const [isValid, setIsValid] = useState(false);

  function validator(value: string) {
    if (value === "") {
      setIsValid(false);
      return;
    }
    setIsValid(true);
  }

  function onBlurHandler(event:React.FocusEvent<HTMLInputElement>) {
    const value = event.target.value;
    /* validator(value); */
  }
  
  function formValidator() {
    Object.values(inputValues).map((input) => validator(input));
  }
  
  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  }
  
  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    formValidator();
    console.log(isValid);
    if(isValid){
      console.log(inputValues);
    }
  };
  return (
    <main className="container">
      <form onSubmit={submitHandler} action="#" noValidate>
        <Input name="name" onBlur={onBlurHandler} onChange={onChangeHandler} />
        <Input name="email" onBlur={onBlurHandler} onChange={onChangeHandler} />
        <Input
          name="address"
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
        />

        <button className="btn btn-primary">Submit</button>
      </form>
      {isValid && <ul>{Object.values(inputValues).map((value, i) =>(
        <li key={i}>{value}</li>
      ))}</ul>}
    </main>
  );
};

export default Form;
