import React from "react";
import { HeaderContainer, SearchSection } from "../styles/Header";
import { SearchForm } from "./SearchForm";
import { Topbar } from "./Topbar";

export const Header = () => {
    return (
        <HeaderContainer>
            <Topbar allowHeader={true}/>
            {/* <Logo size="6rem" /> */}
            <SearchSection>
                <h1 className="slogan">
                    From cats to memes. Hundreds and hundreds of funny gifs
                    waiting to be discovered.
                </h1>
                <SearchForm />
            </SearchSection>
        </HeaderContainer>
    );
};
