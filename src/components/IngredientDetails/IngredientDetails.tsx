import React from "react";
import styles from "./IngredientDetails.module.css";
import meat from "../../images/meat01.png";

const IngredientDetails = () => {
  return (
    <div className = {styles.IngredientDetails__block}>
      <img className={styles.IngredientDetails__itemImg} src={meat} alt="" />
      <h3 className={styles.IngredientDetails__itemName}>
        Биокотлета из марсианской магнолии
      </h3>
      <div className={styles.IngredientDetails__structBlock}>
        <span className={styles.IngredientDetails__struct}>Калории,ккал 244,4</span>
        <span className={styles.IngredientDetails__struct}>Белки, г 12,2</span>
        <span className={styles.IngredientDetails__struct}>Жиры, г 17,2 </span>
        <span className={styles.IngredientDetails__struct}>Углеводы, г 10,2</span>
      </div>
    </div>
  );
};

export default IngredientDetails;
