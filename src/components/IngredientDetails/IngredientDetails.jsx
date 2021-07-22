import React from "react";
import styles from "./IngredientDetails.module.css";
import PropTypes from 'prop-types';

const IngredientDetails = (props) => {
  return (
    <div className = {styles.IngredientDetails__block}>
      <img className={styles.IngredientDetails__itemImg} src={props.image} alt="" />
      <h3 className={styles.IngredientDetails__itemName}>
        {props.name}
      </h3>
      <div className={styles.IngredientDetails__structBlock}>
        <span className={styles.IngredientDetails__struct}>Калории,ккал {props.calories} </span>
        <span className={styles.IngredientDetails__struct}>Белки,г {props.proteins} </span>
        <span className={styles.IngredientDetails__struct}>Жиры,г {props.fat} </span>
        <span className={styles.IngredientDetails__struct}>Углеводы,г {props.carbohydrates} </span>
      </div>
    </div>
  );
};


IngredientDetails.propTypes = {

}


export default IngredientDetails;
