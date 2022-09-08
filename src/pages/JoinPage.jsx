import { ImageSection, LoginContainer } from "@/styles/JoinContainer";
import { JoinForm } from "../components/JoinForm";
import { AttributionText } from "../styles/Header";

export const JoinPage = () => {
    return (
        <LoginContainer>
            <JoinForm />
            <ImageSection>
                <AttributionText>
                    Image by{" "}
                    <a
                        href="https://www.instagram.com/killerrabbitmedia/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        @killerrabbitmedia
                    </a>
                </AttributionText>
            </ImageSection>
        </LoginContainer>
    );
};
