import React from "react";
import { DebounceInput } from "react-debounce-input";

export default function SearchBar({ getSearchResult, submitSearch }) {
    return (
        <form onSubmit={submitSearch}>
            <div className="input-group mt-4">
                <DebounceInput
                    debounceTimeout={500}
                    type="search"
                    className="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={getSearchResult}
                />
            </div>
        </form>
    );
}
