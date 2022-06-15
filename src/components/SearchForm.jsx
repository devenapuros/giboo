import React, { useState } from "react";
import { useLocation } from "wouter";
import { useForm } from "../hooks/useForm";
import { Form } from "../styles/SearchForm";
import { SearchCompletion } from "./SearchCompletion";
import { SearchInput } from "./SearchInput";

export const SearchForm = () => {
    const [completionVisible, setCompletionVisible] = useState(false);
    const [location, setLocation] = useLocation();
    const showCompletionDialog = () => {
        setCompletionVisible(true);
    };

    const hideCompletionDialog = () => {
        setCompletionVisible(false);
    };

    const formController = useForm(
        { search: "" },
        () => false,
        () => setLocation("/search")
    );

    return (
        <Form onSubmit={formController.handleSubmit}>
            <SearchInput
                value
                handleChange={formController.handleChange}
                handleFocus={showCompletionDialog}
                handleBlur={hideCompletionDialog}
                placeholder="Start searching for anything here"
            />
            <SearchCompletion visible={completionVisible} />
        </Form>
    );
};
