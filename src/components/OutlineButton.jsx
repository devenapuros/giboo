import { OutlineBtn } from "../styles/OutlineButton";

export const OutlineButton = ({
    label,
    leftIcon,
    rightIcon,
    handleClick,
    width,
    padding,
    borderRadius,
    margin,
    name,
}) => {
    return (
        <OutlineBtn
            className={name || "outline-btn"}
            onClick={handleClick}
            width={width}
            padding={padding}
            margin={margin}
            borderRadius={borderRadius}
        >
            {leftIcon}
            {label}
            {rightIcon}
        </OutlineBtn>
    );
};
