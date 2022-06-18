import styled from "styled-components";

export const FocusedGifContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    padding: 1rem;
    gap: 1rem;
    color: ${({ theme }) => theme.textColor};
`;

export const GifTitle = styled.h3`
    font-weight: 600;
`;

export const BtnGroup = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0.6rem;
    margin-top: 0.5rem;
    margin-bottom: -0.3rem;
`;

export const ActionBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.35rem 0;
    width: 100%;
    border: 0;
    gap: 0.3rem;
    outline: none;
    border: 1px solid ${({ theme }) => theme.hoverColor};
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColorAlt};
    border-radius: 5px;
    transition: all 300ms ease;
    font-size: 0.82rem;
    svg {
        transform: scale(0.8);
        fill: ${({ theme }) => theme.textColorAlt};
    }
    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.textColor};
        background-color: ${({ theme }) => theme.hoverColor};
        svg {
            fill: ${({ theme }) => theme.textColor};
        }
    }
`;

export const DownloadBtn = styled(ActionBtn)`
    padding: 0.5rem 0;
    background-color: ${({ theme }) => theme.blueColor};
    border: none;
    color: ${({ theme }) => theme.whiteColor};
    font-size: 0.85rem;
    font-weight: 500;
    svg {
        transform: scale(0.9);
        fill: ${({ theme }) => theme.whiteColor};
    }
    &:hover {
        cursor: pointer;
        filter: brightness(1.2);
        color: ${({ theme }) => theme.whiteColor};
        background-color: ${({ theme }) => theme.blueColor};
        svg {
            fill: ${({ theme }) => theme.whiteColor};
        }
    }
`;
