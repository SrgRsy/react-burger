import React from "react";
import styles from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const Modal = (props) => {
  React.useEffect(() => {
    const handleEscKey = (e) => {
      if (e.keyCode === 27 || e.keyCode === 13) {
        props.onHandleClose();
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
    
  }, []);
  return (
    <div onClick={(e) => e.stopPropagation()} style={props.state}>
      <div className={styles.modal}>
        <h2 className={styles.modal__header}>{props.modalName}</h2>
        <button
          onClick={props.onHandleClose}
          className={styles.modal__closeButton}
        >
          <CloseIcon type="primary" />
        </button>
        {props.children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalName: PropTypes.string,
  handleEscKey: PropTypes.func,
  onHandleClose: PropTypes.func,
  elementType: PropTypes.string,
  state: PropTypes.object,
};

export default Modal;
