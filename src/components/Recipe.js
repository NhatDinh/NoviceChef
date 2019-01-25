import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import "./custom-css/Footer.css";

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
        <div className="row active-recipe">
          <div className="col">
            {recipe !== 0 && (
              <div className="active-recipe">
                <img
                  className="active-recipe__img"
                  src={recipe.image_url}
                  alt={recipe.title}
                />

                <h4 className="active-recipe__publisher">
                  Publisher: <span>{recipe.publisher}</span>
                </h4>
                <p className="active-recipe__website">
                  Website:
                  <span>
                    <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
                  </span>
                </p>
              </div>
            )}
          </div>
          <div className="col">
            <div className="container">
              {recipe !== 0 && (
                <h2 className="active-recipe__title">{recipe.title}</h2>
              )}
              <ul>
                {this.state.ingredients.map((ingredient, index) => {
                  return (
                    <form  key={index}>
                      <label htmlFor={index}>
                        {ingredient.text} ( {ingredient.weight} )
                        <input type="checkbox" id={index}/>
                      </label>
                    </form>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Recipe;