import React from "react";
import "./modal.css";

function Modal(props) {
  const { onClose, item } = props;

  return (
    <div className="modal-overlay open">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div>
          <div>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <img src={item.image_url} alt={'beast-img'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
