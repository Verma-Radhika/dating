import react from "react";
import "./imageModel.css";

export const ImageModel = ({ onOpen, children }) => {
  return (
    <>
      <div onClick={onOpen} className="holder">
        <img src="//placekitten.com/400/300" alt="" />
      </div>
    </>
  );
};

export const ModalContent = ({ onClose, children }) => {
  return (
    <div className="modal">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <div className="modalContent">{children}</div>
    </div>
  );
};
