import React from "react"

const FormElement = ({input, meta, component, label}) => {
  const Element = component
  console.log({input})
  return (
    <div className="">
      <Element {...input} label={label} />
    </div>
  )
}

export default FormElement
