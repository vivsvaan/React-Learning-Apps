import React from "react";

const CardContext = React.createContext({
    items: [],
    totalAmount: 0,
    additem: () => {},
    removeItem: (id) => {},
});

export default CardContext;
