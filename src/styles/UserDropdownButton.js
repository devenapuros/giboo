import styled, { css } from "styled-components";

export const UserButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    padding: 0.4rem;
    padding-left: 1rem;
    color: ${({ theme }) => theme.whiteColor};
    background-color: transparent;
    border: 0;
    outline: none;
    border-radius: 24px;
    font-size: 0.95rem;
    font-weight: 600;
    transition: all 300ms ease;
    span {
        max-width: 10rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.hoverColor};
    }
    ${({ active, theme }) =>
        active &&
        css`
            background-color: ${theme.hoverColor};
        `}

    @media screen and (max-width: 600px) {
        .user-name {
            max-width: 8.5rem;
        }
    }
`;

export const AvatarContainer = styled.div`
    width: 2.2rem;
    height: 2.2rem;
    min-width: 2.2rem;
    min-height: 2.2rem;
    border-radius: 100%;
    overflow: hidden;
`;

export const UserAvatar = styled.img`
    width: 100%;
    height: 100%;
`;
