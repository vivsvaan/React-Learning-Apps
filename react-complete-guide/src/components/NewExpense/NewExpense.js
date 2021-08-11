import React from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        console.log("in app.js");
        console.log(expenseData);

        // props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;
