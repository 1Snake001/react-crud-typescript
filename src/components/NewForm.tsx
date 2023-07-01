import React from 'react'
import Form from './Form'
import { FormProps } from './Form'

const NewForm:React.FC<FormProps> = ({getUserData, inputValues, setInputValues}) => {
  return (
    <>
    <Form getUserData={getUserData} inputValues={inputValues} setInputValues={setInputValues} type='new'/>
    </>
  )
}

export default NewForm