import React from "react";
import { LoaderBar, LoaderBox, LoaderContainer } from "../styles/Loader";

export const Loader = () => {
    return (
        <LoaderContainer>
            <LoaderBox className="music">
                <LoaderBar className="bar"></LoaderBar>
                <LoaderBar className="bar"></LoaderBar>
                <LoaderBar className="bar"></LoaderBar>
                <LoaderBar className="bar"></LoaderBar>
                <LoaderBar className="bar"></LoaderBar>
                <LoaderBar className="bar"></LoaderBar>
                <LoaderBar className="bar"></LoaderBar>
                <LoaderBar className="bar"></LoaderBar>
                <LoaderBar className="bar"></LoaderBar>
                <LoaderBar className="bar"></LoaderBar>
            </LoaderBox>
        </LoaderContainer>
    );
};
