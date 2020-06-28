import React from "react";
import MainPage from "./pages/MainPage";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import NotFound from "../../components/not-found";
import { Container } from "reactstrap";

const Users = (props) => {
  const match = useRouteMatch();

  return (
    <Container>
      <Switch>
        <Route exact path="/users" component={MainPage} />
        <Route path={`${match.url}/add`} component={CreateUser} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
};

export default Users;
