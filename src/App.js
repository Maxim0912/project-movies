import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Filters from "./components/Filters";
import Header from "./components/Header";
import MovieList from "./components/MoviesList";
import SearchBar from "./components/SearchBar";
import { fetchMovies } from "./store/moviesSlice";

export default function App() {
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <>
            {status === "loading" && <h4>Loading...</h4>}
            {error ? (
                <h2>An error occured</h2>
            ) : (
                <div className="container">
                    <Header />
                    <SearchBar />
                    <div className="row mt-4">
                        <div className="col-4">
                            <div className="card" style={{ width: "100%" }}>
                                <div className="card-body">
                                    <h3>Фильтры:</h3>
                                    <Filters />
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <MovieList />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
