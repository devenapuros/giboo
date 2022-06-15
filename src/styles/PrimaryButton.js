import styled from "styled-components";

export const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0.8rem;
    border: 0;
    outline: none;
    border-radius: 5px;
    font-size: 0.88rem;
    font-weight: 600;
    transition: all 300ms ease;
    &:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }
`;

export const PrimaryBtn = styled(Btn)`
    background-color: ${({ theme }) => theme.blueColor};
    color: ${({ theme }) => theme.whiteColor};
`;
