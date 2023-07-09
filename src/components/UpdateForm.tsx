import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "./Form";
import { FormProps } from "../types/FormTypes";
import UserServices from "../services/services";

const UpdateForm: React.FC<FormProps> = ({
  getUserData,
  inputValues,
  setInputValues,
}) => {
  const [user, setUser] = useState({})
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      const userService = new UserServices();

    userService
        .getUserById(id)
        .then((user) => {
         
          setUser(user);
        })
        .catch((error) => {
   
          console.error(error);
        });
    }
  }, [id]);

  return (
    <>
      <Form
        getUserData={getUserData}
        inputValues={inputValues}
        setInputValues={setInputValues}
        type="edit"
        id={id}
        user={user}
      />
    </>
  );
};

export default UpdateForm;
