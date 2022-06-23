import { useState } from "react";
import {
    InputContainer,
    InputFieldContainer,
    InputLabel,
    InputTag,
} from "../styles/Input";
import { TransparentButton } from "./TransparentButton";

export const PassInput = ({ label, name, placeholder }) => {
    const [passVisible, setPassVisible] = useState(false);
    return (
        <InputContainer>
            {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
            <InputFieldContainer>
                <InputTag type="password" placeholder={placeholder} />
                {passVisible && <TransparentButton />}
            </InputFieldContainer>
        </InputContainer>
    );
};
