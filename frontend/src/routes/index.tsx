import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CustomRoute } from "./config/types";
import logo from "../logo.svg";

interface Props {
  routes: CustomRoute[];
}
export const RenderRoutes: React.FC<Props> = ({ routes }) => {
  return (
    <>
      <div className="app">
        <img src={logo} className="app-logo" alt="logo" />
        <div className="app-body">
          <Router>
            <Switch>
              {routes.map((route: CustomRoute, index: number) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                );
              })}
              <Route
                path="*"
                component={() => {
                  return <div>Not Found Page</div>;
                }}
              />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
};

export default RenderRoutes;
