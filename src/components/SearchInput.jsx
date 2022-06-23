import React from "react";
import { ErrorContainer, Input, InputContainer } from "../styles/SearchInput";
import { SearchIcon } from "./Icons/SearchIcon";
import { TransparentButton } from "./TransparentButton";
import { ErrorIcon } from "./Icons/ErrorIcon";

export const SearchInput = ({
    name,
    value,
    error,
    isFocus,
    placeholder,
    handleChange,
    handleFocus,
    handleBlur,
    padding,
}) => {
    return (
        <InputContainer focus={isFocus}>
            <Input
                type="text"
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                padding={padding}
            />
            <TransparentButton
                name="search-btn"
                icon={<SearchIcon size="0.85" />}
                disabled={value ? false : true}
                width="28px"
            />
        </InputContainer>
    );
};
