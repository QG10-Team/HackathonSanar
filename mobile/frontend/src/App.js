import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";
import Login from "./views/login";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/shards-dashboards.css";

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      <Route exact path="/login" render={props => <Login {...props} />} />
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
);
