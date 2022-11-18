import { createContext, useState } from "react";

export const ShowUpdatedModalContext = createContext({
    showUpdatedModal: '',
    setShowUpdatedModal: () => null
})

export const ShowUpdatedModalProvider = ({ children }) => {
    const [showUpdatedModal, setShowUpdatedModal] = useState(false);
    const value = { showUpdatedModal, setShowUpdatedModal }

    return <ShowUpdatedModalContext.Provider value={value} >{children}</ShowUpdatedModalContext.Provider>
}