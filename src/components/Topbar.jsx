import React from "react";
import { RightGroup, TopbarContainer } from "../styles/Topbar";
import { SearchIcon } from "./Icons/SearchIcon";
import { Logo } from "./Logo";

export const Topbar = () => {
    return (
        <TopbarContainer>
            <Logo size="2rem" />
            <RightGroup>
                <a className="nav-link" href="#about">
                    About
                </a>
                <a className="nav-link search" href="#top">
                    <SearchIcon color="textColor" size="0.8" />
                </a>
            </RightGroup>
        </TopbarContainer>
    );
};
