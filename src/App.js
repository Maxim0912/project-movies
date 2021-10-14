import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Favorite from "./components/Favorite";
import Header from "./components/Header.js";
import History from "./components/History";
import Main from "./components/Main";
import MovieSinglePage from "./components/MovieSinglePage";
import SearchResult from "./components/SearchResult";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import { init } from "./store/userSlice";

export default function App() {
    const dispatch = useDispatch();
    dispatch(init());
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" component={Main} exact />
                <Route path="/search" component={SearchResult} />
                <Route path="/movie/:id" component={MovieSinglePage} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/history" component={History} />
                <Route path="/favorite" component={Favorite} />
            </Switch>
        </Router>
    );
}
