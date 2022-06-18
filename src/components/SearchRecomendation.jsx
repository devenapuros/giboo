import React from "react";
import { SearchRecomendationContainer } from "../styles/SearchRecomendation";

export const SearchRecomendation = ({ label, handleClick }) => {
    return (
        <SearchRecomendationContainer
            onClick={() => handleClick(label)}
        >
            {label}
        </SearchRecomendationContainer>
    );
};
