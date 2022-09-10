import React from "react";
import {
    AvatarContainer,
    UserAvatar,
    UserButton,
} from "../styles/UserDropdownButton";

export const UserDropdownButton = ({ user, menuVisible, setMenuVisible }) => {
    return (
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
    );
};
