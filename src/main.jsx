import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalContextProvider } from "./context/modalContext";
import { ThemeProvider } from "./context/themeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider>
            <ModalContextProvider>
                <App />
            </ModalContextProvider>
        </ThemeProvider>
    </React.StrictMode>
);
