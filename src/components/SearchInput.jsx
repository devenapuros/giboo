import React from "react";
import { Input, InputButton, InputContainer } from "../styles/SearchInput";
import { SearchIcon } from "./Icons/SearchIcon";

export const SearchInput = ({ name, placeholder, handleChange }) => {
    return (
        <InputContainer>
            <Input
                type="text"
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
            />
            <InputButton>
                <SearchIcon size="0.85" />
            </InputButton>
        </InputContainer>
    );
};
