import {
    CardBody,
    CloseModalBtn,
    LoginWithGoogleBtn,
    ModalBackground,
    ModalCard,
    ModalForm,
    ModalTabContainer,
    SmallText,
} from "../styles/LoginModal";
import { CloseIcon } from "./Icons/CloseIcon";
import { Input } from "./Input";
import { PrimaryButton } from "./PrimaryButton";
import { Logo } from "./Logo";
import { Separator } from "../styles/Separator";
import { GoogleIcon } from "./Icons/GoogleIcon";
import { PassInput } from "./PassInput";
import { TabButton } from "./TabButton";
import { useState } from "react";

export const LoginModal = ({ modalController }) => {
    const [currentTab, setCurrentTab] = useState("login");
    if (!modalController)
        return (
            <small style={{ backgroundColor: "red", color: "white" }}>
                No modal controller
            </small>
        );

    return (
        <ModalBackground visible={modalController.visible}>
            <ModalCard>
                <CloseModalBtn onClick={modalController.Hide}>
                    <CloseIcon />
                </CloseModalBtn>
                <ModalTabContainer>
                    <TabButton
                        label="Login"
                        value="login"
                        currentValue={currentTab}
                        handleClick={setCurrentTab}
                    />
                    <TabButton
                        label="Register"
                        value="register"
                        currentValue={currentTab}
                        handleClick={setCurrentTab}
                    />
                </ModalTabContainer>
                <CardBody
                    visible={currentTab === "login"}
                    className="card-body"
                >
                    <Logo size="4rem" />
                    <SmallText>Login with your email account</SmallText>
                    <ModalForm>
                        <Input label="Email" placeholder="Enter your email" />
                        <Input
                            label="Password"
                            placeholder="Enter your password"
                        />
                        <PrimaryButton name="submit-btn" label="Login" />
                    </ModalForm>
                    <Separator type="horizontal" />
                    <SmallText>Login with your social media</SmallText>
                    <LoginWithGoogleBtn>
                        <GoogleIcon />
                        Google
                    </LoginWithGoogleBtn>
                </CardBody>
                <CardBody visible={currentTab === "register"} className="card-body">
                    <Logo size="4rem" />
                    <SmallText>Join and get cool features</SmallText>
                    <ModalForm>
                        <Input
                            label="Username"
                            type="text"
                            placeholder="Enter your username"
                        />
                        <Input
                            label="Email"
                            type="email"
                            placeholder="Enter your email"
                        />
                        <PassInput
                            label="Password"
                            placeholder="Enter your password"
                        />
                        <PassInput
                            label="Confirm password"
                            placeholder="Enter your password"
                        />
                        <PrimaryButton name="submit-btn" label="Join" />
                    </ModalForm>
                </CardBody>
            </ModalCard>
        </ModalBackground>
    );
};
