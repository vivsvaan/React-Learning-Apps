import { Fragment } from "react";
import MealsSummary from "../Meals/MealsSummary/MealsSummary";
import AvailableMeals from "../Meals/AvailableMeals/AvailableMeals";

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    );
};

export default Meals;
