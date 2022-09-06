import { useGifGetter } from "../hooks/useGifGetter";
import { TitleSection, TopSectionContainer } from "../styles/TopSection";
import { GifGrid } from "./GifGrid";
import { useLocation } from "wouter";
import { SeeMoreSection } from "./SeeMoreSection";

export const TopSection = ({ item }) => {
    const [data, error, loading] = useGifGetter(item.keyword, 12, 0);
    // eslint-disable-next-line no-unused-vars
    const [location, setLocation] = useLocation();

    const seeMoreClick = (keyword) => {
        setLocation(`/search/${keyword}`);
    };

    return (
        <TopSectionContainer>
            <TitleSection>{item.keyword} Gifs</TitleSection>
            <GifGrid data={data} error={error} loading={loading} />
            <SeeMoreSection
                label={item.keyword}
                handleClick={() => seeMoreClick(item.keyword)}
            />
        </TopSectionContainer>
    );
};
