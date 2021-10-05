import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";

export default function MovieList() {
    const movies = useSelector((state) => state.movies.movies);
    return (
        <div className="row">
            {movies.map((movie) => {
                return (
                    <div key={movie.id} className="col-6 mb-4">
                        <MovieItem item={movie} />
                    </div>
                );
            })}
        </div>
    );
}
