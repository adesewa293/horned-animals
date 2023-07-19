import React from "react";
import "./modal.css";

function Modal(props) {
  const { onClose } = props;
  return (
    <div className="modal-overlay open">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div>
          This is a modal
        </div>
      </div>
    </div>
  );
}

export default Modal;
