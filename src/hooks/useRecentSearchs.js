import { useEffect, useState } from "react";

export const useRecentSearchs = () => {
    let storedSearchs = JSON.parse(localStorage.getItem("gp-recent-searchs"));
    const [searchs, setSearchs] = useState(new Set(storedSearchs));

    const addSearch = (search) => {
        let aux_set = new Set(searchs);
        aux_set.add(search);
        setSearchs(aux_set);
        if (aux_set.size > 11) {
            let aux_array = Array.from(aux_set);
            setSearchs(new Set(aux_array.filter((item, index) => index !== 0)));
        }
    };

    const deleteSearch = (search) => {
        let aux_set = new Set(searchs);
        aux_set.delete(search);
        setSearchs(aux_set);
    };

    useEffect(() => {
        localStorage.setItem(
            "gp-recent-searchs",
            JSON.stringify(Array.from(searchs))
        );
    }, [searchs]);

    return { searchs, addSearch, deleteSearch };
};
