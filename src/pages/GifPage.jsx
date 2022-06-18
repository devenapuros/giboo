import React from "react";
import { FocusedGifSection } from "../components/FocusedGifSection";
import { Topbar } from "../components/Topbar";

export const GifPage = ({ id }) => {
    return (
        <React.Fragment>
            <Topbar />
            <FocusedGifSection id={id} />
        </React.Fragment>
    );
};
