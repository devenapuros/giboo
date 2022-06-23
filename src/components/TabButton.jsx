import React from "react";
import { TabBtn } from "../styles/TabButton";

export const TabButton = ({ label, value, currentValue, handleClick }) => {
    return (
        <TabBtn
            id={value}
            active={value === currentValue ? true : false}
            onClick={() => handleClick(value)}
        >
            {label}
        </TabBtn>
    );
};
