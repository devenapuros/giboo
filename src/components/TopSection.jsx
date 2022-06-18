import { useGifGetter } from "../hooks/useGifGetter";
import { TitleSection, TopSectionContainer } from "../styles/TopSection";
import { GifGrid } from "./GifGrid";
import { RightArrow } from "./Icons/RightArrow";
import { TransparentButton } from "./TransparentButton";

export const TopSection = ({ keyword }) => {
    const [data, error, loading, pagination] = useGifGetter(keyword, 10, 0);
    return (
        <TopSectionContainer>
            <TitleSection>
                <h2>{keyword || "no-keyword"}</h2>
                <TransparentButton label="See all" icon={<RightArrow />} />
            </TitleSection>
            <GifGrid data={data} error={error} loading={loading} />
        </TopSectionContainer>
    );
};
