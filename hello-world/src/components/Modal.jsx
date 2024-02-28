import React from 'react'
import ReactDOM from 'react-dom'
const Modal = (props) => {
  return ReactDOM.createPortal(
    (
    <div>
      {props.children}
    </div>), document.getElementById('modal-root'))
}

export default Modal
