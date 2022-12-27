import styled from "styled-components";

export const FocusedGifContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 7rem auto 1rem;
    width: 100%;
    max-width: 568px;
    color: ${({ theme }) => theme.textColor};
`;

export const GifTitle = styled.h1`
    font-weight: 600;
    text-transform: capitalize;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
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
