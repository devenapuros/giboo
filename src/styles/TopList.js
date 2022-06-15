import styled from "styled-components";

export const TopsListContainer = styled.main`
    display: flex;
    flex-direction: column;
    padding: 2rem 0.5rem;
    gap: 2rem;
    color: ${({ theme }) => theme.textColor};
    .title {
        font-weight: 600;
        color: ${({ theme }) => theme.textColor};
    }
`;
