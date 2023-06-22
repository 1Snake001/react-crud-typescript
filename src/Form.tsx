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

  // Text for error messages

  // error checker function
  function isFirstLetterCapitalize(value: string) {
    const arrayOffirstAndLastName = value.split(" ");
  let firstLetter  =  (name:string) => name.charAt(0) !== name.charAt(0).toUpperCase()
    const isValidInput = arrayOffirstAndLastName.some(
      firstLetter
    );

    return !isValidInput;
  }

  isFirstLetterCapitalize("John Doe");

  function isIncludeFirtAndLastName(value: string) {
    const arrayOffirstAndLastName = value.split(" ");
    return arrayOffirstAndLastName.length > 1;
  };

  isIncludeFirtAndLastName("John Doe");

  // Object with functions wich have keys wich call to the error checker functions

  function validator(value: string) {
    if (value === "") {
      setIsValid(false);
      return;
    }
    setIsValid(true);
  }

  function onBlurHandler(event: React.FocusEvent<HTMLInputElement>) {
    const value = event.target.value;
    validator(value);
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

    if (isValid) {
    }
  }
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
      {isValid && (
        <ul>
          {Object.values(inputValues).map((value, i) => (
            <li key={i}>{value}</li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Form;
