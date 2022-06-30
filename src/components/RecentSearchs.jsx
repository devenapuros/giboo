import React from "react";
import { useRecentSearchsContext } from "../context/recentSearchsContext";
import {
    PopularSearchsContainer,
    SearchOptionList,
    SecTitle,
} from "../styles/PopularSearchs";
import { RecentSearchItem } from "./RecentSearchItem";

export const RecentSearchs = ({ handleClick }) => {
    const { searchs } = useRecentSearchsContext();
    return (
        <PopularSearchsContainer>
            <SecTitle className="title">Recent searchs</SecTitle>
            <SearchOptionList>
                {[...searchs].reverse().map((item) => (
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
