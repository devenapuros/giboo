import { ThemeProvider } from "styled-components";
import { Route } from "wouter";
import { MainPage } from "./pages/MainPage";
import { SearchPage } from "./pages/SearchPage";
import { GlobalStyle } from "./styles/Global";
import styleProps from "./styles/styleProps.json";
import { GifPage } from "./pages/GifPage";

function App() {
    return (
        <ThemeProvider theme={styleProps["dark"]}>
            <GlobalStyle />
            <Route path="/" component={MainPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/search/:search">
                {(params) => <SearchPage q={params.search} />}
            </Route>
            <Route path="/gif/:id">
                {(params) => <GifPage id={params.id} />}
            </Route>
        </ThemeProvider>
    );
}

export default App;
