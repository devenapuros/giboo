import styled, { keyframes } from "styled-components";

const shadowEffect = keyframes`
    0% {
        filter: drop-shadow(3px 3px 10px #00a6fba0);
    }

    100% {
        filter: drop-shadow(3px 3px 10px #f72585a0);
    }
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.whiteColor};
    border: 1px solid ${({ theme }) => theme.whiteColor};
    padding: 0 0.6rem;
    gap: 0.5rem;
    width: 100% !important;
    border-radius: 6px;
    transition: all 300ms ease;
    z-index: 1;

    &:focus-within {
        border: 1px solid ${({ theme }) => theme.grayColor};
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.8rem 0;
    border: 0;
    outline: none;
    color: ${({ theme }) => theme.blackColor};
`;
