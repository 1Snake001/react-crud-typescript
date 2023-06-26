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

  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitButtonHovered, setIsSubmitButtonHovered] = useState(false);
  // Text for error messages

  // error checker function
  function isFirstLetterCapitalize(value: string) {
    const arrayOffirstAndLastName = value.split(" ");
    let firstLetter = (name: string) =>
      name.charAt(0) !== name.charAt(0).toUpperCase();
    const isValidInput = arrayOffirstAndLastName.some(firstLetter);

    let isNotSpace = (name: string) => name === '';

    const isEmpty = arrayOffirstAndLastName.some(isNotSpace);

    return !isValidInput &&  !isEmpty;
  }

  function isIncludeFirstAndLastName(value: string) {
    const arrayOffirstAndLastName = value.split(" ");
    return arrayOffirstAndLastName.length > 1;
  }

  function lessThanTwentyFive(value: string) {
    return value.length < 25;
  }

  function isNotEmpty(value: string) {
    return value !== "";
  }

  function validateEmail(email: string) {
    const emailRegex =
      /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
  }

  function isTheFirstPostalCode(value: string) {
    const arrayOffAddress = value.split(" ");
    let firstValue = arrayOffAddress[0];

    return !isNaN(Number(firstValue)) && firstValue.length === 4;
  }

  // Object wich have keys wich call to the error checker functions

  const textForErrorMessages = {
    emptyValueChecker: "Mező kitöltése kötelező!",
    capitalizeChecker: "Név csak nagy kezdőbetüvel adható meg!",
    firstAndLastNameChecker: "Teljes név megadása kötelező!",
    lessThanTwentyFive: "Név nem tartalmazhat 24db karakter felletti számot!",
    emailChecker: "Érvénytelen email!",
    postalCodeChecker: "Írányitó szám kitöltése kötelező!",
  };

  const validators = {
    name: {
      emptyValueChecker: isNotEmpty,
      capitalizeChecker: isFirstLetterCapitalize,
      firstAndLastNameChecker: isIncludeFirstAndLastName,
      lessThanTwentyFiveChecker: lessThanTwentyFive,
    },
    email: {
      emptyValueChecker: isNotEmpty,
      emailChecker: validateEmail,
    },
    address: {
      emptyValueChecker: isNotEmpty,
      postalCodeChecker: isTheFirstPostalCode,
    },
  };

  function validator(value: string, name: keyof typeof validators) {
    const validator = validators[name] as {
      [key: string]: (value: string) => boolean;
    };

    for (let checker in validator) {
      if (!validator[checker](value)) {
        setIsValid(false);
        setErrorMessages((prev) => {
          return {
            ...prev,
            [name]:
              textForErrorMessages[
                checker as keyof typeof textForErrorMessages
              ],
          };
        });
        return;
      } else {
        setIsValid(true);
        setErrorMessages((prev) => {
          return { ...prev, [name]: "" };
        });
      }
    }
  }

  function onBlurHandler(event: React.FocusEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    // Check if submit button is hovered, and if so, skip the validator
    if (isSubmitButtonHovered) {
      return;
    }

    validator(value, name as keyof typeof validators);
  }

  function formValidator() {
    Object.entries(inputValues).map((input) =>
      validator(input[1], input[0] as keyof typeof validators)
    );
  }

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    formValidator();
    setIsFormValid(false);

    if (isValid) {
      console.log(isValid);
      setIsFormValid(true);
    }
  }

  function handleSubmitButtonHover() {
    setIsSubmitButtonHovered(true);
  }

  function handleSubmitButtonLeave() {
    setIsSubmitButtonHovered(false);
  }

  let isHasError = !Object.values(errorMessages).some((value) => value !== "");

  return (
    <main className="container">
      <form onSubmit={submitHandler} action="#" noValidate>
        <Input
          name="name"
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          errorMessage={errorMessages.name}
        />
        <Input
          name="email"
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          errorMessage={errorMessages.email}
        />
        <Input
          name="address"
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          errorMessage={errorMessages.address}
        />

        <button
          className="btn btn-primary"
          onMouseEnter={handleSubmitButtonHover}
          onMouseLeave={handleSubmitButtonLeave}
        >
          Submit
        </button>
      </form>

      {isHasError && isFormValid && (
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
