import { configureStore } from "@reduxjs/toolkit";

// exporting whole slice from counter and auth
// import counterSlice from "./counterSlice";
// import authSlice from "./authSlice";

// exporting only slice reducers from counter and auth
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

// passing reducer for single slice
// const store = createStore(counterSlice.reducer);

// passing reducers for all slices
const store = configureStore({
    /**
     * Single Slice can be added as
     * reducer: counterSlice.reducer
     *
     * and can be accessed as
     * state.counter, state.showCounter
     */

    /**
     * Multiple Slices can be added as
     * reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
     * reducer: { counter: counterReducer, auth: authReducer },
     *
     * and can be accessed as
     * state.counter.counter, state.counter.showCounter
     * state.auth.isAuthenticated
     */

    reducer: { counter: counterReducer, auth: authReducer },
});

// exporting actions from their slices file now, instead of here

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;
