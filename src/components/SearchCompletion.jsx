import React from "react";
import {
    SearchCompletionContainer,
    SearchOptionList,
    SecTitle,
} from "../styles/SearchCompletion";
import { SearchRecomendation } from "./SearchRecomendation";

export const SearchCompletion = ({ visible, onClickRecomendation }) => {
    
    return (
        <SearchCompletionContainer visible={visible}>
            <SecTitle className="title">Popular searchs</SecTitle>
            <SearchOptionList>
                <SearchRecomendation
                    handleClick={onClickRecomendation}
                    label="panda"
                />
                <SearchRecomendation
                    handleClick={onClickRecomendation}
                    label="cat"
                />
                <SearchRecomendation
                    handleClick={onClickRecomendation}
                    label="matrix"
                />
                <SearchRecomendation
                    handleClick={onClickRecomendation}
                    label="meme"
                />
                <SearchRecomendation
                    handleClick={onClickRecomendation}
                    label="fall"
                />
            </SearchOptionList>
        </SearchCompletionContainer>
    );
};
