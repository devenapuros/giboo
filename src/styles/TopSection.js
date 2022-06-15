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
        color: ${({ theme }) => theme.textColorAlt};
        font-weight: 600;
        text-transform: capitalize;
    }
    button.transparent-btn {
        color: ${({ theme }) => theme.grayColor};
        svg {
            fill: ${({ theme }) => theme.grayColor};
        }
    }
    button.transparent-btn:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.whiteColor};
        svg {
            fill: ${({ theme }) => theme.textColor};
        }
    }
`;
