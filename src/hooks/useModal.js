import { useState } from "react";

export const useModal = () => {
    const [isVisible, setVisible] = useState(false);

    const Show = () => {
        setVisible(true);
        document.body.style.overflow = "hidden";
    };

    const Hide = () => {
        setVisible(false);
        document.body.style.overflow = "auto";
    };

    return { isVisible, Show, Hide };
};
