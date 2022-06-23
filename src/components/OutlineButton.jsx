import { OutlineBtn } from "../styles/OutlineButton";

export const OutlineButton = ({ label, leftIcon, rightIcon, handleClick }) => {
    return (
        <OutlineBtn onClick={handleClick}>
            {leftIcon}
            {label}
            {rightIcon}
        </OutlineBtn>
    );
};
