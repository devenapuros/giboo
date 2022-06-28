import styled from "styled-components";

export const GifContainer = styled.div`
    columns: 4 120px;
    column-gap: 1rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 600px) {
        columns: 2 120px;
        column-gap: 0.7rem;
    }

    @media screen and (min-width: 600px) {
        columns: 3 120px;
        column-gap: 1rem;
    }

    @media screen and (min-width: 768px) {
        columns: 3 120px;
        column-gap: 1rem;
    }

    @media screen and (min-width: 992px) {
        columns: 3 120px;
    }

    @media screen and (min-width: 1200px) {
        columns: 3 120px;
        column-gap: 2rem;
        .gif-skeleton {
            margin-bottom: 2rem;
        }
    }
`;
