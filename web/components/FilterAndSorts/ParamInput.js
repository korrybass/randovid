import React, { Fragment, useEffect } from "react"
import { useSearchParams, useLocation } from 'react-router-dom';

const ParamInput = (props) => {
  const { search } = useLocation()
  const [searchParams] = useSearchParams({})
  const { inputId, children, inputParam } = props

  useEffect(() => {
    const categoryParam = searchParams.get(inputParam)
    const elem = document.getElementById(inputId)
    
    if (elem) {
      if (categoryParam && categoryParam.includes(elem.value)) {
        elem.checked = true
      }
      else {
        elem.checked = false
      }
    }

  }, [search])

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default ParamInput
