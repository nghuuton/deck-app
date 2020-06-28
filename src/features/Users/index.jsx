import React from "react";
import MainPage from "./pages/MainPage";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import NotFound from "../../components/not-found";

const Users = (props) => {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path="/users" component={MainPage} />
        <Route path={`${match.url}/add`} component={CreateUser} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Users;
