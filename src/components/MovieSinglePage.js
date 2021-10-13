import React from "react";
import { useParams } from "react-router";

import { useGetSingleMovieByIdQuery } from "../store/moviesApi";

export default function MovieSinglePage() {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetSingleMovieByIdQuery(id);
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <h1>Something went wrong 🤔</h1>;
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="card col-7 mt-3 mb-3">
                <img
                    className="card-img-top mt-3"
                    src={`https://image.tmdb.org/t/p/w500${
                        data.backdrop_path || data.poster_path
                    }`}
                    alt=""
                />
                <div className="card-body">
                    <h4 className="card-title">{data.title}</h4>
                    <p className="text-warning">{data.tagline}</p>
                    <p className="card-text">{data.overview}</p>
                    <hr />
                    <ul>
                        <li>vote average: {data.vote_average}</li>
                        <li>release date: {data.release_date}</li>
                        <li>budget: {data.budget}</li>
                        <li>vote average: {data.vote_average}</li>
                        <li>runtime: {data.runtime}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
