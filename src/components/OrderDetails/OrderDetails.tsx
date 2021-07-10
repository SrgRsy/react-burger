import React from "react";
import styles from "./OrderDetails.module.css";
import { } from "@ya.praktikum/react-developer-burger-ui-components";
import close from '../../images/vector.png';
import accept from '../../images/done.png';
import ModalOverlay from '../ModalOverlay/ModalOverlay';


const OrderDetails = (props: any) => {
    React.useEffect(() => {
        document.addEventListener('keydown', props.handleEscKey)
        return () => {
            document.removeEventListener('keydown', props.handleEscKey)
        }
    }, [])

    return (
        <div style={props.state}>
            <div className={styles.modal} >
                <ModalOverlay onHandleClose = {props.onHandleClose} state={props.state} />
                <button onClick={props.onHandleClose} className={styles.modal__closeButton} >
                    <img className={styles.modal__img} src={close} alt='close' />
                </button>
                <div className={styles.modal__orderNumberBlock}>
                    <p className="text text_type_digits-large ">034536</p>
                </div>
                <span className={styles.modal__orderIdent}>Идентификациор заказа</span>
                <img className={styles.modal__acceptImg} src={accept} alt='accept' />
                <div className={styles.modal__infoBlock}>
                    <span className={styles.modal__orderInfo}>Ваш заказ начали готовить</span>
                    <span className={styles.modal__orderInfo}>Дождитесь готовности на орбитальной станции</span>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails;