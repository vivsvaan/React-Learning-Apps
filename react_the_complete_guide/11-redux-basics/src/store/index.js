import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
    /**
     * WE SHOULD NEVER MUTATE THE STATE
     */
    // state.counter++;
    // return state;

    if (action.type === "INCREMENT") {
        /**
         * Objects which are returned in reducer
         * WILL NOT BE MERGED WITH THE EXISTING STATES
         * THEY WILL OVERWRITE THE EXISTING STATES
         */
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        };
    }
    if (action.type === "DECREMENT") {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        };
    }
    if (action.type === "INCREASE") {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        };
    }
    if (action.type === "TOGGLE") {
        return {
            counter: state.counter,
            showCounter: !state.showCounter,
        };
    }
    return state;
};

/**
 * we create a single store only
 * and pass our single reducer function
 */
const store = createStore(counterReducer);

export default store;
