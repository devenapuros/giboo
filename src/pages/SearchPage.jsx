import React from "react";
import { Redirect } from "wouter";
import { ResultsSection } from "../components/ResultsSection";
import { Topbar } from "../components/Topbar";

export const SearchPage = ({ q }) => {
    if (!q) return <Redirect to="/" />;
    return (
        <React.Fragment>
            <Topbar />
            <ResultsSection q={q} />
        </React.Fragment>
    );
};
