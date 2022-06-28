import React from "react";
import { TopsListContainer } from "../styles/TopList";
import { TopSection } from "./TopSection";
import popularSearchs from "../constants/popularSearchs.json";

export const MainTops = () => {
    return (
        <TopsListContainer>
            <h2 className="title">Popular Searchs</h2>
            {popularSearchs.map((item) => (
                <TopSection key={item.keyword} item={item} />
            ))}
        </TopsListContainer>
    );
};
