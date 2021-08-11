import React, { useState } from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../ui/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    function clickHandler() {
        setTitle("Updated");
        alert(title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
            <button onClick={clickHandler}>Click Me</button>
        </Card>
    );
}

export default ExpenseItem;
