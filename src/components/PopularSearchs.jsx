import React from "react";
import {
    PopularSearchsContainer,
    SearchOptionList,
    SecTitle,
} from "../styles/PopularSearchs";
import { SearchRecomendation } from "./SearchRecomendation";
import popularSearchs from "../constants/popularSearchs.json";

export const PopularSearchs = ({ handleClick }) => {
    return (
        <PopularSearchsContainer>
            <SecTitle className="title">Popular searchs</SecTitle>
            <SearchOptionList>
                {popularSearchs.map((item) => (
                    <SearchRecomendation
                        key={item.keyword}
                        label={item.keyword}
                        img={item.thumbnail}
                        handleClick={handleClick}
                    />
                ))}
            </SearchOptionList>
        </PopularSearchsContainer>
    );
};
