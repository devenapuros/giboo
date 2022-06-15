import { SvgIcon } from "../../styles/SvgIcon";

export const MenuIcon = ({ color, size }) => {
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            color={color}
            size={size}
        >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
        </SvgIcon>
    );
};
