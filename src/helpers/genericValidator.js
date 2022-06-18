const formErrors = {
    EMPTY_FIELD: "@search/empty_filed",
};

export const validateSearch = (field, value, setError, required = true) => {
    if (!value.trim()) {
        if (required) {
            setError(field, formErrors.EMPTY_FIELD);
            return true;
        } else {
            setError(field, "");
            return false;
        }
    } else {
        setError(field, "");
        return false;
    }
};
