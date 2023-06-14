import React, { useState } from "react";
import Input from "./Input";




const Form = () => {


 interface InputValue {
    name:string;
    email:string;
    address:string;
};
     
const [inputValues, setInputValues] = useState< InputValue >({
    name:'',
    email:'',
    address:''
});

function onChangeHandler(event:React.ChangeEvent<HTMLInputElement>){
const {name, value } = event.target;
setInputValues({...inputValues,[name]:value})
}; 

  return (
    <main className="container">
      <form action="#">
        <Input name ="name" onChange={onChangeHandler}/>
        <h1>{inputValues.name}</h1>
      </form>
    </main>
  );
};

export default Form;
