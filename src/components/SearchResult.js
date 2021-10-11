import { useSelector, useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router";
import React, { useEffect } from "react";

import MovieList from "./MoviesList";
import Paginate from "./Paginate";
import SearchWrapper from "./SearchWrapper";

import { setMovies } from "../store/searchSlice";
import { useLazySearchMovieQuery } from "../store/moviesApi";

export default function MovieSinglePage() {
    const [trigger, { data }] = useLazySearchMovieQuery();
    const dispatch = useDispatch();
    const suggest = useSelector((state) => state.search.suggest);
    const movies = useSelector((state) => state.search.movies);
    const location = useLocation();
    const history = useHistory();

    const paramsFromUrl = new URLSearchParams(location);
    const searchFromUrl = paramsFromUrl
        .get("search")
        .slice(1, paramsFromUrl.get("search").indexOf("&"));
    const pageFromUrl = new URLSearchParams(location.search).get("page");

    useEffect(() => {
        trigger({ query: searchFromUrl, page: pageFromUrl });
        if (data) {
            dispatch(setMovies(data));
        }
    }, [data, trigger, dispatch, pageFromUrl, searchFromUrl]);

    const onChange = (e) => {
        history.push(`/search?${searchFromUrl}&page=${e.selected + 1}`);
    };

    let dataToShow;

    if (suggest) dataToShow = suggest.results.slice(0, 5);
    else if (movies) dataToShow = movies.results;
    else dataToShow = [];

    return (
        <div className="container">
            <div className="mt-4 mb-4">
                <SearchWrapper />
            </div>
            {dataToShow && (
                <div className="row mt-4">
                    <div className="col-12">
                        <MovieList data={dataToShow} />

                        {!suggest && movies && (
                            <Paginate
                                onChange={onChange}
                                activePage={pageFromUrl - 1}
                                totalPages={movies.total_pages}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
