import { createContext, useState } from "react";

export const ListToUpdateContext = createContext({
    listToUpdate: [],
    setListToUpdate: () => { }
});

export const ListToUpdateProvider = ({ children }) => {
    const [listToUpdate, setListToUpdate] = useState([]);

    const value = { listToUpdate, setListToUpdate }
    return <ListToUpdateContext.Provider value={value} >{children}</ListToUpdateContext.Provider>
}