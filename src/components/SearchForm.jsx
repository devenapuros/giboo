import React from "react";
import { Form } from "../styles/SearchForm";
import { SearchInput } from "./SearchInput";

export const SearchForm = () => {
    return (
        <Form>
            <SearchInput placeholder="Start searching for anything here" />
        </Form>
    );
};
