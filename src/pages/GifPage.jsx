import React from "react";
import { FocusedGifSection } from "../components/FocusedGifSection";
import { Topbar } from "../components/Topbar";
import { Footer } from "../components/Footer";

export const GifPage = ({ id }) => {
    return (
        <React.Fragment>
            <Topbar />
            <FocusedGifSection id={id} />
            <Footer />
        </React.Fragment>
    );
};
