import { useRef, useState } from "react";
import { useClickOutsideListener } from "../hooks/useClickOutsideListener";
import { Separator } from "../styles/Separator";
import { DropdownContainer, UserMenu } from "../styles/UserDropdown";
import { GearIcon } from "./Icons/GearIcon";
import { HeartOutlineIcon } from "./Icons/HeartOutlineIcon";
import { LogoutIcon } from "./Icons/LogoutIcon";
import { QueueIcon } from "./Icons/QueueIcon";
import { UserDropdownButton } from "./UserDropdownButton";
import { UserDropdownItem } from "./UserDropdownItem";

export const UserDropdown = ({ user }) => {
    const wrapperRef = useRef(null);
    const [menuVisible, setMenuVisible] = useState(false);
    const hideUserMenu = () => setMenuVisible(false);
    useClickOutsideListener(wrapperRef, hideUserMenu);

    return (
        <DropdownContainer ref={wrapperRef} className="auth-widget">
            <UserDropdownButton
                user={user}
                menuVisible={menuVisible}
                setMenuVisible={setMenuVisible}
            />
            <UserMenu visible={menuVisible}>
                <UserDropdownItem
                    label="Favorites"
                    icon={<HeartOutlineIcon />}
                />
                <UserDropdownItem label="My collections" icon={<QueueIcon />} />
                <UserDropdownItem label="Settings" icon={<GearIcon />} />
                <Separator type="horizontal" margin="0" />
                <UserDropdownItem label="Logout" icon={<LogoutIcon />} />
            </UserMenu>
        </DropdownContainer>
    );
};
