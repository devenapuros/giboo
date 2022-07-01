/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("Missing AuthProvider");
    return context;
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState({
        username: "misterrobotow",
        avatar: "/dog.gif",
    });
    const [loading, setLoading] = useState(true);

    const signup = (username, email, password) => {
        console.log(username, email, password);
    };

    const login = (email, password) => {
        console.log(email, password);
    };

    const logout = () => {};

    const loginWithGoogle = () => {};

    return (
        <authContext.Provider
            value={{ signup, login, logout, user, loading, loginWithGoogle }}
        >
            {children}
        </authContext.Provider>
    );
}

// {
//     username: "misterrobotow",
//     avatar: "/dog.gif",
// }
