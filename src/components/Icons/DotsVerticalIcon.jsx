import React from "react";
import { SvgIcon } from "../../styles/SvgIcon";

export const DotsVerticalIcon = ({ color, size }) => {
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            color={color}
            size={size}
        >
            <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
        </SvgIcon>
    );
};
