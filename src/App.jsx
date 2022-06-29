import { ThemeProvider } from "styled-components";
import { Route } from "wouter";
import { MainPage } from "./pages/MainPage";
import { SearchPage } from "./pages/SearchPage";
import { GlobalStyle } from "./styles/Global";
import styleProps from "./styles/styleProps.json";
import { GifPage } from "./pages/GifPage";
import { useTheme } from "./context/themeContext";
import { useModalContext } from "./context/modalContext";
import { LoginModal } from "./components/LoginModal";
import { AuthProvider } from "./context/authContext";

function App() {
    const { theme } = useTheme();
    const modalController = useModalContext();
    return (
        <AuthProvider>
            <ThemeProvider theme={styleProps[theme]}>
                <GlobalStyle />
                <Route path="/" component={MainPage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/search/:search">
                    {(params) => <SearchPage q={params.search} />}
                </Route>
                <Route path="/gif/:id">
                    {(params) => <GifPage id={params.id} />}
                </Route>
                <LoginModal modalController={modalController} />
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
