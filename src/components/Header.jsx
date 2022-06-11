import React from "react";
import { HeaderContainer, SearchSection } from "../styles/Header";
import { Logo } from "./Logo";
import { SearchForm } from "./SearchForm";
import { SearchInput } from "./SearchInput";
import { Topbar } from "./Topbar";

export const Header = () => {
    return (
        <HeaderContainer>
            <Topbar />
            <Logo size="6rem" />
            <SearchSection>
                <p className="slogan">
                    Hundreds and hundreds of gifs ready to cheer up your life.
                </p>
                <SearchForm />
            </SearchSection>
        </HeaderContainer>
    );
};
