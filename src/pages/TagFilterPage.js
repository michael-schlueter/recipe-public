import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import recipes from "../assets/data";

export default function TagFilterPage() {
  let { tag } = useParams();
  return (
    <main class="page">
      <div>
        <h4>{tag}</h4>
        {/* <!-- recipes list --> */}
        <div class="recipes-list">
          {recipes
            .filter((recipe) => recipe.tags.indexOf(tag) !== -1)
            .map((filteredRecipe) => {
              return (
                <Link to={`/recipes/${filteredRecipe.id}`} className="recipe">
                  <img
                    src={filteredRecipe.imgsrc}
                    alt="food"
                    className="img recipe-img"
                  />
                  <h5>{filteredRecipe.title}</h5>
                  <p>
                    Vorb. : {filteredRecipe.prepTime} | Kochen:{" "}
                    {filteredRecipe.cookTime}
                  </p>
                </Link>
              );
            })}
        </div>
        {/* <!-- end recipes list --> */}
      </div>
    </main>
  );
}
