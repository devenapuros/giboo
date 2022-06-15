import React from "react";
import { TransparentBtn } from "../styles/TransparentButton";

export const TransparentButton = ({ label, icon, name }) => {
    return (
        <TransparentBtn className={name || "transparent-btn"}>
            {label}
            {icon}
        </TransparentBtn>
    );
};
