import React from "react";
import {
    FooterBrand,
    FooterContainer,
    FooterLink,
    FooterLogo,
    FooterSection,
} from "../styles/Footer";
import { Logo } from "./Logo";
import { Row } from "@/components/Layout/Row";
import { GithubIcon } from "./Icons/GithubIcon";
import { TwitterIcon } from "./Icons/TwitterIcon";

export const Footer = () => {
    return (
        <React.Fragment>
            <FooterContainer>
                <FooterSection className="footer-brand">
                    <FooterLogo className="brand">
                        <Logo name="topbar-logo" size="3rem" />
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
                    <Row gap="2rem" margin="0.5rem 0 0 0">
                        <FooterLink
                            href="https://github.com/devenapuros"
                            target="_blank"
                        >
                            <GithubIcon />
                            Github
                        </FooterLink>
                        <FooterLink
                            href="https://twitter.com/devenapuros"
                            target="_blank"
                        >
                            <TwitterIcon />
                            Twitter
                        </FooterLink>
                    </Row>
                </FooterSection>
                <FooterSection>
                    <h3>Site</h3>
                    <ul>
                        <li>
                            <FooterLink href="">Home</FooterLink>
                        </li>
                        <li>
                            <FooterLink href="">Search</FooterLink>
                        </li>
                        <li>
                            <FooterLink href="">Explore</FooterLink>
                        </li>
                    </ul>
                </FooterSection>
                <FooterSection>
                    <h3>Account</h3>
                    <ul>
                        <li>
                            <FooterLink href="">Login</FooterLink>
                        </li>
                        <li>
                            <FooterLink href="">Register</FooterLink>
                        </li>
                        <li>
                            <FooterLink href="">Upload</FooterLink>
                        </li>
                    </ul>
                </FooterSection>
            </FooterContainer>
            <FooterBrand>
                Developed by&nbsp;<a href="">@devenapuros 🚀</a>
            </FooterBrand>
        </React.Fragment>
    );
};
