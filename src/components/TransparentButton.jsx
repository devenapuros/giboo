import { TransparentBtn } from "../styles/TransparentButton";

export const TransparentButton = ({
    label,
    icon,
    name,
    disabled,
    width,
    handleClick,
    elementRef,
}) => {
    return (
        <TransparentBtn
            ref={elementRef}
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
