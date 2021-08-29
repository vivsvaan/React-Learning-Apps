import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counterSlice";

const Counter = () => {
    // useDispatch to dispatch events
    const dispatch = useDispatch();

    const counter = useSelector((state) => state.counter.counter);
    const showCounter = useSelector((state) => state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    const increaseHandler = () => {
        // dispatch(counterActions.increase({key1: value1, key2: value2}))
        // {type: SOME_UNIQUE_IDENTIFIER, key1: value1, key2: value2}

        dispatch(counterActions.increase(5));
        // {type: SOME_UNIQUE_IDENTIFIER, payload: 5}
    };

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
