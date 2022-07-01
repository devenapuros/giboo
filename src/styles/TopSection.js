import styled from "styled-components";

export const TopSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    /* border-bottom: 1px solid ${({ theme }) => theme.hoverColor}; */
    /* padding-bottom: 2rem; */
    margin-bottom: 2rem;
`;

export const TitleSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    h1 {
        color: ${({ theme }) => theme.textColor};
        font-weight: 600;
        font-size: 2.3rem;
        text-transform: capitalize;
    }
`;
