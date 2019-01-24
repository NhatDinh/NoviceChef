import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import "./custom-css/Footer.css";

const API_KEY = "8f547e134d4f4ff24b8f4ef8261576e3";
class Recipe extends React.Component {
  state = {
    activeRecipe: []
  };
  
  componentDidMount = () => {
    let recipeID = this.props.location.recipeID;
    let call = `https://www.food2fork.com/api/get?key=${API_KEY}&rId=${recipeID}`;
    axios
      .get(call)
      .then((response) => {
        this.setState({activeRecipe:response.data.recipe});
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  render() {
    console.log(this.props);
    const recipe = this.state.activeRecipe;
    return (
      <div>
      <Header />
      <Banner />
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{recipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:
              <span>
                <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Home</Link>
            </button>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default Recipe;