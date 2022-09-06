/* eslint-disable indent */
import styled, { css } from "styled-components";

export const TopbarContainer = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 0.8rem;
    z-index: 1;
    transition: all 300ms ease;

    .search-form {
        display: none;
    }

    ${({ header, theme }) =>
        header &&
        css`
            background-color: ${theme.backgroundColorAlt};
            box-shadow: ${theme.shadow};
            .search-form {
                display: flex;
            }
            .search-form .search-input {
                background-color: ${({ theme }) => theme.hoverColor};
                border: 2px solid ${({ theme }) => theme.hoverColor};
                box-shadow: none;
            }
            .menu-item-btn,
            .user-btn {
                color: ${({ theme }) => theme.textColor} !important;
            }
            .menu-btn svg {
                fill: ${({ theme }) => theme.textColor};
            }
            .theme-toggler {
                svg {
                    fill: ${({ theme }) => theme.textColor} !important;
                }
            }
            .brand {
                color: ${({ theme }) => theme.textColorAlt};
            }
        `};

    @media screen and (max-width: 600px) {
        padding: 0.6rem 0.8rem;
        .brand h1 {
            display: none;
        }
        ${({ header }) =>
            header &&
            css`
                .auth-widget {
                    display: none;
                }
            `}
        ${({ blackice, theme }) =>
            blackice &&
            css`
                .menu-item-btn,
                .user-btn {
                    color: ${theme.textColor};
                }
                .menu-btn svg {
                    fill: ${theme.textColor} !important;
                }
                .theme-toggler {
                    svg {
                        fill: ${({ theme }) => theme.textColor} !important;
                    }
                }
            `};
    }

    @media screen and (min-width: 600px) {
        padding: 0.6rem 0.8rem;

        .search-form {
            width: 36rem;
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

        .search-form {
            width: 36rem;
        }
        .search-form input {
            padding: 0.8rem 0;
        }
        .menu-btn {
            display: flex;
        }
    }

    @media screen and (min-width: 992px) {
        padding: 0.6rem 4rem;

        .search-form {
            max-width: 30rem;
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

        .search-form {
            max-width: 30rem;
        }
        .search-form input {
            padding: 0.8rem 0;
        }
    }
`;

export const Brand = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.whiteColor};
    h1 {
        font-size: 1.9rem;
        font-weight: 700;
    }
    .purple {
        color: #9772fb;
    }
    .deeppink {
        color: #f72585;
    }
    .orange {
        color: orange;
    }
    &:hover {
        cursor: pointer;
    }
`;

export const RightGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    gap: 1rem;
`;

export const MenuBtn = styled.button`
    background-color: ${({ active, theme }) =>
        active ? theme.hoverColor : "transparent"};
    padding: 0.4rem;
    border: 0;
    outline: none;
    border-radius: 100%;
    svg {
        transition: all 300ms ease;
        fill: ${({ theme }) => theme.whiteColor};
        transform: scale(1.1);
    }
    &.showing-menu svg {
        transform: rotate(-180deg);
    }
    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.hoverColor};
    }
`;

export const Menu = styled(RightGroup)`
    transition: all 300ms ease;
    .menu-item-btn {
        padding: 0.3rem 0.7rem;
        color: ${({ theme }) => theme.whiteColor};
        border-radius: 24px;
        font-size: 0.95rem;
        font-weight: 500;
        &:hover {
            background-color: ${({ theme }) => theme.hoverColor};
        }
    }

    .theme-toggler {
        svg {
            fill: ${({ theme }) => theme.whiteColor};
        }
    }

    @media screen and (max-width: 600px) {
        position: absolute;
        top: 0;
        left: 0;
        flex-direction: column;
        padding: 5rem 1rem 1rem 1rem;
        width: 100vw;
        z-index: -10;
        background-color: ${({ theme }) => theme.backgroundColorAlt};
        box-shadow: ${({ theme }) => theme.shadow};
        .menu-item-btn {
            color: ${({ theme }) => theme.textColor};
        }
        ${({ visible }) =>
            visible
                ? css`
                      transform: translate(0);
                  `
                : css`
                      transform: translateY(-100vh);
                  `}
    }

    @media screen and (min-width: 601px) and (max-width: 992px) {
        position: absolute;
        display: flex;
        top: 91%;
        right: 1.3rem;
        flex-direction: column;
        align-items: start;
        padding: 1rem;
        width: 12rem;
        background-color: ${({ theme }) => theme.backgroundColorAlt};
        border: 1px solid ${({ theme }) => theme.hoverColor};
        border-radius: 5px;
        box-shadow: ${({ theme }) => theme.shadow};
        .menu-item-btn {
            color: ${({ theme }) => theme.textColor};
        }
        ${({ visible }) =>
            visible
                ? css`
                      display: flex;
                  `
                : css`
                      display: none;
                  `}
    }
`;
