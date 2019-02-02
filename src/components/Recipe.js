import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import YouTube from "react-youtube";

import "./custom-css/Recipe.css";

class Recipe extends React.Component {
  state = {
    activeRecipe: [],
    ingredients: [],
    activeVideo: {}
  };

  getIngredients = () => {
    const API_KEY = "8f547e134d4f4ff24b8f4ef8261576e3";
    const APP_ID = "43d1b03e";
    const APP_KEY = "eab4de56a7d88b4443c6ea2176e85c5c";
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
        //console.log("eda call: ", eda_call, " - response:", response);
        //console.log("ingredients", response.data.hits[0].recipe.ingredients);
        this.setState({
          ingredients: response.data.hits[0].recipe.ingredients
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getCookingTutorials = () => {
    const yt_key = "AIzaSyDBgUQvcV7cCKJs5LY1eYF3E8kLQAJoIXs";
    const maxResults = 10;
    var queryTerm =
      this.props.location.recipeTitle;
    console.log("QUERY TERM:", queryTerm);
    let youtube_call =
      `https://www.googleapis.com/youtube/v3/search?key=${yt_key}&part=snippet,id&order=viewCount&maxResults=${maxResults}&q=${queryTerm}`;
    axios
      .get(youtube_call)
      .then(response => {
        console.log("URL:", youtube_call, "YOUTUBE VIDEOS RES: ", response);
        this.setState({
          activeVideo: response.data.items[0]
        });
        //console.log("ACTIVE: ", this.state.activeVideo.id.);
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    this.getIngredients();
    this.getCookingTutorials();
  };

  render() {
    //console.log("Rendered recipe", this.props);
    const recipe = this.state.activeRecipe;
    const ingredients = this.state.ingredients;
    const opts = {
      height: "500px",
      width: "100%",
      playerVars: {
        autoplay: 1
      }
    };
    return (
      <div>
        <Header />
        <Banner />
        <div className="row recipe-container">
          <div className="col-xl">
            <button className="active-recipe__button">
              <Link
                to={{
                  pathname: `/recipes/?search=${
                    this.props.location.recipeKeyword
                  }"`,
                  recipeKeyword: `${this.props.location.recipeKeyword}`
                }}
              >
                Back to <strong>{this.props.location.recipeKeyword} </strong>
                recipes
              </Link>
            </button>
          <YouTube
        videoId="AmHE1U2Lv9w"
        opts={opts}
        onReady={this._onReady}
      />
          </div>
          <div className="col">
            <div className="checklist-container">
              {recipe !== 0 && (
                <h2 className="active-recipe__title">{recipe.title}</h2>
              )}

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