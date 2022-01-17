import React, { Fragment, useEffect, useState } from "react"
import './modal.scss'

const Modal = (props) => {
  const { title, isOpen = false, onClose, children } = props
  const [isVisible, setIsVisible] = useState(isOpen)

  useEffect(() => {
    setIsVisible(isOpen)
  }, [isOpen])

  const closeModal = () => {
    setIsVisible(false)
    if (onClose) {
      onClose()
    }
  }

  if (!isVisible) return <Fragment />

  return (
    <div className="modal-container">
      <div className="modal-inner">
        <div className="modal-header">
          <button className="modal-closeButton" onClick={closeModal}>&times;</button>
          <h4 className="modal-title">{title}</h4>
        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
