import React from 'react';
import PropTypes from 'prop-types';
 import classes from './Checkout.module.css';

const Checkout = props => {
    return (
        <div>
            <button className={classes.OrderButton} disabled={!props.isSomethingOnCart} onClick={props.onClick}>Checkout</button>
        </div>
    );
};

Checkout.propTypes = {
    isSomethingOnCart: PropTypes.bool,
    onClick: PropTypes.func
};

export default Checkout;
