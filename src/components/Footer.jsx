import React from "react";
import {
    FooterBrand,
    FooterContainer,
    FooterLogo,
    FooterSection,
} from "../styles/Footer";
import { Logo } from "./Logo";

export const Footer = () => {
    return (
        <React.Fragment>
            <FooterContainer>
                <FooterSection className="footer-brand">
                    <FooterLogo className="brand">
                        <Logo name="topbar-logo" size="3.3rem" />
                        <h1>
                            Gi<span className="purple">b</span>
                            <span className="deeppink">o</span>
                            <span className="orange">o</span>
                        </h1>
                    </FooterLogo>
                    <p>
                        From cats to memes. Hundreds and hundreds of funny gifs
                        waiting to be discovered.
                    </p>
                </FooterSection>
                <FooterSection>
                    <h3>Site</h3>
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Search</a>
                        </li>
                        <li>
                            <a href="">Explore</a>
                        </li>
                    </ul>
                </FooterSection>
                <FooterSection>
                    <h3>Account</h3>
                    <ul>
                        <li>
                            <a href="">Login</a>
                        </li>
                        <li>
                            <a href="">Register</a>
                        </li>
                        <li>
                            <a href="">Upload</a>
                        </li>
                    </ul>
                </FooterSection>
                <FooterSection>
                    <h3>Follow us</h3>
                    <ul>
                        <li>Twitter</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </FooterSection>
            </FooterContainer>
            <FooterBrand>
                Developed by&nbsp;<a href="">@devenapuros 🚀</a>
            </FooterBrand>
        </React.Fragment>
    );
};
