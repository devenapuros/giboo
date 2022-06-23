import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainTops } from "../components/TopList";

export const MainPage = () => {
    return (
        <React.Fragment>
            <Header />
            <MainTops />
            <Footer />
        </React.Fragment>
    );
};
