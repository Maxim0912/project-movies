import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import MovieSinglePage from "./components/MovieSinglePage";
import SearchResult from "./components/SearchResult";
import Header from "./components/Header";

export default function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" component={Main} exact />
                <Route path="/search" component={SearchResult} />
                <Route path="/movie/:id" component={MovieSinglePage} />
            </Switch>
        </Router>
    );
}
