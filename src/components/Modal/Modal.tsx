import React from "react";
import styles from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

const Modal = (props) => {
  React.useEffect(() => {
    document.addEventListener("keydown", props.handleEscKey);
    return () => {
      document.removeEventListener("keydown", props.handleEscKey);
    };
  }, [props.handleEscKey]);
  return (
    <div style={props.state}>
      <ModalOverlay onHandleClose={props.onHandleClose} state={props.state} />
      <div className={styles.modal}>
        <h2 className={styles.modal__header}>{props.modalName}</h2>
        <button
          onClick={props.onHandleClose}
          className={styles.modal__closeButton}
        >
          <CloseIcon type="primary" />
        </button>
        {props.elementType === "order" ? (
          <OrderDetails />
        ) : props.elementType === "ingredient" ? (
          <IngredientDetails />
        ) : null}
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
