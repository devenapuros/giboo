import styled from "styled-components";

export const ResultsContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    padding: 0.5rem;
    gap: 2rem;
    color: ${({ theme }) => theme.textColor};
`;

export const ResultTitle = styled.div`
    h1 {
        text-transform: capitalize;
        font-weight: 600;
        font-size: 1.95rem;
    }
    small {
        color: ${({ theme }) => theme.grayColor};
    }
`;
