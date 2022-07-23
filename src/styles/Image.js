import styled from "styled-components";

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 1rem;
    width: ${({ width }) => width || "3rem"};
    height: ${({ height }) => height || "3rem"};
    min-width: ${({ width }) => width || "3rem"};
    background-color: ${({ theme }) => theme.hoverColor};
    &:hover {
        cursor: ${({ hoverable }) => (hoverable ? "pointer" : "default")};
    }

    @media screen and (max-width: 600px) {
        margin-bottom: 0.7rem;
        min-height: 3.5rem;
    }

    @media screen and (min-width: 600px) {
        margin-bottom: 1rem;
        min-height: 5rem;
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 1.5rem;
        min-height: 8rem;
    }

    @media screen and (min-width: 992px) {
        margin-bottom: 2rem;
        min-height: 9rem;
    }

    @media screen and (min-width: 1200px) {
        margin-bottom: 2rem;
        min-height: 10rem;
    }
`;

export const Img = styled.img`
    color: ${({ theme }) => theme.grayColor};
    font-size: 0.8rem;
    width: ${({ width }) => width || "3rem"};
    height: ${({ height }) => height || "3rem"};
    min-width: ${({ width }) => width || "3rem"};
    min-height: ${({ height }) => height || "3rem"};
`;
