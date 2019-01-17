import React from "react";
import "./custom-css/Recipes.css";

const Recipes = props => (
  <div className="recipes-container">
    <div className="row">
      {props.recipes_list.map(recipe => {
        return (
          <div
            key={recipe.title}//index must have a key value being a react child component
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
              <button className="recipe_buttons">Recipe checklist</button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes;