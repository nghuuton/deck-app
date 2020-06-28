import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Users from "./features/Users";
import Navbar from "./components/navbar";
import NotFound from "./components/not-found";
import "./App.scss";
import Banner from "./components/banner";

function App() {
  return (
    <div className="deck-app">
      <Suspense fallback={<div>Loading...</div>} />
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Switch>
          <Redirect exact from="/" to="/users" />
          <Route path="/users" component={Users} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
