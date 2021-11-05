import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import recipes from "../assets/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faClock,
  faStopwatch,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

export default function RecipeDetailsPage() {
  let { id } = useParams();

  return (
    <main class="page">
      <div class="recipe-page">
        <section class="recipe-hero">
          <a href={recipes[id].quelle} target="_blank" rel="noreferrer">
            <img
              src={recipes[id].imgsrc}
              class="img recipe-hero-img"
              alt="pancakes"
            />
          </a>
          <article>
            <h2>{recipes[id].title}</h2>
            <p>{recipes[id].description}</p>
            {/* <!-- recipe icons --> */}
            <div class="recipe-icons">
              {/* <!-- single recipe icon --> */}
              <article>
                <FontAwesomeIcon className="fa-icons" icon={faClock} />
                <h5>zubereitungszeit</h5>
                <p>{recipes[id].prepTime}</p>
              </article>
              {/* <!-- single recipe icon --> */}
              <article>
                <FontAwesomeIcon className="fa-icons" icon={faStopwatch} />
                <h5>koch / backzeit</h5>
                <p>{recipes[id].cookTime}</p>
              </article>
              {/* <!-- single recipe icon --> */}
              <article>
                <FontAwesomeIcon className="fa-icons" icon={faUserFriends} />
                <h5>portionen</h5>
                <p>{recipes[id].servings}</p>
              </article>
            </div>
            {/* <!-- recipe tags --> */}
            <div class="recipe-tags">
              {recipes[id].tags.map((tag) => (
                <Link to={`/tags/${tag}`}>{tag}</Link>
                // <a href="tag-template.html">{tag}</a>
              ))}
            </div>
          </article>
        </section>
        {/* <!-- recipe content --> */}
        <section class="recipe-content">
          <article>
            <h4>anleitung</h4>
            {/* <!-- single instruction --> */}
            {recipes[id].instructions.map((instruction, index) => (
              <div class="single-instruction">
                <header>
                  <p>schritt {index + 1}</p>
                  <div></div>
                </header>
                <p>{instruction}</p>
              </div>
            ))}
          </article>
          <article class="second-column">
            <div>
              <h4>zutaten</h4>
              {recipes[id].ingredients.map((ingredient) => (
                <p class="single-ingredient">{ingredient}</p>
              ))}
            </div>
            <div>
              <h4>kochutensilien</h4>
              {recipes[id].tools.map((tool) => (
                <p class="single-tool">{tool}</p>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
