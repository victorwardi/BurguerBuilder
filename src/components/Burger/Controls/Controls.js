import React from 'react';
import PropTypes from 'prop-types';

import classes from './Controls.module.css'
import Control from "./Control/Control";
import Checkout from "./Checkout/Checkout";

const Controls = props => {

    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'}
    ];
    return (
        <>
            <div className={classes.Controls}>
                {controls.map(control => (
                    <Control key={control.label}
                             label={control.label}
                             add={() => props.ingredientAdded(control.type)}
                             remove={() => props.ingredientRemoved(control.type)}
                             disabled={props.disabled[control.type]}/>
                ))}
            </div>
            <Checkout isSomethingOnCart={props.checkout} onClick={props.checkoutHandler}/>
        </>
    );
};

Controls.propTypes = {
    ingredientAdded: PropTypes.func,
    ingredientRemoved: PropTypes.func,
    checkout: PropTypes.bool,
    checkoutHandler: PropTypes.func
};

export default Controls;
