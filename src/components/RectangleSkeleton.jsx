import React from "react";
import { RectSkeleton } from "../styles/RectangleSkeleton";

export const RectangleSkeleton = ({ width, height, margin, name }) => {
    return (
        <RectSkeleton
            className={name}
            width={width}
            height={height}
            margin={margin}
        />
    );
};
