import { useEffect, useRef, useState } from "react";
import { Menu, MenuBtn, RightGroup, TopbarContainer } from "../styles/Topbar";
import { Logo } from "./Logo";
import { TransparentButton } from "./TransparentButton";
import { SearchForm } from "./SearchForm";
import { SunIcon } from "./Icons/SunIcon";
import { useTheme } from "../context/themeContext";
import { MoonIcon } from "./Icons/MoonIcon";
import { AuthWidget } from "./AuthWidget";
import { ChevronIcon } from "./Icons/ChevronIcon";
import { useClickOutsideListener } from "../hooks/useClickOutsideListener";

export const Topbar = ({ allowHeader }) => {
    const [header, setHeader] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const { theme, handleTheme } = useTheme();
    const menuRef = useRef();
    const menuBtnRef = useRef();

    const autoHideMenu = (ref, event) => {
        if (menuBtnRef.current && !menuBtnRef.current.contains(event.target)) {
            console.log("hide menu");
            setMenuVisible(false);
        }
    };

    useClickOutsideListener(menuRef, autoHideMenu);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            let scrollY = window.pageYOffset;
            if (scrollY > 60) {
                setHeader(true);
            } else {
                setHeader(false);
            }
        });
    }, []);

    return (
        <TopbarContainer
            header={allowHeader ? header : true}
            blackice={menuVisible}
        >
            <Logo name="topbar-logo" size="2rem" />
            <SearchForm name="search-form" padding="0.6rem 0" />
            <RightGroup>
                <Menu visible={menuVisible} ref={menuRef}>
                    <TransparentButton
                        width="fit-content"
                        name="menu-item-btn"
                        label="Upload"
                    />
                    <TransparentButton
                        width="fit-content"
                        name="menu-item-btn"
                        label="Explore"
                    />
                    <TransparentButton
                        width="fit-content"
                        name="menu-item-btn"
                        label="About"
                    />

                    <TransparentButton
                        width="fit-content"
                        name="menu-item-btn theme-toggler"
                        handleClick={handleTheme}
                        icon={
                            theme === "dark" ? (
                                <SunIcon name="sun" size="0.9" />
                            ) : (
                                <MoonIcon name="moon" size="0.9" />
                            )
                        }
                    />
                </Menu>
                <RightGroup>
                    <AuthWidget />
                    <MenuBtn
                        ref={menuBtnRef}
                        active={menuVisible}
                        onClick={() => setMenuVisible(!menuVisible)}
                        className={`menu-btn ${menuVisible && "showing-menu"}`}
                    >
                        <ChevronIcon />
                    </MenuBtn>
                </RightGroup>
            </RightGroup>
        </TopbarContainer>
    );
};
