import { GifContainer } from "../styles/GifHorizontalScroll";
import { RectangleSkeleton } from "./RectangleSkeleton";
import { Image } from "./Image";

export const GifGrid = ({ data, loading, error }) => {
    if (loading)
        return (
            <GifContainer>
                <RectangleSkeleton height="5rem" width="100%" />
                <RectangleSkeleton height="5rem" width="100%" />
                <RectangleSkeleton height="5rem" width="100%" />
                <RectangleSkeleton height="5rem" width="100%" />
                <RectangleSkeleton height="5rem" width="100%" />
                <RectangleSkeleton height="5rem" width="100%" />
                <RectangleSkeleton height="5rem" width="100%" />
                <RectangleSkeleton height="5rem" width="100%" />
                <RectangleSkeleton height="5rem" width="100%" />
                <RectangleSkeleton height="5rem" width="100%" />
                <RectangleSkeleton height="5rem" width="100%" />
            </GifContainer>
        );
    if (error) return <GifContainer>{error}</GifContainer>;
    else
        return (
            <GifContainer>
                {data &&
                    data.map((item) => (
                        <Image
                            hoverable={true}
                            key={item.id}
                            id={item.id}
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
