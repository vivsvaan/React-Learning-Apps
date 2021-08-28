import { useReducer } from "react";

const initialInputState = {
    value: "",
    isTouched: false,
};

const inputStateReducer = (state, action) => {
    if (action.type === "INPUT") {
        return { value: action.value, isTouched: state.isTouched };
    }
    if (action.type === "BLUR") {
        return { value: state.value, isTouched: true };
    }
    if (action.type === "RESET") {
        return {
            value: "",
            isTouched: false,
        };
    }
    return;
};

const useInput = (validateValue) => {
    const [inputState, inputDispatch] = useReducer(
        inputStateReducer,
        initialInputState
    );

    // const [enteredValue, setEnteredValue] = useState("");
    // const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        inputDispatch({ type: "INPUT", value: event.target.value });
        // setEnteredValue(event.target.value);
    };

    const inputBlurHandler = (event) => {
        inputDispatch({ type: "BLUR" });
        // setIsTouched(true);
    };

    const reset = () => {
        inputDispatch({ type: "RESET" });
        // setEnteredValue("");
        // setIsTouched(false);
    };

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
};

export default useInput;
