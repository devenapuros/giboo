import { SearchRecomendationContainer } from "../styles/SearchRecomendation";
import { RoundedImage } from "./RoundedImage";

export const SearchRecomendation = ({ label, img, handleClick }) => {
    return (
        <SearchRecomendationContainer onClick={() => handleClick(label)}>
            {label}
            {img && <RoundedImage src={img} size="2rem" alt={img} />}
        </SearchRecomendationContainer>
    );
};
