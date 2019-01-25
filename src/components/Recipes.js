import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Footer from "./Footer";
import Banner from "./Banner";
import Header from "./Header";

import "./custom-css/Recipes.css";

const API_KEY = "8f547e134d4f4ff24b8f4ef8261576e3";
class Recipes extends Component {
  state = {
    recipes_list: []
  };

  componentDidMount = () => {
    let recipeName = this.props.location.recipeTitle;
    let call = `https://www.food2fork.com/api/search?&key=${API_KEY}&q=${recipeName}&count=9`;
    axios
      .get(call)
      .then(response => {
        console.log("response", response);
        this.setState({ recipes_list: response.data.recipes });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log(this.props);
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
                          recipeTitle: recipe.title
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