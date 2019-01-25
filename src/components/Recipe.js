import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";

import "./custom-css/Recipe.css";

const API_KEY = "8f547e134d4f4ff24b8f4ef8261576e3";
const APP_ID = "43d1b03e";
const APP_KEY = "eab4de56a7d88b4443c6ea2176e85c5c";
class Recipe extends React.Component {
  state = {
    activeRecipe: [],
    ingredients: []
  };

  componentDidMount = () => {
    let recipeID = this.props.location.recipeID;
    let call = `https://www.food2fork.com/api/get?key=${API_KEY}&rId=${recipeID}`;
    let recipeName = this.props.location.recipeTitle;
    let eda_call = `https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    axios
      .get(call)
      .then(response => {
        this.setState({ activeRecipe: response.data.recipe });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get(eda_call)
      .then(response => {
        console.log("eda call: ", eda_call, " - response:", response);
        console.log("ingredients", response.data.hits[0].recipe.ingredients);
        this.setState({
          ingredients: response.data.hits[0].recipe.ingredients
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log(this.props);
    const recipe = this.state.activeRecipe;
    const ingredients = this.state.ingredients;
    return (
      <div>
        <Header />
        <Banner />
        <div className="row recipe-container">
          <div className="col">
            {recipe !== 0 && (
              <div className="active-recipe">
                <img
                  className="active-recipe__img"
                  src={recipe.image_url}
                  alt={recipe.title}
                />
              </div>
            )}
          </div>
          <div className="col">
            <div className="checklist-container">
    
              {recipe !== 0 && (
                <h2 className="active-recipe__title">{recipe.title}</h2>
              )}
              {/*
              <h3 className="done" aria-hidden="true">
                Checked:
              </h3>
              <h3 className="undone" aria-hidden="true">
                Need more:
              </h3> */}
              {ingredients.map((ingredient, index) => {
                return (
                  <form key={index}>
                    <input className="checkboxes" type="checkbox" id={index} />
                    <label className="custom-label" htmlFor={index}>
                      <strong>{ingredient.text.replace("*", "")} </strong> ({" "}
                      {Math.round((ingredient.weight / 453.592) * 100) / 100}{" "}
                      ounces )
                    </label>
                    <hr />
                  </form>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Recipe;