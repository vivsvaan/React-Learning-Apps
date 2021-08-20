import React, { useState, useRef } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import Wrapper from "../../Helpers/Wrapper/Wrapper";

import classes from "./AddUser.module.css";

function AddUser(props) {
    // const [enteredUsername, setEnteredUsername] = useState("");
    // const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState(null);

    const usernameInputRef = useRef();
    const ageInputRef = useRef();

    function addUserHandler(event) {
        event.preventDefault();
        const enteredUsername = usernameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0 ||
            +enteredAge < 1
        ) {
            setError({
                title: "Invalid Input",
                message: "Please enter valid Name and Age! (Non-empty values and age must be 1)",
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        usernameInputRef.current.value = "";
        ageInputRef.current.value = "";
        // setEnteredUsername("");
        // setEnteredAge("");
    }

    // function usernameChangeHandler(event) {
    //     setEnteredUsername(event.target.value);
    // }
    // function ageChangeHandler(event) {
    //     setEnteredAge(event.target.value);
    // }
    function modalDismissHandler() {
        setError(null);
    }

    return (
        <Wrapper>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onModalDismiss={modalDismissHandler}
                />
            )}

            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        // value={enteredUsername}
                        // onChange={usernameChangeHandler}
                        ref={usernameInputRef}
                    />
                    <label htmlFor="age">Age</label>
                    <input
                        id="age"
                        type="number"
                        // value={enteredAge}
                        // onChange={ageChangeHandler}
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUser;
