import styled from "styled-components";

export const TopsListContainer = styled.main`
    display: flex;
    flex-direction: column;
    padding: 2rem 4.5rem;
    gap: 1rem;
    color: ${({ theme }) => theme.textColor};
    .title {
        font-weight: 600;
        color: ${({ theme }) => theme.textColorAlt};
    }
`;
