import React, { useState } from "react";
import { Link } from "react-router-dom";
import RecipesList from "../components/RecipesList";
import { tags } from "../assets/data";

export default function MainPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="page">
      {/* <!-- header --> */}
      <header className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1>muddi's rezepte-ecke</h1>
            <h4>nur die leckersten rezepte</h4>
          </div>
        </div>
      </header>
      {/* <!-- end of header --> */}
      {/* start of search bar */}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label for="name" className="form-label"></label>
          <input
            placeholder="Suche..."
            type="text"
            name="name"
            id="name"
            className="form-input"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      </form>
      {/* end of search bar */}
      {/* <!-- recipes container --> */}
      <section className="recipes-container">
        {/* <!-- tag container --> */}
        <div className="tags-container">
          <h4>kategorien</h4>
          <div className="tags-list">
            {tags.map((tag) => (
              <Link to={`/tags/${tag}`}>{tag}</Link>
            ))}
          </div>
        </div>
        {/* <!-- end of tag container --> */}
        <RecipesList searchTerm={searchTerm} />
      </section>
      {/* <!-- end of recipes container --> */}
    </main>
  );
}
