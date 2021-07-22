import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Ingredient.module.css";
import PropTypes from "prop-types";

const Ingredient = (props) => {
  function handleClick() {
    props.onHandleModalOpen(props.item);
  }
  return (
    <div onClick={handleClick} className={styles.ingredient__item}>
      <img
        src={props.image}
        className={styles.ingredient__itemImage}
        alt="ingredient"
      />
      <h3 className={styles.ingredient__itemCount}>
        <CurrencyIcon type="secondary" />
        <span style={{ margin: "0px 4px" }}>{props.count}</span>
      </h3>
      <p className={styles.ingredient__itemName}>{props.name}</p>
    </div>
  );
};

Ingredient.propTypes = {
  onHandleModalOpen: PropTypes.func.isRequired,
  image: PropTypes.any,
  count: PropTypes.number,
  name: PropTypes.string,
};

export default Ingredient;
