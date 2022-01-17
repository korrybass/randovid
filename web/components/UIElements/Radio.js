import React, { useEffect } from "react"

const RadioInput = (props) => {
  const {label, onMount, ...rest} = props

  useEffect(() => {
    if(onMount){
      onMount(document.getElementById(rest.id))
    }
  }, [])

  return (
    <div className="radio-input">
      <input type='radio' id={rest.id} {...rest} />
      <label htmlFor={rest.id}> {label}</label>
    </div>
  )
}

export default RadioInput
