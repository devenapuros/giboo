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
    active,
}) => {
    return (
        <OutlineBtn
            className={name || "outline-btn"}
            onClick={handleClick}
            width={width}
            padding={padding}
            margin={margin}
            borderRadius={borderRadius}
            active={active}
        >
            {leftIcon}
            {label}
            {rightIcon}
        </OutlineBtn>
    );
};
