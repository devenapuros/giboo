import { ResultsContainer, ResultTitle } from "../styles/ResultsSection";
import { GifGrid } from "./GifGrid";
import { useGifGetter } from "../hooks/useGifGetter";

export const ResultsSection = ({ searchString }) => {
    const searchFiltered = searchString.replaceAll("%20", " ");
    const [data, error, loading, pagination] = useGifGetter(
        searchFiltered,
        12,
        0
    );

    return (
        <ResultsContainer>
            <ResultTitle>
                <h1 className="result-title">{searchFiltered} gifs</h1>
                {pagination?.total_count && (
                    <small>{pagination?.total_count} total gifs</small>
                )}
            </ResultTitle>
            <GifGrid data={data} loading={loading} error={error} />
        </ResultsContainer>
    );
};
