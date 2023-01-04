import { TransparentLnk } from "../styles/TransparentLnk";

export const TransparentLink = ({
    disabled,
    width,
    href,
    children,
    target = "",
    name,
}) => {
    return (
        <TransparentLnk
            href={href}
            className={name || "transparent-lnk"}
            disabled={disabled}
            width={width}
            target={target}
        >
            {children}
        </TransparentLnk>
    );
};
