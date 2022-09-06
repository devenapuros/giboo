import { Column } from "@/components/Layout/Column";
import styled from "styled-components";

export const SeeMoreContainer = styled(Column)`
    position: absolute;
    bottom: 0;
    width: 100%;
    justify-content: center;
    align-items: center;
    /* background:red; */

    .solid {
        width: 100%;
        padding: 2.5rem 0;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme.backgroundColor};
    }
`;

export const FadedSection = styled.div`
    display: flex;
    height: 6rem;
    width: 100%;
    background: linear-gradient(
        transparent,
        ${({ theme }) => theme.backgroundColor}
    );
`;
