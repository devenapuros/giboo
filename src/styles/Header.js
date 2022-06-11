import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 60vh;
    background: url("/public/ibm.gif");
    background-position: 50% 50%;
    background-size: cover;
    color: ${({ theme }) => theme.whiteColor};
`;

export const SearchSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
    width: 90vw;
    .slogan {
        width: 90%;
        line-height: 1.25rem;
        font-weight: bold;
        text-shadow: black 0px 0px 10px;
    }
`;
