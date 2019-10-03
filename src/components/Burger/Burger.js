import React from 'react';
import PropTypes from 'prop-types';
import classes from './Burger.module.css';

import Ingredient from "./Ingredient/Ingredient";
const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(iKey =>{
            return [...Array(props.ingredients[iKey])].map((_, i) =>{
                return <Ingredient key={iKey+i} type={iKey}/>
            })
        }).reduce((arr, el)=> {
            return arr.concat(el);
        }, []);

 if(transformedIngredients.length === 0){
     transformedIngredients =  <p>Please add some ingredients!</p>
 }
    return (
        <div className={classes.Burger}>
            <Ingredient type={"bread-top"}/>
            {transformedIngredients}
            <Ingredient type={"bread-bottom"}/>
        </div>
    );
};

Ingredient.propTypes = {
    ingredients: PropTypes.array
};

export default Burger;