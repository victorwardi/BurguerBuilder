import React from 'react';
import PropTypes from "prop-types";

import classes from './OrderSummary.module.css';
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {

    const ingredientsSummary =  Object.keys(props.ingredients).map(
        i => {
            return (
                <li key={i}><span style={{textTransform: 'capitalize'}}>{i}</span>: {props.ingredients[i]}</li>
            );

        }
    );

    return (
        <div className={classes.OrderSummary}>
            <h3>YOUR ORDER</h3>
            <p>This is how your burger will be:</p>
            <ul>
               {ingredientsSummary}
            </ul>
            <p>TOTAL: ${props.totalOrdered.toFixed(2)}</p>
            <p>Do you want to add some more ingredients or check out?</p>
            <Button btnType="Danger" clicked={props.cancelCheckout}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continueCheckout}>CONTINUE</Button>
        </div>
    );
};

OrderSummary.propTypes = {
    ingredients: PropTypes.object,
    totalOrdered: PropTypes.number,
    cancelCheckout: PropTypes.func,
    continueCheckout: PropTypes.func
};


export default OrderSummary;
