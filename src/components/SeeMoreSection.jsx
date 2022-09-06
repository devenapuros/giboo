import React from "react";
import { SeeMoreContainer } from "@/styles/SeeMoreSection";
import { FadedSection } from "@/styles/SeeMoreSection";
import { Row } from "./Layout/Row";
import { OutlineButton } from "./OutlineButton";
import { RightArrow } from "./Icons/RightArrow";

export const SeeMoreSection = ({ label, handleClick }) => {
    return (
        <SeeMoreContainer>
            <FadedSection />
            <Row className="solid">
                <OutlineButton
                    label={`See more ${label} gifs`}
                    width="20rem"
                    padding="0.8rem"
                    rightIcon={<RightArrow />}
                    handleClick={handleClick}
                />
            </Row>
        </SeeMoreContainer>
    );
};
