import React from "react";

import MovieItem from "./MovieItem";

export default function MovieList({ data }) {
    return (
        <div className="row">
            {data.map((movie) => {
                return (
                    <div key={movie.id} className="col-6 mb-4">
                        <MovieItem item={movie} />
                    </div>
                );
            })}
        </div>
    );
}
