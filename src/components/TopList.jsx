import React from "react";
import { TopsListContainer } from "../styles/TopList";
import { TopSection } from "./TopSection";
import popularSearchs from "../constants/popularSearchs.json";
import { Row } from "./Layout/Row";
import { OutlineButton } from "./OutlineButton";

export const MainTops = () => {
    return (
        <TopsListContainer>
            <Row margin="0 auto" gap="1rem">
                <OutlineButton
                    label="Popular searchs"
                    width="12rem"
                    borderRadius="25px"
                    active
                />
                <OutlineButton
                    label="Explore"
                    width="12rem"
                    borderRadius="25px"
                />
                <OutlineButton
                    label="Sticker"
                    width="12rem"
                    borderRadius="25px"
                />
            </Row>
            {popularSearchs.map((item) => (
                <TopSection key={item.keyword} item={item} />
            ))}
        </TopsListContainer>
    );
};
