import React from "react";
import ReactDOM from "react-dom";
import styles from './ModalOverlay.module.css'
const rootContainer = document.getElementById('root')!;

const ModalOverlay = (props: any) => {
    return ReactDOM.createPortal(
        <div onClick = {props.onHandleClose} style = {props.state}>
            <div className={styles.overlay}>
            </div>
        </div>, rootContainer)
}


export default ModalOverlay;
