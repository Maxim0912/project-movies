import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import SearchBar from "./SearchBar";
import { useLazySearchMovieQuery } from "../store/moviesApi";
import { setSearch, setSuggest } from "../store/searchSlice";

export default function SearchWrapper() {
    const [trigger, { data }] = useLazySearchMovieQuery();
    const dispatch = useDispatch();
    const history = useHistory();
    const searchResult = useSelector((state) => state.search.search);
    const redirectPage = 1;

    useEffect(() => {
        if (searchResult) trigger({ query: searchResult, page: redirectPage });
        if (data) {
            dispatch(setSuggest(data));
        }
    }, [searchResult, data, trigger, dispatch]);

    const getSearchFromInput = (e) => {
        dispatch(setSearch(e.target.value));
    };

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(setSuggest(null));
        history.push(`/search?${searchResult}&page=${redirectPage}`);
    };

    return (
        <SearchBar
            getSearchResult={getSearchFromInput}
            submitSearch={submitSearch}
        />
    );
}
