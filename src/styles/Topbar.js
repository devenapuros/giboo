import styled, { css } from "styled-components";

export const TopbarContainer = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 1.5rem;
    z-index: 2;
    transition: all 300ms ease;
    .nav-link.search {
        display: none;
        opacity: 0;
        align-items: center;
    }

    .Logo {
        opacity: 1;
    }

    .nav-link {
        color: ${({ theme }) => theme.whiteColor};
        font-weight: 600;
        font-size: 0.9rem;
        text-decoration: none;
    }

    ${({ header, theme }) =>
        header &&
        css`
            background-color: ${theme.blackColor};
            box-shadow: black 0px 10px 10px -10px;
            .nav-link.search {
                display: flex;
                opacity: 1;
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
