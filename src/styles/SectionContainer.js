import styled from "styled-components";

export const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    color: ${({ theme }) => theme.textColor};
    .title {
        font-weight: 600;
        color: ${({ theme }) => theme.textColorAlt};
    }

    @media screen and (max-width: 600px) {
        margin: 2.5rem 0.7rem;
    }

    @media screen and (min-width: 600px) {
        margin: 2.5rem 1rem;
    }

    @media screen and (min-width: 768px) {
        margin: 2.5rem 2rem;
    }

    @media screen and (min-width: 992px) {
        margin: 2.5rem 4.5rem;
    }

    @media screen and (min-width: 1200px) {
        margin: 2.5rem 5rem;
    }
`;
