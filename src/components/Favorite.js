import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import MoviesList from "./MoviesList";

export default function Favorite() {
    const history = useHistory();
    const currentUser = useSelector((state) => state.user.currentUser);
    const favoriteMovies = useSelector((state) => state.user.favorites);
    if (!currentUser) {
        history.push("/signin");
    }
    const data = favoriteMovies[currentUser] || "";
    return (
        <>
            {data.length ? (
                <MoviesList data={data} />
            ) : (
                <h2>No Favorite Movies yet</h2>
            )}
        </>
    );
}
