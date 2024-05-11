import React from 'react'
import * as Yup from 'yup';

const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const RegestrationValidation = Yup.object({
  
  fullName: Yup.string()
  .max(15, 'Must be 15 characters or less')
  .min(5, "minimum 5 char ditay hobay")
  .required('please enter your name'),

  email: Yup.string()
  .email('vai format thik koro')
  .matches(emailregex, 'regex check korlam')
  .required('please enter your email'),
  password: Yup.string()
    .max(10, 'Must be 15 characters or less')
    .min(5, "minimum 5 char ditay hobay")
    .required('please enter your password'),

})

export default RegestrationValidation
