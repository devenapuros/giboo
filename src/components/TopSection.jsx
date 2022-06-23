import { useGifGetter } from "../hooks/useGifGetter";
import { TitleSection, TopSectionContainer } from "../styles/TopSection";
import { GifGrid } from "./GifGrid";
import { OutlineButton } from "./OutlineButton";

export const TopSection = ({ keyword }) => {
    const [data, error, loading, pagination] = useGifGetter(keyword, 10, 0);
    return (
        <TopSectionContainer>
            <TitleSection>
                <h2>{keyword || "no-keyword"}</h2>
            </TitleSection>
            <GifGrid data={data} error={error} loading={loading} />
            <OutlineButton label="See more" />
        </TopSectionContainer>
    );
};
