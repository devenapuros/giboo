import styled, { css } from "styled-components";

export const TopbarContainer = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0.6rem 0.8rem;
    z-index: 2;
    transition: all 300ms ease;

    .menu-btn svg {
        fill: ${({ theme }) => theme.whiteColor};
    }
    .search-form {
        display: none;
    }

    ${({ header, theme }) =>
        header &&
        css`
            background-color: ${theme.backgroundColorAlt};
            box-shadow: ${theme.shadow};

            .join-btn {
                display: none;
            }
            .search-form {
                display: flex;
            }
            .menu-item-btn {
                text-shadow: none !important;
                color: ${({ theme }) => theme.textColor} !important;
            }
        `};

    @media screen and (max-width: 600px) {
        padding: 0.6rem 0.8rem;
    }

    @media screen and (min-width: 600px) {
        padding: 0.6rem 0.8rem;
        .topbar-logo {
            height: 2.5rem;
        }
        .search-form {
            width: 36rem;
        }
        .join-btn {
            display: flex;
        }
        .search-form input {
            padding: 0.8rem 0;
        }
        .menu-btn {
            display: flex;
        }
    }

    @media screen and (min-width: 768px) {
        padding: 0.6rem 1.5rem;
        .topbar-logo {
            height: 2.5rem;
        }
        .search-form {
            width: 36rem;
        }
        .join-btn {
            display: flex;
        }
        .search-form input {
            padding: 0.8rem 0;
        }
        .menu-btn {
            display: none;
        }
    }

    @media screen and (min-width: 992px) {
        padding: 0.6rem 4rem;
        .topbar-logo {
            height: 2.5rem;
        }
        .search-form {
            max-width: 30rem;
        }
        .join-btn {
            display: flex;
        }
        .search-form input {
            padding: 0.8rem 0;
        }
        .menu-btn {
            display: none;
        }
    }

    @media screen and (min-width: 1200px) {
        padding: 0.6rem 4rem;
        .topbar-logo {
            height: 2.8rem;
        }
        .search-form {
            max-width: 30rem;
        }
        .join-btn {
            display: flex;
        }
        .search-form input {
            padding: 0.8rem 0;
        }
        .menu-btn {
            display: none;
        }
    }
`;

export const RightGroup = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    gap: 1.3rem;

    .menu-item-btn {
        padding: 0.3rem 0.7rem;
        color: ${({ theme }) => theme.whiteColor};
        text-shadow: #000000 0px 0px 10px;
        border-radius: 24px;
        font-size: 0.92rem;
        font-weight: 500;
        &:hover {
            background-color: ${({ theme }) => theme.hoverColor};
        }
    }

    .theme-toggler {
        svg.sun {
            fill: ${({ theme }) => theme.yellowColor};
        }
    }
`;
