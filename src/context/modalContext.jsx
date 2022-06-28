import { createContext, useContext } from "react";
import { useModal } from "../hooks/useModal";

const ModalContext = createContext();

export const useModalContext = () => {
    const context = useContext(ModalContext);
    if (!context)
        throw new Error("Missing ModalContextProvider to use theme context");
    return context;
};

const ModalContextProvider = ({ children }) => {
    const modalController = useModal();

    return (
        <ModalContext.Provider value={modalController}>
            {children}
        </ModalContext.Provider>
    );
};

export { ModalContextProvider };
