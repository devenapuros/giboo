import React from "react";
import { Link } from "wouter";
import { LogoContainer } from "../styles/Logo";

export const Logo = ({ size, name }) => {
    return (
        <LogoContainer className={name || "logo"} size={size}>
            <Link href="/">
                <img src="/public/Logo.png" alt="" />
            </Link>
        </LogoContainer>
    );
};
