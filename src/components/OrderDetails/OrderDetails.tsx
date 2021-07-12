import React from "react";
import styles from "./OrderDetails.module.css";
import accept from "../../images/done.png";

const OrderDetails = () => {
  return (
    <div className={styles.OrderDetails__block} >
      <div className={styles.OrderDetails__orderNumberBlock}>
        <p className="text text_type_digits-large ">034536</p>
      </div>
      <span className={styles.OrderDetails__orderIdent}>Идентификациор заказа</span>
      <img className={styles.OrderDetails__acceptImg} src={accept} alt="accept" />
      <div className={styles.OrderDetails__infoBlock}>
        <span className={styles.OrderDetails__orderInfo}>
          Ваш заказ начали готовить
        </span>
        <span className={styles.OrderDetails__orderInfo}>
          Дождитесь готовности на орбитальной станции
        </span>
      </div>
    </div>
  );
};

export default OrderDetails;
