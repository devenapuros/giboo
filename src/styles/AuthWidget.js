import styled, { css } from "styled-components";

export const AuthWidgetContainer = styled.div`
    margin: 0;
    padding: 0;
    position: relative;
`;

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

export const UserMenu = styled.ul`
    position: absolute;
    flex-direction: column;
    gap: 0.4rem;
    top: 115%;
    right: 0;
    width: 13rem;
    display: ${({ visible }) => (visible ? "flex" : "none")};
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.backgroundColorAlt};
    border: 2px solid ${({ theme }) => theme.hoverColor};
    padding: 1rem;
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.shadow};
    li {
        margin: 0;
        padding: 0;
    }
`;

export const MenuOptionButton = styled.button`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0.35rem 0.5rem;
    border-radius: 5px;
    border: 0;
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.textColorAlt};
    font-size: 0.93rem;
    transition: all 300ms ease;
    svg {
        transform: scale(0.9);
        fill: ${({ theme }) => theme.textColorAlt};
    }
    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.hoverColor};
    }
`;
