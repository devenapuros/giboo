import React, { useState } from "react";
import { ExploreSection } from "../components/ExploreSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HomeSectionsTabs } from "../components/HomeSectionsTabs";
import { PopularSearchsSection } from "../components/PopularSearchsSection";

export const MainPage = () => {
    const [currentSection, setCurrentSection] = useState("popular-searchs");

    return (
        <React.Fragment>
            <Header />
            <HomeSectionsTabs
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
            />
            {currentSection === "popular-searchs" && <PopularSearchsSection />}
            {currentSection === "explore" && <ExploreSection />}

            <Footer />
        </React.Fragment>
    );
};
