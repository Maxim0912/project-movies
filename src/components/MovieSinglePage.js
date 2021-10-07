import React from "react";
import { useParams } from "react-router";

import { useGetSingleMovieByIdQuery } from "../store/moviesApi";

export default function MovieSinglePage() {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetSingleMovieByIdQuery(id);
    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>Something went wrong 🤔</h1>;
    return <div>{data.original_title}</div>;
}
