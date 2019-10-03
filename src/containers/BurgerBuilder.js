import React, {useState} from 'react';
import Burger from "../components/Burger/Burger";
import Controls from "../components/Burger/Controls/Controls";
import TotalPrice from "../components/Burger/TotalPrice";

const INGREDIENT_PRICES = { salad: 0.5, bacon: 0.8, cheese: 0.5, meat: 1}


const BurgerBuilder = () => {

    const [ingredients, setIngredients] = useState({salad: 1, bacon: 0, cheese: 0, meat: 1});
    const [totalPrice, setTotalPrice] = useState({total: 1.5});

    const addIngredientHandler = (type) => {
        const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...ingredients};
        updatedIngredients[type] = updatedCount;
        setIngredients(updatedIngredients);
        const priceAddition = INGREDIENT_PRICES[type];
        setTotalPrice(totalPrice.total + priceAddition);
    }
    const removeIngredientHandler = (type) => {
        const oldCount = ingredients[type];

        if(oldCount === 0)  return;
        const updatedCount = oldCount - 1;
        const updatedIngredients = {...ingredients};
        updatedIngredients[type] = updatedCount;
        setIngredients(updatedIngredients);
        const priceSubtraction = INGREDIENT_PRICES[type];
        setTotalPrice(totalPrice.total - priceSubtraction);
    }

    const disabledInfo ={...ingredients};

    for (let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
        <div>
            <Burger ingredients={ingredients}/>
            <TotalPrice total={totalPrice.total}/>
            <Controls
                ingredientAdded={addIngredientHandler}
                ingredientRemoved={removeIngredientHandler}
                disabled={disabledInfo}
            />

        </div>
    );
};

export default BurgerBuilder;