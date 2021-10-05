import React from "react";

export default function SearchBar() {
    return (
        <div className="input-group mt-4">
            <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
            />
            <button type="button" className="btn btn-outline-primary">
                search
            </button>
        </div>
    );
}
