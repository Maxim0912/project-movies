import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signout } from "../store/userSlice";

export default function PrivateMenu() {
    const dispatch = useDispatch();
    const userSignOut = () => {
        dispatch(signout());
    };
    return (
        <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/favorite" className="nav-link">
                        Favorite
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/history" className="nav-link">
                        History
                    </Link>
                </li>
                <li className="nav-item">
                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={userSignOut}
                    >
                        Sign Out
                    </button>
                </li>
            </ul>
        </div>
    );
}
