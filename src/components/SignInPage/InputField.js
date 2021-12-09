import React from 'react'

const InputField = ({type, value, placeholder, onChange, label}) => {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      label={label}
    />
  )
}

export default InputField 