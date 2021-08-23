import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
    // using Context Consumer approach
    // return (
    //     <AuthContext.Consumer>
    //         {(contextData) => {
    //             return (
    //                 <nav className={classes.nav}>
    //                     <ul>
    //                         {contextData.isLoggedIn && (
    //                             <li>
    //                                 <a href="/">Users</a>
    //                             </li>
    //                         )}
    //                         {contextData.isLoggedIn && (
    //                             <li>
    //                                 <a href="/">Admin</a>
    //                             </li>
    //                         )}
    //                         {contextData.isLoggedIn && (
    //                             <li>
    //                                 <button onClick={props.onLogout}>Logout</button>
    //                             </li>
    //                         )}
    //                     </ul>
    //                 </nav>
    //             );
    //         }}
    //     </AuthContext.Consumer>
    // );

    const contextData = useContext(AuthContext);
    return (
        <nav className={classes.nav}>
            <ul>
                {contextData.isLoggedIn && (
                    <li>
                        <a href="/">Users</a>
                    </li>
                )}
                {contextData.isLoggedIn && (
                    <li>
                        <a href="/">Admin</a>
                    </li>
                )}
                {contextData.isLoggedIn && (
                    <li>
                        <button onClick={contextData.onLogout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
