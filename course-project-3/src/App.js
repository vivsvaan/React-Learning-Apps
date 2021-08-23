import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";

function App() {
    const contextData = useContext(AuthContext);
    console.log("app is called");
    console.log(contextData);

    return (
        <React.Fragment>
            <MainHeader />
            <main>
                {!contextData.isLoggedIn && <Login />}
                {contextData.isLoggedIn && <Home />}
            </main>
        </React.Fragment>
    );
}

export default App;
