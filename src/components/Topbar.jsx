import { useEffect, useState } from "react";
import { RightGroup, TopbarContainer } from "../styles/Topbar";
import { SearchIcon } from "./Icons/SearchIcon";
import { Logo } from "./Logo";

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
            <Logo size="3rem" />
            <RightGroup>
                <a className="nav-link search" href="#top">
                    <SearchIcon color="textColor" size="0.8" />
                </a>
            </RightGroup>
        </TopbarContainer>
    );
};
