import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
    Brand,
    Menu,
    MenuBtn,
    RightGroup,
    TopbarContainer,
} from "@/styles/Topbar";
import { Logo } from "./Logo";
import { TransparentButton } from "./TransparentButton";
import { SearchForm } from "./SearchForm";
import { SunIcon } from "./Icons/SunIcon";
import { useTheme } from "../context/themeContext";
import { MoonIcon } from "./Icons/MoonIcon";
import { ChevronIcon } from "./Icons/ChevronIcon";
import { useClickOutsideListener } from "../hooks/useClickOutsideListener";
import { TransparentLink } from "./TransparentLink";
import { GithubIcon } from "./Icons/GithubIcon";

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
            if (scrollY > 40) {
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
            <Link href="/">
                <Brand className="brand">
                    <Logo name="topbar-logo" size="2.8rem" />
                    <h1>
                        Gi<span className="purple">b</span>
                        <span className="deeppink">o</span>
                        <span className="orange">o</span>
                    </h1>
                </Brand>
            </Link>
            <SearchForm name="search-form" padding="0.6rem 0" />
            <RightGroup>
                <Menu visible={menuVisible} ref={menuRef}>
                    {/* <TransparentButton
                        width="fit-content"
                        name="menu-item-btn"
                        label="Explore"
                    /> */}
                    {/* <TransparentButton
                        width="fit-content"
                        name="menu-item-btn"
                        label="About"
                    /> */}
                    <TransparentLink
                        width="fit-content"
                        name="menu-item-btn"
                        href="https://github.com/devenapuros"
                        target="_blank"
                    >
                        <GithubIcon />
                        Github
                    </TransparentLink>
                    <TransparentButton
                        width="fit-content"
                        name="menu-item-btn"
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
