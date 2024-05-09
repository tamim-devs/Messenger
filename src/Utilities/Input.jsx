import { TextField } from '@mui/material'
import React from 'react'

const Input = ({variant, placeholder, styleing, id, name, type, value, onChange}) => {
  return (
    <TextField fullWidth name={name} type={type} className={styleing} id={id} label={placeholder} variant={variant} onChange={onChange} vale={value} />  )
    
}

export default Input