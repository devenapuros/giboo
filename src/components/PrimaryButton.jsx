import React from "react";
import { PrimaryBtn } from "../styles/PrimaryButton";

export const PrimaryButton = ({ label, icon, name }) => {
    return (
        <PrimaryBtn className={name || "primary-btn"}>
            {label}
            {icon}
        </PrimaryBtn>
    );
};
