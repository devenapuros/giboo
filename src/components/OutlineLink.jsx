import { Link } from "wouter";
import { OutlineAnchor } from "../styles/OutlineLink";

export const OutlineLink = ({
    label,
    leftIcon,
    rightIcon,
    width,
    padding,
    borderRadius,
    margin,
    name,
    active,
    anchorRef = "#",
}) => {
    return (
        <Link href={anchorRef}>
            <OutlineAnchor
                className={name || "outline-btn"}
                width={width}
                padding={padding}
                margin={margin}
                borderRadius={borderRadius}
                active={active}
            >
                {leftIcon}
                {label}
                {rightIcon}
            </OutlineAnchor>
        </Link>
    );
};
