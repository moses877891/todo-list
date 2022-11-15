import { createContext, useState } from "react";

export const ShowModalContext = createContext({
    showModal: '',
    setShowModal: () => null
})

export const ShowModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const value = { showModal, setShowModal }

    return <ShowModalContext.Provider value={value} >{children}</ShowModalContext.Provider>
}