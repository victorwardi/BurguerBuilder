import React from 'react';
import PropTypes from 'prop-types';

import classes from './Control.module.css';

const Control = props => {
    return (
        <div className={classes.Control}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.More} onClick={props.add}>+</button>
            <button className={classes.Less} onClick={props.remove} disabled={props.disabled}>-</button>
        </div>
    );
};

Control.propTypes = {
    label: PropTypes.string,
    add: PropTypes.func,
    remove: PropTypes.func
};

export default Control;
