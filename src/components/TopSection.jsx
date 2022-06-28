import { useGifGetter } from "../hooks/useGifGetter";
import { TitleSection, TopSectionContainer } from "../styles/TopSection";
import { GifGrid } from "./GifGrid";
import { OutlineButton } from "./OutlineButton";
import { RightArrow } from "./Icons/RightArrow";
import { useLocation } from "wouter";

export const TopSection = ({ item }) => {
    const [data, error, loading] = useGifGetter(item.keyword, 10, 0);
    // eslint-disable-next-line no-unused-vars
    const [location, setLocation] = useLocation();

    const seeMoreClick = (keyword) => {
        setLocation(`/search/${keyword}`);
    };

    return (
        <TopSectionContainer>
            <TitleSection>
                <h1>{item.keyword} Gifs</h1>
                <OutlineButton
                    label="See more"
                    width="10rem"
                    padding="0.5rem"
                    borderRadius="24px"
                    rightIcon={<RightArrow />}
                    handleClick={() => seeMoreClick(item.keyword)}
                />
            </TitleSection>
            <GifGrid data={data} error={error} loading={loading} />
        </TopSectionContainer>
    );
};
