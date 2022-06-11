import { ThemeProvider } from "styled-components";
import { MainPage } from "./pages/MainPage";
import { GlobalStyle } from "./styles/Global";
import styleProps from "./styles/styleProps.json";

function App() {
    return (
        <ThemeProvider theme={styleProps["dark"]}>
            <GlobalStyle />
            <MainPage />
        </ThemeProvider>
    );
}

export default App;
