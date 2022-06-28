import { TransparentBtn } from "../styles/TransparentButton";

export const TransparentButton = ({
    label,
    icon,
    name,
    disabled,
    width,
    handleClick,
}) => {
    return (
        <TransparentBtn
            className={name || "transparent-btn"}
            disabled={disabled}
            width={width}
            onClick={handleClick}
        >
            {label}
            {icon}
        </TransparentBtn>
    );
};
