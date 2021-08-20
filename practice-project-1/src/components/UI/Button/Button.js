import React from "react";

import classes from "./Button.module.css";

function Button(props) {
    // type={props.type || 'button'} if type in props is not defined, 'button' will be used as fallback type
    return (
        <button className={classes.button} type={props.type || "button"} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;
