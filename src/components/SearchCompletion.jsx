import { useLocation } from "wouter";
import { useRecentSearchsContext } from "../context/recentSearchsContext";
import { SearchCompletionContainer } from "../styles/SearchCompletion";
import { PopularSearchs } from "./PopularSearchs";
import { RecentSearchs } from "./RecentSearchs";

export const SearchCompletion = ({ visible, setVisible }) => {
    const { searchs } = useRecentSearchsContext();
    // eslint-disable-next-line no-unused-vars
    const [location, setLocation] = useLocation();
    const handleClick = (keyword) => {
        setVisible(false);
        setLocation(`/search/${keyword}`);
    };

    return (
        <SearchCompletionContainer visible={visible}>
            {searchs.size > 0 && <RecentSearchs handleClick={handleClick} />}
            <PopularSearchs handleClick={handleClick} />
        </SearchCompletionContainer>
    );
};
