import React from 'react';
import classes from './Button.module.css'
import PropTypes from "prop-types";

const Button = (props) => {
    return (
        <button className={[classes.Button, classes[props.btnType]].join(' ')}
                onClick={props.clicked}>{props.children}</button>
    );
};

Button.propTypes = {
    btnType: PropTypes.string,
    clicked: PropTypes.func
};

export default Button;
