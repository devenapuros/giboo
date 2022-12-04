import {
    AttributionText,
    HeaderContainer,
    SearchSection,
} from "../styles/Header";
import { SearchForm } from "./SearchForm";
import { Topbar } from "./Topbar";

export const Header = () => {
    return (
        <HeaderContainer>
            <Topbar allowHeader={true} />
            <SearchSection>
                <h1 className="slogan">
                    From cats to memes. Hundreds and hundreds of funny gifs
                    waiting to be discovered.
                </h1>
                <SearchForm />
            </SearchSection>
            {/* <AttributionText>
                Image by{" "}
                <a
                    href="https://www.instagram.com/killerrabbitmedia/"
                    target="_blank"
                    rel="noreferrer"
                >
                    @pexels
                </a>
            </AttributionText> */}
        </HeaderContainer>
    );
};
