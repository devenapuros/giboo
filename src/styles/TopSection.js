import styled from "styled-components";

export const TopSectionContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    overflow: hidden;
`;

export const TitleSection = styled.h1`
    color: ${({ theme }) => theme.textColor};
    font-weight: 600;
    font-size: 2.6rem;
    text-transform: capitalize;
`;
