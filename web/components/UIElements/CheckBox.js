import React from "react"

const CheckBox = (props) => {
  const { label, ...rest } = props
  
  return (
    <div className="checkbox-input">
      <input type='checkbox' id={rest.name} {...rest} />
      <label htmlFor={rest.name}> {label}</label>
    </div>
  )
}

export default CheckBox
