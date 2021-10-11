import { useDispatch, useSelector } from "react-redux";

import MovieList from "./MoviesList";
import Paginate from "./Paginate";
import SearchWrapper from "./SearchWrapper";

import { useGetAllMoviesQuery } from "../store/moviesApi";
import { setPage } from "../store/pageSlice";

export default function Main() {
    const dispatch = useDispatch();
    const page = useSelector((state) => state.page.page);
    const suggestData = useSelector((state) => state.search.suggest);
    const { data, isLoading, isError } = useGetAllMoviesQuery(page + 1);
    const sliceToShow = 5;

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>Something went wrong 🤔</h1>;

    const dataToShow = suggestData
        ? suggestData.results.slice(0, sliceToShow)
        : data.results;

    const onChange = (e) => dispatch(setPage(e.selected));
    return (
        <div className="container">
            <div className="mt-4 mb-4">
                <SearchWrapper />
            </div>
            {dataToShow && (
                <div className="row mt-4">
                    <div className="col-12">
                        <MovieList data={dataToShow} />

                        {!suggestData && (
                            <Paginate
                                onChange={onChange}
                                activePage={page}
                                totalPages={data.total_pages}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
