import React from "react";
import { MenuOptionButton } from "../styles/UserDropdownItem";

export const UserDropdownItem = ({ label, icon }) => {
    return (
        <li>
            <MenuOptionButton>
                {label}
                {icon}
            </MenuOptionButton>
        </li>
    );
};
