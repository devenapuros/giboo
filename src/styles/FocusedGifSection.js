import styled from "styled-components";

export const FocusedGifContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${({ theme }) => theme.textColor};

    @media screen and (max-width: 600px) {
        margin: 6.5rem 0.7rem;
    }

    @media screen and (min-width: 600px) {
        margin: 6.5rem;
    }

    @media screen and (min-width: 768px) {
        margin: 6.5rem;
    }

    @media screen and (min-width: 992px) {
        display: grid;
        grid-template-columns: 7rem auto 18rem;
        gap: 2rem;
        margin: 6.5rem 3rem;
    }

    @media screen and (min-width: 1200px) {
        display: grid;
        grid-template-columns: 10rem auto 20rem;
        gap: 2rem;
        margin: 7.5rem 7rem 0 7rem;
    }
`;

export const GifTitle = styled.h1`
    font-weight: 600;
    text-transform: capitalize;
`;

export const GifDataSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const BtnGroup = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0.6rem;
    margin-top: 1rem;
`;

export const BackLink = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem 1rem 0.4rem 0.6rem;
    width: fit-content;
    height: fit-content;
    border: 0;
    outline: none;
    background-color: ${({ theme }) => theme.backgroundColorAlt};
    color: ${({ theme }) => theme.textColorAlt};
    font-size: 0.81rem;
    border-radius: 24px;
    transition: all 300ms ease;

    svg {
        fill: ${({ theme }) => theme.textColorAlt};
        transform: scale(0.85);
    }
    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.textColorAlt};
        background-color: ${({ theme }) => theme.hoverColor};
        svg {
            fill: ${({ theme }) => theme.textColorAlt};
        }
    }
`;
