import styled from "styled-components";

export const TopsListContainer = styled.main`
    display: flex;
    flex-direction: column;
    /* padding: 2rem 4.5rem; */
    gap: 1rem;
    color: ${({ theme }) => theme.textColor};
    .title {
        font-weight: 600;
        color: ${({ theme }) => theme.textColorAlt};
    }

    @media screen and (max-width: 600px) {
        margin: 2rem 0.7rem 1rem 0.7rem;
        .top-title {
            font-size: 2rem;
        }
        .see-more-btn {
            width: 9rem;
            padding: 0.4rem;
        }
    }

    @media screen and (min-width: 600px) {
        margin: 2rem 1rem 1rem 1rem;
    }

    @media screen and (min-width: 768px) {
        margin: 2rem 2rem 1rem 2rem;
    }

    @media screen and (min-width: 992px) {
        margin: 2 4.5rem 1rem 4.5rem;
    }

    @media screen and (min-width: 1200px) {
        margin: 2rem 4.5rem 1rem 4.5rem;
    }
`;
