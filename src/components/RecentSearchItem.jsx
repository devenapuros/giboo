import { SearchItemContainer } from "../styles/RecentSearchItem";
import { TransparentButton } from "./TransparentButton";
import { CloseIcon } from "./Icons/CloseIcon";
import { useRecentSearchsContext } from "../context/recentSearchsContext";

export const RecentSearchItem = ({ label, handleClick }) => {
    const { deleteSearch } = useRecentSearchsContext();
    return (
        <SearchItemContainer onClick={() => handleClick(label)}>
            {label}
            <TransparentButton
                icon={<CloseIcon size="0.85" />}
                width="fit-content"
                handleClick={(event) => {
                    event.stopPropagation();
                    deleteSearch(label);
                }}
            />
        </SearchItemContainer>
    );
};
