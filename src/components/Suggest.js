import React from "react";

import MovieList from "./MoviesList";

export default function Suggest({ data }) {
    const sliceToShow = 5;
    return <MovieList data={data.results.slice(0, sliceToShow)} />;
}
