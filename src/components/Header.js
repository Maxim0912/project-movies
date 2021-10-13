import React from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import PrivateMenu from "./PrivateMenu";

export default function Header({ currentUser }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <Logo />
                {currentUser === null ? (
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/signin" className="nav-link">
                                Sign In
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <>
                        <div className="ml-5">{currentUser}</div>
                        <PrivateMenu currentUser={currentUser} />
                    </>
                )}
            </div>
        </nav>
    );
}
