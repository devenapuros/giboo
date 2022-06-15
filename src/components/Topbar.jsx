import { useEffect, useState } from "react";
import { RightGroup, TopbarContainer } from "../styles/Topbar";
import { Logo } from "./Logo";
import { PrimaryButton } from "./PrimaryButton";
import { TransparentButton } from "./TransparentButton";
import { MenuIcon } from "./Icons/MenuIcon";

export const Topbar = () => {
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
        <TopbarContainer header={header}>
            <Logo size="2.35rem" />
            <RightGroup>
                <PrimaryButton label="Ingresar" />
                <TransparentButton
                    name="menu-btn"
                    icon={<MenuIcon color="textColor" />}
                />
            </RightGroup>
        </TopbarContainer>
    );
};
