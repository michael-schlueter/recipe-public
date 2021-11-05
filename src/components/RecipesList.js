import React from "react";
import recipes from "../assets/data";
import { Link } from "react-router-dom";

export default function RecipesList({ searchTerm }) {
  return (
    <div className="recipes-list">
      {recipes
        .filter((recipe) => {
          if (searchTerm === "") {
            return recipe;
          } else if (
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return recipe;
          } else {
            return false;
          }
        })
        .map((recipe) => {
          return (
            <Link to={`/recipes/${recipe.id}`} className="recipe">
              <img src={recipe.imgsrc} alt="food" className="img recipe-img" />
              <h5>{recipe.title}</h5>
              <p>
                Vorb. : {recipe.prepTime} | Kochen: {recipe.cookTime}
              </p>
            </Link>
          );
        })}
    </div>
  );
}
