import styled, { css } from "styled-components";

export const TopbarContainer = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 1rem;
    z-index: 2;
    transition: all 300ms ease;

    .menu-btn svg {
        fill: ${({ theme }) => theme.whiteColor};
    }

    ${({ header, theme }) =>
        header &&
        css`
            background-color: ${theme.backgroundColorAlt};
            box-shadow: ${theme.shadow};
            .menu-btn svg {
                fill: ${({ theme }) => theme.textColor};
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
