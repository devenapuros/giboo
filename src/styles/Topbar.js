import styled from "styled-components";

export const TopbarContainer = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.8rem;

    .Logo {
        opacity: 0;
    }

    .nav-link {
        color: ${({ theme }) => theme.whiteColor};
        font-weight: 600;
        font-size: 0.9rem;
        text-decoration: none;
    }

    .nav-link.search {
        display: none;
        opacity: 0;
        align-items: center;
    }
`;

export const RightGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    gap: 1rem;
`;
