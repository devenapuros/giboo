import React from "react";
import { TransparentBtn } from "../styles/TransparentButton";

export const TransparentButton = ({ label, icon, name, disabled }) => {
    return (
        <TransparentBtn
            className={name || "transparent-btn"}
            disabled={disabled}
        >
            {label}
            {icon}
        </TransparentBtn>
    );
};
