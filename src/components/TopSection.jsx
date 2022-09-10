import { useGifGetter } from "../hooks/useGifGetter";
import { TitleSection, TopSectionContainer } from "../styles/TopSection";
import { GifGrid } from "./GifGrid";
import { SeeMoreSection } from "./SeeMoreSection";

export const TopSection = ({ item }) => {
    const [data, error, loading] = useGifGetter(item.keyword, 12, 0);

    return (
        <TopSectionContainer>
            <TitleSection>{item.keyword} Gifs</TitleSection>
            <GifGrid data={data} error={error} loading={loading} />
            <SeeMoreSection keyword={item.keyword} />
        </TopSectionContainer>
    );
};
