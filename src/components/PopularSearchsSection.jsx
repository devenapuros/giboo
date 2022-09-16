import React from "react";
import { SectionContainer } from "../styles/SectionContainer";
import { TopSection } from "./TopSection";
import popularSearchs from "../constants/popularSearchs.json";
export const PopularSearchsSection = () => {
    return (
        <SectionContainer>
            {popularSearchs.map((item) => (
                <TopSection key={item.keyword} item={item} />
            ))}
        </SectionContainer>
    );
};
