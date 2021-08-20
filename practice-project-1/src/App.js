import React, { useState } from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import UsersList from "./components/Users/UsersList/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    function addUserHandler(userName, userAge) {
        setUsersList((prevUsersList) => {
            return [...prevUsersList, { name: userName, age: userAge, id: Math.random() }];
        });
    }

    return (
        <React.Fragment>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList} />
        </React.Fragment>
    );
}

export default App;
