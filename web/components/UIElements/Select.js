import React from "react"

const generateOptions = (options) => {
  return options.map((option, idx) => {
    return (
      <option key={`category-option-${idx}`} value={option}>{option}</option>
    )
  })
}

const Select = (props) => {
  const { label, options, ...rest } = props
  const id = rest.id || rest.name
  return (
    <div className="form-input">
      <select id={id} {...rest}>
        <option value=''>Choose One</option>
        {generateOptions(options)}
      </select>
    </div>
  )
}

export default Select
