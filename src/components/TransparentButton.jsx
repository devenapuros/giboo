import React from "react";
import { TransparentBtn } from "../styles/TransparentButton";

export const TransparentButton = ({ label, icon, name, disabled, width }) => {
    return (
        <TransparentBtn
            className={name || "transparent-btn"}
            disabled={disabled}
            width={width}
        >
            {label}
            {icon}
        </TransparentBtn>
    );
};
