import { Link } from "wouter";
import { PrimaryAnchor } from "../styles/PrimaryLink";

export const PrimaryLink = ({ label, icon, name, anchorRef = "#" }) => {
    return (
        <Link href={anchorRef}>
            <PrimaryAnchor className={name || "primary-link"}>
                {label}
                {icon}
            </PrimaryAnchor>
        </Link>
    );
};
