import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
    // useDispatch to dispatch actions
    const dispatch = useDispatch();

    // useSelector to use particular state from whole store
    // useStore to use whole store

    const counter = useSelector((state) => state.counter);
    const showCounter = useSelector((state) => state.showCounter);

    const incrementHandler = () => {
        dispatch({ type: "INCREMENT" });
    };

    const decrementHandler = () => {
        dispatch({ type: "DECREMENT" });
    };

    const increaseHandler = () => {
        dispatch({ type: "INCREASE", amount: 5 });
    };

    const toggleCounterHandler = () => {
        dispatch({ type: "TOGGLE" });
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

// // Class Based Approach

// class Counter extends React.Component {
//     // constructor() {
//     //     // manage states
//     // }

//     incrementHandler() {
//         this.props.increment();
//     }

//     decrementHandler() {
//         this.props.decrement();
//     }

//     toggleCounterHandler() {}

//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>
//                         Increment
//                     </button>
//                     <button onClick={this.decrementHandler.bind(this)}>
//                         Decrement
//                     </button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler}>
//                     Toggle Counter
//                 </button>
//             </main>
//         );
//     }
// }

// /**
//  * Function that maps redux state to component props,
//  */
// const mapStateToProps = (state) => {
//     // keys are prop names which can be used in componnent
//     // props.counter
//     return {
//         counter: state.counter,
//     };
// };

// /**
//  * Function that maps dispatch funcitons to component props,
//  */
// const mapDispatchToProps = (dispatch) => {
//     // keys are prop names which can be used in componnent
//     // props.increment
//     return {
//         increment: () => dispatch({ type: "INCREMENT" }),
//         decrement: () => dispatch({ type: "DECREMENT" }),
//     };
// };

// /**
//  * connect takes in 2 arguments (both arguments are functions, defined above)
//  *
//  * connect will return a new function as a value
//  * which we execute again, and pass our component
//  * to that returned function
//  * connect is a Higher-Order Component
//  */
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
