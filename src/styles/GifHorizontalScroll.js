import styled from "styled-components";

export const GifContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 0.5rem;
    grid-gap: 0.5rem;
    grid-auto-rows: fit-content;
    grid-auto-flow: row dense;
`;
