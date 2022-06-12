import { FooterContainer, FooterSection } from "../styles/Footer";
import { Logo } from "./Logo";

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterSection>
                <Logo size="4rem" />
                <p>
                    From cats to memes. Hundreds and hundreds of funny gifs
                    waiting to be discovered.
                </p>
            </FooterSection>
            <FooterSection>
                <h3>Site</h3>
                <ul>
                    <li>Home</li>
                    <li>Search</li>
                </ul>
            </FooterSection>
        </FooterContainer>
    );
};
