import React, { useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";

// if ref is set in Input component while calling
// ref will be available here
const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    const focus = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        return {
            focus: focus,
        };
    });

    return (
        <div
            className={`${classes.control} ${
                props.isValid === false ? classes.invalid : ""
            }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
});

export default Input;
