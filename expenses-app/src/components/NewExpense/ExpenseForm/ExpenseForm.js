import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // managing states separately
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    // combined state
    // const [userInput, setUserInput] = useState({
    //     title: "",
    //     amount: "",
    //     date: "",
    // });

    function titleChangeHandler(event) {
        // for separate state
        setTitle(event.target.value);

        // for combined state
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value,
        // });

        // another better approach
        // setUserInput((prevState) => {
        //     return { ...prevState, title: event.target.value };prevState
        // });
    }
    function amountChangeHandler(event) {
        // for separate state
        setAmount(event.target.value);

        // for combined state
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value,
        // });

        // another better approach
        // setUserInput((prevState) => {
        //     return { ...prevState, amount: event.target.value };
        // });
    }
    function dateChangeHandler(event) {
        // for separate state
        setDate(event.target.value);

        // for combined state
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value,
        // });

        // another better approach
        // setUserInput((prevState) => {
        //     return { ...prevState, date: event.target.value };
        // });
    }

    function submitHandler(event) {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date),
        };
        let showForm = false;
        props.onSaveExpenseData(expenseData);

        setTitle("");
        setAmount("");
        setDate("");
    }

    function cancel() {
        props.onCancel();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                        value={amount}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2020-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                        value={date}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={cancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
