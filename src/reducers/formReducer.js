/* eslint-disable indent */
import { formActions } from "../Actions/formActions";

const handleFieldChange = (state, action) => {
    return {
        ...state,
        fields: {
            ...state.fields,
            [action.payload.field]: action.payload.value,
        },
    };
};

const setFieldError = (state, action) => {
    return {
        ...state,
        fieldErrors: {
            ...state.fieldErrors,
            [action.payload.field]: action.payload.error,
        },
    };
};

const setFetchError = (state, action) => {
    return {
        ...state,
        fetchError: action.payload,
    };
};

const setLoading = (state, action) => {
    return { ...state, loading: action.payload };
};

const setResponse = (state, action) => {
    return {
        ...state,
        response: action.payload,
    };
};

const setForm = (state, action) => {
    return {
        ...state,
        fields: action.payload,
    };
};

export const formReducer = (state, action) => {
    switch (action.type) {
        case formActions.HANDLE_FIELD_CHANGE:
            return handleFieldChange(state, action);
        case formActions.SET_FIELD_ERROR:
            return setFieldError(state, action);
        case formActions.SET_FETCH_ERROR:
            return setFetchError(state, action);
        case formActions.SET_RESPONSE:
            return setResponse(state, action);
        case formActions.SET_LOADING:
            return setLoading(state, action);
        case formActions.SET_FORM:
            return setForm(state, action);
        case formActions.RESET_FORM:
            return action.payload;
        default:
            console.log("default");
            return state;
    }
};
