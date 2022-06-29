import { useEffect, useState } from "react";
import { RightGroup, TopbarContainer } from "../styles/Topbar";
import { Logo } from "./Logo";
import { TransparentButton } from "./TransparentButton";
import { MenuIcon } from "./Icons/MenuIcon";
import { SearchForm } from "./SearchForm";
import { SunIcon } from "./Icons/SunIcon";
import { useTheme } from "../context/themeContext";
import { MoonIcon } from "./Icons/MoonIcon";
import { AuthWidget } from "./AuthWidget";

export const Topbar = ({ allowHeader }) => {
    const [header, setHeader] = useState(false);
    const { theme, handleTheme } = useTheme();

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
        <TopbarContainer header={allowHeader ? header : true}>
            <Logo name="topbar-logo" size="2rem" />
            <SearchForm name="search-form" padding="0.6rem 0" />
            <RightGroup>
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
                <AuthWidget />
            </RightGroup>
            <TransparentButton
                name="menu-btn"
                icon={<MenuIcon color="textColor" />}
            />
        </TopbarContainer>
    );
};
