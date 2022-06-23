import {
    InputContainer,
    InputFieldContainer,
    InputLabel,
    InputTag,
} from "../styles/Input";

export const Input = ({ label, name, placeholder, type }) => {
    return (
        <InputContainer>
            {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
            <InputFieldContainer>
                <InputTag type={type} placeholder={placeholder} />
            </InputFieldContainer>
        </InputContainer>
    );
};
