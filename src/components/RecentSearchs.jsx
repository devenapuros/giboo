import React from "react";
import {
    PopularSearchsContainer,
    SearchOptionList,
    SecTitle,
} from "../styles/PopularSearchs";
import { RecentSearchItem } from "./RecentSearchItem";

export const RecentSearchs = ({ recentSearchs, handleClick }) => {
    return (
        <PopularSearchsContainer>
            <SecTitle className="title">Recent searchs</SecTitle>
            <SearchOptionList>
                {recentSearchs.map((item) => (
                    <RecentSearchItem
                        key={item}
                        label={item}
                        handleClick={handleClick}
                    />
                ))}
            </SearchOptionList>
        </PopularSearchsContainer>
    );
};
