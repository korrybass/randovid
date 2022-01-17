import React from "react";

const RFFormElement = ({ input, meta, ...props }) => {
  const { error, submitFailed, valid } = meta
  const { element: Element, children: ChildrenElement, placeholder, title, options } = props
  const composedProps = { ...input, placeholder }
  const InputToRender = Element || ChildrenElement

  if(options){
    composedProps.options = options
  }

  return (
    <div>
      <label>{title}</label>
      <InputToRender {...composedProps} />
      {submitFailed && !valid &&
        <div className="form-error">
          <p>{error}</p>
        </div>
      }
    </div>
  )
}

export default RFFormElement