import { useLocation } from "wouter";
import { SearchCompletionContainer } from "../styles/SearchCompletion";
import { PopularSearchs } from "./PopularSearchs";
import { RecentSearchs } from "./RecentSearchs";

const recentSearchs = [
    "cat",
    "fun",
    "avengers",
    "clapton",
    "sad",
    "meme",
    "emo",
];

export const SearchCompletion = ({ visible, setVisible }) => {
    // eslint-disable-next-line no-unused-vars
    const [location, setLocation] = useLocation();
    const handleClick = (keyword) => {
        setVisible(false);
        setLocation(`/search/${keyword}`);
    };

    return (
        <SearchCompletionContainer visible={visible}>
            {recentSearchs.length > 0 && (
                <RecentSearchs
                    recentSearchs={recentSearchs}
                    handleClick={handleClick}
                />
            )}
            <PopularSearchs handleClick={handleClick} />
        </SearchCompletionContainer>
    );
};
