import React from "react";
import { PrimaryBtn } from "../styles/PrimaryButton";

export const PrimaryButton = ({ label, icon }) => {
    return (
        <PrimaryBtn>
            {label}
            {icon}
        </PrimaryBtn>
    );
};
