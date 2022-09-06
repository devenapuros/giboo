import React from "react";
import { TopsListContainer } from "../styles/TopList";
import { TopSection } from "./TopSection";
import popularSearchs from "../constants/popularSearchs.json";
import { Row } from "./Layout/Row";

export const MainTops = () => {
    return (
        <TopsListContainer>
            <Row margin="0 auto" gap="2rem">
                <h2 className="title">Popular Searchs</h2>
                <h2 className="title">Explore</h2>
                <h2 className="title">Stickers</h2>
            </Row>
            {popularSearchs.map((item) => (
                <TopSection key={item.keyword} item={item} />
            ))}
        </TopsListContainer>
    );
};
