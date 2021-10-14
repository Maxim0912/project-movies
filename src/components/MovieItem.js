import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { toggleFavorites } from "../store/userSlice";

export default function MovieItem({ item }) {
    const currentUser = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();
    const history = useHistory();

    const addFavorite = () => {
        if (currentUser) {
            dispatch(toggleFavorites({ currentUser, item }));
        } else {
            history.push("/signin");
        }
    };
    return (
        <div className="card" style={{ width: "100%" }}>
            <img
                className="card-img-top card-img--height"
                src={`https://image.tmdb.org/t/p/w500${
                    item.backdrop_path || item.poster_path
                }`}
                alt="poster"
            />
            <div className="card-body">
                <Link className="card-title" to={`/movie/${item.id}`}>
                    {item.title}
                </Link>
                <div className="card-text">Vote: {item.vote_average}</div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={addFavorite}
                >
                    Favorite
                </button>
            </div>
        </div>
    );
}
