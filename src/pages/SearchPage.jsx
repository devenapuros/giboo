import React, { useEffect } from "react";
import { Redirect } from "wouter";
import { Footer } from "../components/Footer";
import { ResultsSection } from "../components/ResultsSection";
import { Topbar } from "../components/Topbar";

export const SearchPage = ({ q }) => {
    if (!q) return <Redirect to="/" />;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <Topbar />
            <ResultsSection searchString={q} />
            <Footer />
        </React.Fragment>
    );
};
