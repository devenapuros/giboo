import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.2rem;
`;

export const InputFieldContainer = styled.div`
    display: flex;
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid #00000000;
    background-color: ${({ theme }) => theme.hoverColor};

    &:focus-within {
        border: 1px solid ${({ theme }) => theme.hoverColor};
    }
`;

export const InputLabel = styled.label`
    font-size: 0.8rem;
    color: ${({ theme }) => theme.textColorAlt};
`;

export const InputTag = styled.input`
    padding: 0.65rem;
    width: 100%;
    border: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.textColor};
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.backgroundColorAlt}
            inset !important;
        -webkit-text-fill-color: ${({ theme }) => theme.textColor};
        caret-color: ${({ theme }) => theme.textColor};
    }
`;
