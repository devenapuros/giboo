import React from "react";
import { SeeMoreContainer } from "@/styles/SeeMoreSection";
import { FadedSection } from "@/styles/SeeMoreSection";
import { Row } from "./Layout/Row";
import { RightArrow } from "./Icons/RightArrow";
import { OutlineLink } from "./OutlineLink";

export const SeeMoreSection = ({ keyword }) => {
    return (
        <SeeMoreContainer>
            <FadedSection />
            <Row className="solid">
                <OutlineLink
                    label={`See more ${keyword} gifs`}
                    width="20rem"
                    padding="0.8rem"
                    rightIcon={<RightArrow />}
                    anchorRef={`/search/${keyword}`}
                />
            </Row>
        </SeeMoreContainer>
    );
};
