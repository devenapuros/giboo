import { useState, useRef } from "react";
import { useLocation } from "wouter";
import { useClickOutsideListener } from "../hooks/useClickOutsideListener";
import { useForm } from "../hooks/useForm";
import { searchFormValidator } from "../modules/searchFormValidator";
import { Form } from "../styles/SearchForm";
import { SearchCompletion } from "./SearchCompletion";
import { SearchInput } from "./SearchInput";

export const SearchForm = ({ name, padding }) => {
    const [completionVisible, setCompletionVisible] = useState(false);
    const wrapperRef = useRef(null);
    // eslint-disable-next-line no-unused-vars
    const [location, setLocation] = useLocation();
    const showCompletionDialog = () => {
        setCompletionVisible(true);
    };

    const hideCompletionDialog = () => {
        setCompletionVisible(false);
    };

    const doOnSubmit = () => {
        hideCompletionDialog();
        setLocation(`/search/${formController.state.fields.search}`);
        formController.resetForm();
    };

    const formController = useForm(
        { search: "" },
        searchFormValidator,
        doOnSubmit
    );

    useClickOutsideListener(wrapperRef, hideCompletionDialog);

    return (
        <Form
            onSubmit={formController.handleSubmit}
            className={name}
            ref={wrapperRef}
        >
            <SearchInput
                name="search"
                inputClass="search-input"
                value={formController.state.fields.search}
                error={formController.state.fieldErrors.search}
                handleChange={formController.handleChange}
                isFocus={completionVisible}
                handleFocus={showCompletionDialog}
                placeholder="Search anything here"
                padding={padding}
            />
            <SearchCompletion
                visible={completionVisible}
                setVisible={setCompletionVisible}
            />
        </Form>
    );
};
