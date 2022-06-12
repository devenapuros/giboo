import React from "react";
import { Input, InputContainer } from "../styles/SearchInput";
import { SearchIcon } from "./Icons/SearchIcon";
import { TransparentButton } from "./TransparentButton";

export const SearchInput = ({ name, placeholder, handleChange }) => {
    return (
        <InputContainer>
            <Input
                type="text"
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
            />
            <TransparentButton icon={<SearchIcon size="0.85" />} />
        </InputContainer>
    );
};
