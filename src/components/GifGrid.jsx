import { GifContainer } from "../styles/GifGrid";
import { Image } from "./Image";
import { GifLoader } from "../components/GifLoader";

export const GifGrid = ({ data, loading, error }) => {
    if (loading) return <GifLoader />;
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
                            alt={item.title}
                            src={item.images.downsized_medium.url}
                            contWidth="100%"
                            contHeight="fit-content"
                            imgWidth="100%"
                            imgHeight="100%"
                        />
                    ))}
            </GifContainer>
        );
};
