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
            .menu-btn svg {
                fill: ${({ theme }) => theme.textColor};
            }
            .join-btn {
                display: none;
            }
            .search-form {
                display: flex;
            }
        `};
`;

export const RightGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    gap: 1rem;
`;
