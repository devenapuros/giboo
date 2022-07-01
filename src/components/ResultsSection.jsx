import React from "react";
import { ResultsContainer, ResultTitle } from "../styles/ResultsSection";
import { GifGrid } from "./GifGrid";
import { useGifGetter } from "../hooks/useGifGetter";

export const ResultsSection = ({ q }) => {
    const [data, error, loading, pagination] = useGifGetter(q, 48, 0);
    return (
        <ResultsContainer>
            <ResultTitle>
                <h1 className="result-title">{q} gifs</h1>
                {pagination?.total_count && (
                    <small>{pagination?.total_count} total gifs</small>
                )}
            </ResultTitle>
            <GifGrid data={data} loading={loading} error={error} />
        </ResultsContainer>
    );
};
