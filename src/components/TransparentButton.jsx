import React from "react";
import { TransparentBtn } from "../styles/TransparentButton";

export const TransparentButton = ({ label, icon }) => {
    return (
        <TransparentBtn>
            {label}{icon}
        </TransparentBtn>
    );
};
