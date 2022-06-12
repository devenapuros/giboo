import { TitleSection, TopSectionContainer } from "../styles/TopSection";
import { GifHorizontalScroll } from "./GifHorizontalScroll";
import { RightArrow } from "./Icons/RightArrow";
import { TransparentButton } from "./TransparentButton";

export const TopSection = ({ keyword }) => {
    return (
        <TopSectionContainer>
            <TitleSection>
                <h2>{keyword || "no-keyword"}</h2>
                <TransparentButton label="See all" icon={<RightArrow />} />
            </TitleSection>
            <GifHorizontalScroll keyword={keyword} />
        </TopSectionContainer>
    );
};
