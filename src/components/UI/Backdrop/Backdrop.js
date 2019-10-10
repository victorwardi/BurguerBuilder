import React from 'react';
import PropTypes from 'prop-types';
import classes from './Backdrop.module.css';

const Backdrop = (props) => {
    return props.show ? <div onClick={props.clicked} className={classes.Backdrop}></div> : null;
};

Backdrop.propTypes = {
    show: PropTypes.bool.isRequired,
    clicked: PropTypes.func
}

export default Backdrop;
