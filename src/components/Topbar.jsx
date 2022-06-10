import React from "react";
import { RightGroup, TopbarContainer } from "../styles/Topbar";
import { SearchIcon } from "./Icons/SearchIcon";
import { ThemeToggler } from "./ThemeToggler";

export const Topbar = () => {
    return (
        <TopbarContainer>
            <h1>GIF Picker</h1>
            <RightGroup>
                {/* <SearchIcon color="#222" size="19" /> */}
                <ThemeToggler />
            </RightGroup>
        </TopbarContainer>
    );
};
