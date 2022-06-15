import React from "react";
import { SearchCompletionContainer } from "../styles/SearchCompletion";

export const SearchCompletion = ({ visible }) => {
    return (
        <SearchCompletionContainer visible={visible}>
            <span className="title">Popular searchs</span>
            
        </SearchCompletionContainer>
    );
};
