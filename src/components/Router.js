import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Recipe from "./Recipe";
import Footer from "./Footer";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipes/#:recipeID" component={Recipe}/>
      <Route path="/" component={Footer}/>
    </Switch>
  </BrowserRouter>
);

export default Router;

