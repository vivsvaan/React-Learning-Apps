import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

/**
 * We can create slices of our global state
 * in different files
 * each slice will hold different data
 * Ex - authenticationSlice and counterSlice
 */

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,

    // all the reducers this slice needs
    reducers: {
        increment(state) {
            /**
             * Redux toolkit internally uses a package,
             * which detects code like this,
             * it will clone the existing state, create a new state object
             * keep all states which we are not editing
             * and override the state which we are editing
             * in a immutable way
             */
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

// exporting whole Slice
// export default counterSlice;

// exporting only reducer of the slice
export default counterSlice.reducer;

// exporting slice actions
export const counterActions = counterSlice.actions;
