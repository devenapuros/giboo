import React from "react";
import { LogoContainer } from "../styles/Logo";

export const Logo = ({ size }) => {
    return (
        <LogoContainer className="Logo" size={size}>
            <img src="/public/Logo.png" alt="" />
        </LogoContainer>
    );
};
