import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import MovieSinglePage from "./components/MovieSinglePage";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Main} exact />
                <Route path="/movie/:id" component={MovieSinglePage} />
            </Switch>
        </Router>
    );
}
