import React, { useState } from "react";

import Filters from "./Filters";
import Header from "./Header";
import MovieList from "./MoviesList";
import Paginate from "./Paginate";
import SearchBar from "./SearchBar";

import { useGetAllMoviesQuery } from "../store/moviesApi";

export default function Main() {
    const [activePage, setActivePage] = useState(0);
    const { data, isLoading, isError } = useGetAllMoviesQuery(activePage + 1);

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>Something went wrong 🤔</h1>;

    const onChange = (e) => setActivePage(e.selected);
    return (
        <div className="container">
            <Header />
            <SearchBar />
            <div className="row mt-4">
                <div className="col-4">
                    <Filters />
                </div>
                <div className="col-8">
                    <MovieList data={data.results} />
                    <Paginate
                        onChange={onChange}
                        activePage={activePage}
                        totalPages={data.total_pages}
                    />
                </div>
            </div>
        </div>
    );
}
