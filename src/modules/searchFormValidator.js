/* eslint-disable indent */
import { validateSearch } from "../helpers/genericValidator";

export const searchFormValidator = (form, setError, event) => {
    if (event) {
        switch (event.target.name) {
            case "search":
                return validateSearch(event.target.name, form.search, setError);
            default: // ! delete this
                //! console.log("default validation");
                return false;
        }
    } else {
        let searchError = validateSearch("search", form.search, setError);
        //console.log(searchError);
        if (searchError) return true;
        return false;
    }
};
