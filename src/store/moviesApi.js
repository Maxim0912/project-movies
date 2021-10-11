import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY_3 = "3f4ca4f3a9750da53450646ced312397";

export const moviesApi = createApi({
    reducerPath: "moviesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
    endpoints: (build) => ({
        getAllMovies: build.query({
            query: (page = 1) =>
                `discover/movie?api_key=${API_KEY_3}&page=${page}&language=us-US`,
        }),
        getSingleMovieById: build.query({
            query: (id) => `movie/${id}?api_key=${API_KEY_3}&language=us-US`,
        }),
        searchMovie: build.query({
            query: ({ query, page }) =>
                `search/movie?api_key=${API_KEY_3}&language=en-US&query=${query}&page=${page}`,
        }),
    }),
});

export const {
    useGetAllMoviesQuery,
    useGetSingleMovieByIdQuery,
    useLazySearchMovieQuery,
    useSearchMovieQuery,
} = moviesApi;
