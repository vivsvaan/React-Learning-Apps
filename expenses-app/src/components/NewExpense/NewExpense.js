import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        console.log("in app.js");
        console.log(expenseData);

        props.onAddExpense(expenseData);
    }

    function toggleShowForm() {
        setShowForm(!showForm);
    }

    function cancelHandler() {
        toggleShowForm();
    }

    return (
        <div className="new-expense">
            {showForm ? (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler} />
            ) : (
                <button onClick={toggleShowForm}>Add New Expense</button>
            )}
        </div>
    );
};

export default NewExpense;
