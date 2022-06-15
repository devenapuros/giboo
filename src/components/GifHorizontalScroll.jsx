import { useGifGetter } from "../hooks/useGifGetter";
import { GifContainer } from "../styles/GifHorizontalScroll";
import { RectangleSkeleton } from "./RectangleSkeleton";
import { Image } from "./Image";

export const GifHorizontalScroll = ({ keyword, limit, offset }) => {
    const [data, error, loading] = useGifGetter(keyword, limit, offset);
    if (loading)
        return (
            <GifContainer>
                <RectangleSkeleton size="100%" />
                <RectangleSkeleton size="100%" />
                <RectangleSkeleton size="100%" />
                <RectangleSkeleton size="100%" />
                <RectangleSkeleton size="100%" />
                <RectangleSkeleton size="100%" />
            </GifContainer>
        );
    if (error) return <GifContainer>{error}</GifContainer>;
    else
        return (
            <GifContainer>
                {data &&
                    data.map((item) => (
                        <Image
                            key={item.id}
                            src={item.images.original.url}
                            contWidth="100%"
                            contHeight="fit-content"
                            imgWidth="100%"
                            imgHeight="auto"
                        />
                    ))}
            </GifContainer>
        );
};
