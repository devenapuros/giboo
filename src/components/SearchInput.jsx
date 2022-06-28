import { Input, InputContainer } from "../styles/SearchInput";
import { SearchIcon } from "./Icons/SearchIcon";
import { TransparentButton } from "./TransparentButton";

export const SearchInput = ({
    name,
    value,
    inputClass,
    isFocus,
    placeholder,
    handleChange,
    handleFocus,
    handleBlur,
    padding,
}) => {
    return (
        <InputContainer focus={isFocus} className={inputClass}>
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
