import { useReducer } from "react";
import { formActions } from "../Actions/formActions";
import { formReducer } from "../reducers/formReducer";

const initialFormState = {
    fields: {},
    fieldErrors: {},
    response: null,
    fetchError: null,
    loading: false,
};

export function useForm(initialForm, formValidator, doOnSubmit, submitOptions) {
    let prev_state = Object.create(initialFormState);
    prev_state.fields = { ...initialForm };
    let initialErrors = {};
    for (let key in initialForm) {
        initialErrors = { ...initialErrors, [key]: "" };
    }
    prev_state.fieldErrors = initialErrors;
    const [state, formDispatch] = useReducer(formReducer, prev_state);

    const handleChange = (event) => {
        //! console.log(event.target.name, event.target.value);
        formDispatch({
            type: formActions.HANDLE_FIELD_CHANGE,
            payload: { field: event.target.name, value: event.target.value },
        });
    };

    const handleBlur = (event) => {
        formDispatch({
            type: formActions.HANDLE_FIELD_CHANGE,
            payload: { field: event.target.name, value: event.target.value },
        });
        formValidator(state.fields, setError, event);
    };

    const setError = (field, error) => {
        formDispatch({
            type: formActions.SET_FIELD_ERROR,
            payload: { field, error },
        });
    };

    const setFetchError = (error) => {
        formDispatch({
            type: formActions.SET_FETCH_ERROR,
            payload: error,
        });
    };

    const setResponse = (response) => {
        formDispatch({
            type: formActions.SET_RESPONSE,
            payload: response,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let error = formValidator(state.fields, setError, null);
        if (!error) {
            setLoading(true);
            await doOnSubmit(
                state.fields,
                setResponse,
                setFetchError,
                setLoading,
                submitOptions
            );
        }
    };

    const setForm = (form) => {
        formDispatch({
            type: formActions.SET_FORM,
            payload: form,
        });
    };

    const resetForm = () => {
        formDispatch({
            type: formActions.RESET_FORM,
            payload: prev_state,
        });
    };

    const setLoading = (value) => {
        formDispatch({
            type: formActions.SET_LOADING,
            payload: value,
        });
    };

    return {
        state,
        handleChange,
        handleBlur,
        handleSubmit,
        setForm,
        resetForm,
        setError,
    };
}
