import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Footer from "./Footer";
import Banner from "./Banner";
import Header from "./Header";

import "./custom-css/Recipes.css";

const API_KEY = "#";
class Recipes extends Component {
  state = {
    recipes_list: []
  };

  componentDidMount = () => {
    const json = sessionStorage.getItem("cached_recipes");
    const recipes = JSON.parse(json);
    console.log("RECIPES DID MOUNT PROPS", this.props);
    console.log("DID MOUNT local cahed recipes:", recipes);
    if (recipes !== null) {
      this.setState({ recipes_list: recipes });
    } else {
      let recipeKeyword = this.props.location.recipeKeyword;
      console.log("recipeKeyword", recipeKeyword);
      let call = `https://www.food2fork.com/api/search?&key=${API_KEY}&q=${recipeKeyword}&count=9`;
      axios
        .get(call)
        .then(response => {
          console.log("RECIPES response", response);
          this.setState({ recipes_list: response.data.recipes });
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes_list);
    sessionStorage.setItem("cached_recipes", recipes);
    console.log(
      "cached_recipes ON UPDATE",
      sessionStorage.getItem("cached_recipes")
    );
    console.log("componentDidUpdate", this.props);
  };

  render() {
    return (
      <div>
        <Header />
        <Banner />
        <div className="recipes-container">
          <div className="row">
            {this.state.recipes_list.map(recipe => {
              return (
                <div
                  key={recipe.recipe_id} //index must have a key value being a react child component
                  className="col-md-4"
                  style={{ marginBottom: "2rem" }}
                >
                  <div className="recipes__box">
                    <img
                      className="recipe__box-img"
                      src={recipe.image_url}
                      alt={recipe.title}
                    />
                    <div className="recipe__text">
                      <h5 className="recipes__title">
                        {recipe.title.length < 20
                          ? `${recipe.title}`
                          : `${recipe.title.substring(0, 25)}...`}
                      </h5>
                      <p className="recipes__subtitle">
                        Publisher: <span>{recipe.publisher}</span>
                      </p>
                    </div>
                    <button className="recipe_buttons">
                      <Link
                        to={{
                          pathname: `/recipes/#${recipe.recipe_id}`,
                          recipeID: recipe.recipe_id,
                          recipeTitle: recipe.title, 
                          recipeKeyword: this.props.location.recipeKeyword
                        }}
                      >
                        Ingredients Checklist
                      </Link>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Recipes;