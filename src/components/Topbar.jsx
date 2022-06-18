import { useEffect, useState } from "react";
import { RightGroup, TopbarContainer } from "../styles/Topbar";
import { Logo } from "./Logo";
import { PrimaryButton } from "./PrimaryButton";
import { TransparentButton } from "./TransparentButton";
import { MenuIcon } from "./Icons/MenuIcon";
import { SearchForm } from "./SearchForm";

export const Topbar = ({ allowHeader }) => {
    const [header, setHeader] = useState(false);
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
            <Logo size="2rem" />
            <SearchForm name="search-form" padding="0.65rem 0" />
            <RightGroup>
                <PrimaryButton name="join-btn" label="Join" />
                <TransparentButton
                    name="menu-btn"
                    icon={<MenuIcon color="textColor" />}
                />
            </RightGroup>
        </TopbarContainer>
    );
};
