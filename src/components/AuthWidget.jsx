import React, { useRef, useState } from "react";
import { useAuth } from "../context/authContext";
import { useModalContext } from "../context/modalContext";
import {
    AuthWidgetContainer,
    AvatarContainer,
    MenuOptionButton,
    UserAvatar,
    UserButton,
    UserMenu,
} from "../styles/AuthWidget";
import { Separator } from "../styles/Separator";
import { HeartOutlineIcon } from "./Icons/HeartOutlineIcon";
import { QueueIcon } from "./Icons/QueueIcon";
import { PrimaryButton } from "./PrimaryButton";
import { GearIcon } from "./Icons/GearIcon";
import { LogoutIcon } from "./Icons/LogoutIcon";
import { useClickOutsideListener } from "../hooks/useClickOutsideListener";

export const AuthWidget = () => {
    const modalController = useModalContext();
    const [menuVisible, setMenuVisible] = useState(false);
    const { user } = useAuth();
    const wrapperRef = useRef(null);
    const hideUserMenu = () => setMenuVisible(false);
    useClickOutsideListener(wrapperRef, hideUserMenu);

    if (user)
        return (
            <AuthWidgetContainer ref={wrapperRef} className="auth-widget">
                <UserButton
                    className="user-btn"
                    active={menuVisible}
                    onClick={() => setMenuVisible(!menuVisible)}
                >
                    <span className="user-name">{user.username}</span>
                    <AvatarContainer>
                        <UserAvatar src={user.avatar} />
                    </AvatarContainer>
                </UserButton>
                <UserMenu visible={menuVisible}>
                    <li>
                        <MenuOptionButton>
                            Favorites
                            <HeartOutlineIcon />
                        </MenuOptionButton>
                    </li>
                    <li>
                        <MenuOptionButton>
                            My collections
                            <QueueIcon />
                        </MenuOptionButton>
                    </li>
                    <li>
                        <MenuOptionButton>
                            Settings
                            <GearIcon />
                        </MenuOptionButton>
                    </li>
                    <Separator type="horizontal" margin="0" />
                    <li>
                        <MenuOptionButton>
                            Logout
                            <LogoutIcon />
                        </MenuOptionButton>
                    </li>
                </UserMenu>
            </AuthWidgetContainer>
        );
    else
        return (
            <PrimaryButton
                name="auth-widget"
                label="Join"
                handleClick={modalController.Show}
            />
        );
};
