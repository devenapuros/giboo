import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const initialTheme = "light";

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("Missing ThemeProvider to use theme context");
    return context;
};

const ThemeProvider = ({ children }) => {
    let localTheme = localStorage.getItem("lb-theme");
    const [theme, setTheme] = useState(localTheme || initialTheme);

    const handleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("lb-theme", "dark");
            
        } else {
            setTheme("light");
            localStorage.setItem("lb-theme", "light");

        }
    };

    return (
        <ThemeContext.Provider value={{ theme, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider };
