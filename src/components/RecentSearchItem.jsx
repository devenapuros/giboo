import { SearchItemContainer } from "../styles/RecentSearchItem";
import { TransparentButton } from "./TransparentButton";
import { CloseIcon } from "./Icons/CloseIcon";
import { useLocation } from "wouter";

export const RecentSearchItem = ({ label,handleClick }) => {
    

    return (
        <SearchItemContainer onClick={() => handleClick(label)}>
            {label}
            <TransparentButton
                icon={<CloseIcon size="0.85" />}
                width="fit-content"
            />
        </SearchItemContainer>
    );
};
