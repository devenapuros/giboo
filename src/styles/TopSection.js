import styled from "styled-components";

export const TopSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    width: 100%;
    button {
        color: ${({ theme }) => theme.grayColor};
    }
`;

export const TitleSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    h2 {
        color: ${({ theme }) => theme.textColor};
        font-weight: 600;
        text-transform: capitalize;
    }
    button:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.whiteColor};
        svg {
            fill: ${({ theme }) => theme.textColor};
        }
    }
`;
