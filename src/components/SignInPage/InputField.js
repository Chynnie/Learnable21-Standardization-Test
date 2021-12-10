import React from 'react'

const InputField = ({type, value, placeholder, onChange, label, className}) => {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      label={label}
      className={className}
    />
  )
}

export default InputField 