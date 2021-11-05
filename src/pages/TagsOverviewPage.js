import React from "react";
import { Link } from "react-router-dom";
import recipes, { tags } from "../assets/data";

export default function TagsOverviewPage() {
  const countTaggedRecepts = (tag) => {
    let count = 0;
    recipes.forEach((recipe) => {
      if (recipe.tags.indexOf(tag) !== -1) {
        count += 1;
      }
    });
    return count;
  };

  return (
    <main class="page">
      <section class="tags-wrapper">
        {tags.map((tag) => (
          <Link to={`/tags/${tag}`} class="tag">
            <h5>{tag}</h5>
            <p>{countTaggedRecepts(tag)} Rezepte</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
