import React from "react";
import styles from "./Modal.module.css";
import close from '../../images/vector.png';


const Modal = (props: any) => {
    return (
            <div className={styles.modal} >
                <button className={styles.modal__closeButton} >
                    <img className={styles.modal__img} src={close} alt='close' />
                </button>
                <h2 className={styles.modal__header}>Наименование</h2>
            </div>
    )
}

export default Modal;










