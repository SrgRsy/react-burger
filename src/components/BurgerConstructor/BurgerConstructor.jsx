import React from "react";
import styles from "./BurgerConstructor.module.css";
import Modal from "../Modal/Modal";
import BurgerConstructorElement from "../BurgerConstructorElement/BurgerConstructorElement";
import PropTypes from "prop-types";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = (props) => {
  const [state, setState] = React.useState({ display: "none" });
  const [elementType, setElementType] = React.useState("order");

  const onHandleModalOpen = () => {
    setState({ display: "block" });
  };

  const onHandleClose = () => {
    setState({ display: "none" });
  };

  const handleEscKey = (e) => {
    if (e.keyCode === 27 || e.keyCode === 13) {
      setState({ display: "none" });
    }
  };

  return (
    <section className={styles.BurgerConstructor__section}>
      <Modal
        elementType={elementType}
        state={state}
        onHandleClose={onHandleClose}
        handleEscKey={handleEscKey}
      />
      <BurgerConstructorElement data={props.data} />
      <div className={styles.BurgerConstructor__botBlock}>
        <p className={styles.BurgerConstructor__count}>
          <CurrencyIcon type="primary" /> {props.count}{" "}
        </p>
        <Button onClick={onHandleModalOpen} type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      proteins: PropTypes.number,
      fat: PropTypes.number,
      carbohydrates: PropTypes.number,
      calories: PropTypes.number,
      price: PropTypes.number.isRequired,
      image: PropTypes.string,
      image_mobile: PropTypes.string,
      image_large: PropTypes.string,
    })
  ).isRequired,
  count: PropTypes.string,
  state: PropTypes.object,
  modalName: PropTypes.string,
};

export default BurgerConstructor;