import React, {useState} from 'react';
import Burger from "../components/Burger/Burger";
import Controls from "../components/Burger/Controls/Controls";
import TotalPrice from "../components/Burger/TotalPrice/TotalPrice";
import Modal from "../components/UI/Modal/Modal";
import OrderSummary from "../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = { salad: 0.5, bacon: 0.8, cheese: 0.5, meat: 1}

const BurgerBuilder = () => {

    const [ingredients, setIngredients] = useState({salad: 0, bacon: 0, cheese: 0, meat: 0});
    const [totalPrice, setTotalPrice] = useState(0);
    const [modal, showModal] = useState(false);

    const addIngredientHandler = (type) => {
        const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...ingredients};
        updatedIngredients[type] = updatedCount;
        setIngredients(updatedIngredients);
        const priceAddition = INGREDIENT_PRICES[type];
        const newTotal = totalPrice + priceAddition
        setTotalPrice(newTotal);
    }

    const removeIngredientHandler = (type) => {
        const oldCount = ingredients[type];

        if(oldCount === 0)  return;
        const updatedCount = oldCount - 1;
        const updatedIngredients = {...ingredients};
        updatedIngredients[type] = updatedCount;
        setIngredients(updatedIngredients);
        const priceSubtraction = INGREDIENT_PRICES[type];
        const newTotal = totalPrice - priceSubtraction
        setTotalPrice(newTotal);
    }

    const disabledInfo ={...ingredients};

    for (let key in disabledInfo){

        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    const checkoutHandler = () => {
        showModal(!modal);
    }

    const cancelCheckoutHandler = () => {
        showModal(false);
    }

    const continueCheckoutHandler = () => {
        alert("You are going to exit.");
    }

    return (
        <div>
            <Modal show={modal} modalClosed={cancelCheckoutHandler}>
                <OrderSummary
                    ingredients={ingredients}
                    cancelCheckout={cancelCheckoutHandler}
                    continueCheckout={continueCheckoutHandler}
                    totalOrdered={totalPrice}
                />
            </Modal>
            <Burger ingredients={ingredients}/>
            <TotalPrice total={totalPrice}/>
            <Controls
                ingredientAdded={addIngredientHandler}
                ingredientRemoved={removeIngredientHandler}
                disabled={disabledInfo}
                checkout={totalPrice > 0}
                checkoutHandler={checkoutHandler}
            />

        </div>
    );
};

export default BurgerBuilder;