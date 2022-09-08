import { Column } from "@/components/Layout/Column";
import { FormSlogan, TermsText } from "../styles/JoinForm";
import { LoginBrand } from "../styles/LoginModal";
import { Separator } from "../styles/Separator";
import { LeftArrowIcon } from "./Icons/LeftArrowIcon";
import { Logo } from "./Logo";
import { OutlineButton } from "./OutlineButton";
import { SocialButton } from "./SocialButton";

export const JoinForm = () => {
    return (
        <Column
            gap="2.2rem"
            padding="0 4rem"
            justifyContent="center"
            alignItems="center"
        >
            <LoginBrand className="brand">
                <Logo name="topbar-logo" size="3.7rem" />
                <h1>
                    Gi<span className="purple">b</span>
                    <span className="deeppink">o</span>
                    <span className="orange">o</span>
                </h1>
            </LoginBrand>
            <Separator type="horizontal" />
            <FormSlogan>
                Join an get cool feautes like save favorite gifs and create gif
                collections.
            </FormSlogan>
            <Column width="100%" gap="1rem">
                <SocialButton
                    label="Join with Github"
                    width="100%"
                    padding="0.7rem"
                    leftIcon={<img src="/github-octocat.svg" height="32px" />}
                />
                <SocialButton
                    label="Join with Google"
                    width="100%"
                    padding="0.71rem"
                    leftIcon={<img src="/google-icon.svg" height="32px" />}
                />
            </Column>
            <TermsText>
                By joining, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="">Privacy Policy</a>.
            </TermsText>
            <Separator type="horizontal" />
            <OutlineButton
                label="Go back"
                leftIcon={<LeftArrowIcon />}
                handleClick={() => window.history.back()}
                width="10rem"
                borderRadius="24px"
            />
        </Column>
    );
};
