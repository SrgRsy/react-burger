import React from "react";
import ReactDOM from "react-dom";
import styles from './ModalOverlay.module.css';
import PropTypes from "prop-types";
const rootContainer = document.getElementById('root')!;

const ModalOverlay = (props) => {
    return ReactDOM.createPortal(
        <div onClick = {props.onHandleClose} style = {props.state}>
            <div className={styles.overlay}>
            </div>
        </div>, rootContainer)
}

ModalOverlay.propTypes = {
    onHandleClose: PropTypes.func,
    state: PropTypes.object
}

export default ModalOverlay;
