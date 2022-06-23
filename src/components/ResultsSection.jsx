import React from "react";
import { ResultsContainer, ResultTitle } from "../styles/ResultsSection";
import { GifGrid } from "./GifGrid";
import { useGifGetter } from "../hooks/useGifGetter";
import { OutlineButton } from "./OutlineButton";

export const ResultsSection = ({ q }) => {
    const [data, error, loading, pagination] = useGifGetter(q, 100, 0);
    return (
        <ResultsContainer>
            <ResultTitle>
                <h1>{q} gifs</h1>
                {pagination?.total_count && (
                    <small>{pagination?.total_count} total gifs</small>
                )}
            </ResultTitle>
            <GifGrid data={data} loading={loading} error={error} />
            <OutlineButton label ="Load more"/>
        </ResultsContainer>
    );
};
