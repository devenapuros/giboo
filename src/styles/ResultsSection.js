import styled from "styled-components";

export const ResultsContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: ${({ theme }) => theme.textColor};

    .load-more {
        font-weight: 600;
        font-size: 1rem;
        color: ${({ theme }) => theme.grayColor};
    }

    @media screen and (max-width: 600px) {
        margin: 6.5rem 0.7rem 1rem 0.7rem;
        div > h1 {
            font-size: 3rem;
        }
        div > span {
            font-size: 1.2rem;
        }
        .result-title {
            font-size: 2rem;
        }
    }

    @media screen and (min-width: 600px) {
        margin: 7rem 1rem 1rem 1rem;
        div > h1 {
            font-size: 3rem;
        }

        div > span {
            font-size: 1.2rem;
        }
    }

    @media screen and (min-width: 768px) {
        margin: 7rem 2rem 1rem 2rem;
        div > h1 {
            font-size: 3rem;
        }

        div > span {
            font-size: 1.2rem;
        }
    }

    @media screen and (min-width: 992px) {
        margin: 7rem 4.5rem 1rem 4.5rem;
        div > h1 {
            font-size: 3rem;
        }

        div > span {
            font-size: 1.2rem;
        }
    }

    @media screen and (min-width: 1200px) {
        margin: 7.5rem 4.5rem 1rem 4.5rem;
        div > h1 {
            font-size: 3.5rem;
        }

        div > small {
            font-size: 1.1rem;
        }
    }
`;

export const ResultTitle = styled.div`
    h1 {
        text-transform: capitalize;
        font-weight: 600;
    }
    small {
        color: ${({ theme }) => theme.grayColor};
    }
`;
