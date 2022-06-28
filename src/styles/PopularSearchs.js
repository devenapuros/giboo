import styled from "styled-components";

export const PopularSearchsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
    gap: 0.5rem;
    text-align: start;
`;

export const SecTitle = styled.span`
    font-weight: 600;
    color: ${({ theme }) => theme.textColor};
`;

export const SearchOptionList = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 0.5rem;
    margin-top: 0.5rem;
    /* margin-left: 0.3rem; */
    height: fit-content;
`;
