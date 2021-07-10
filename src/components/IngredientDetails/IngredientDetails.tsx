import React from "react";
import styles from "./IngredientDetails.module.css";
import close from '../../images/vector.png';
import meat from '../../images/meat01.png';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

const IngredientDetails = (props: any) => {
    React.useEffect(() => {
        document.addEventListener('keydown', props.handleEscKey)
        return () => {
            document.removeEventListener('keydown', props.handleEscKey)
        }
    }, [])
    return (
        <div style={props.state}>
            <div className={styles.modal} >
                <ModalOverlay onHandleClose={props.onHandleClose} state={props.state} />
                <button className={styles.modal__closeButton} onClick={props.onHandleClose}>
                    <img className={styles.modal__img} src={close} alt='close' />
                </button>
                <h2 className={styles.modal__header}>Наименование</h2>
                <img className={styles.modal__itemImg} src={meat} alt='' />
                <h3 className={styles.modal__itemName}>Биокотлета из марсианской магнолии</h3>
                <div className={styles.modal__structBlock}>
                    <span className={styles.modal__struct}>Калории,ккал 244,4</span>
                    <span className={styles.modal__struct}>Белки, г 12,2</span>
                    <span className={styles.modal__struct}>Жиры, г 17,2 </span>
                    <span className={styles.modal__struct}>Углеводы, г 10,2</span>
                </div>
            </div>
        </div>
    )
}


export default IngredientDetails;