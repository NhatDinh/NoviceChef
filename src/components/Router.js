import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Recipe from "./Recipe";
import Recipes from "./Recipes";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipes/?search=:recipeName" component={Recipes}/>
      <Route path="/recipes/#:recipeID" component={Recipe}/>
    </Switch>
  </BrowserRouter>
);

export default Router;

