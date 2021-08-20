import React from "react";

import Card from "../Card/Card";
import Button from "../Button/Button";

import classes from "./ErrorModal.module.css";

function ErrorModal(props) {
    function dismissModal() {
        props.onModalDismiss();
    }
    return (
        <div>
            <div className={classes.backdrop} onClick={dismissModal} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={dismissModal}>Okay</Button>
                </footer>
            </Card>
        </div>
    );
}

export default ErrorModal;
