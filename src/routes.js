import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/users"

const Routes = () => {

    return (

        <Router>

            <Switch>
                < Route exact path="/" component={Home} />
                < Route exact path="/users" component={Users} />
            </Switch>

        </Router>

    )
}

export default Routes