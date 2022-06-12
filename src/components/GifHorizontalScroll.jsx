import { useState } from "react";
import { GifContainer } from "../styles/GifHorizontalScroll";
import { RectangleSkeleton } from "./RectangleSkeleton";

export const GifHorizontalScroll = ({ keyword }) => {
    const [loading, setLoading] = useState(true);
    return (
        <GifContainer>
            <RectangleSkeleton size="15rem" />
            <RectangleSkeleton size="15rem" />
            <RectangleSkeleton size="15rem" />
            <RectangleSkeleton size="15rem" />
            <RectangleSkeleton size="15rem" />
            <RectangleSkeleton size="15rem" />
        </GifContainer>
    );
};
