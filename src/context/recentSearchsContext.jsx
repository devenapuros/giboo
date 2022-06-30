import { createContext, useContext } from "react";
import { useRecentSearchs } from "../hooks/useRecentSearchs";

const RecentSearchsContext = createContext();

export const useRecentSearchsContext = () => {
    const context = useContext(RecentSearchsContext);
    if (!context)
        throw new Error("Missing  to use theme context");
    return context;
};

const RecentSearchsContextProvider = ({ children }) => {
    const recentSearchsController = useRecentSearchs();

    return (
        <RecentSearchsContext.Provider value={recentSearchsController}>
            {children}
        </RecentSearchsContext.Provider>
    );
};

export { RecentSearchsContextProvider };
