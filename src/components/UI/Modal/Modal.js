import React from 'react';
import PropTypes from "prop-types";
import classes from './Modal.module.css'
import Backdrop from "../Backdrop/Backdrop";


const Modal = props => {

    const showEffect = props.show ? 'translateY(0)' : 'translateY(-100vh)';

    return (
        <div>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div className={classes.Modal} style={{transform: showEffect}}>
                {props.children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    show: PropTypes.bool,
    modalClosed : PropTypes.func
}

export default Modal;
