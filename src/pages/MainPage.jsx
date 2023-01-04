import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HomeSectionsTabs } from "../components/HomeSectionsTabs";
import { PopularSearchsSection } from "../components/PopularSearchsSection";

export const MainPage = () => {
    return (
        <React.Fragment>
            <Header />
            <HomeSectionsTabs />
            <PopularSearchsSection />
            <Footer />
        </React.Fragment>
    );
};
