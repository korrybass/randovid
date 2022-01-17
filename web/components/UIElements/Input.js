import React from "react"

const Input = (props) => {
  const { label, ...rest } = props
  const id = rest.id || rest.name
  
  return (
    <div className="form-input">
      <input id={id} {...rest} />
      <label htmlFor={id}> {label}</label>
    </div>
  )
}

export default Input
