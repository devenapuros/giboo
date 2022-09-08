import { SocialBtn } from "../styles/SocialButton";

export const SocialButton = ({
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
        <SocialBtn
            className={name || "social-btn"}
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
        </SocialBtn>
    );
};
