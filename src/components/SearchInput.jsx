import React from "react";
import { Input, InputContainer } from "../styles/SearchInput";
import { SearchIcon } from "./Icons/SearchIcon";
import { TransparentButton } from "./TransparentButton";

export const SearchInput = ({
    name,
    value,
    placeholder,
    handleChange,
    handleFocus,
    handleBlur,
}) => {
    return (
        <InputContainer>
            <Input
                type="text"
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <TransparentButton
                name="search-btn"
                icon={<SearchIcon size="0.85" />}
            />
        </InputContainer>
    );
};
