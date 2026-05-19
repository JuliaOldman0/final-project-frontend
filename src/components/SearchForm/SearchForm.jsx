import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearchSubmit, searchError }) {
  const [keyword, setKeyword] = useState("");

  function handleChange(e) {
    setKeyword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit(keyword);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <input
        className="search-form__input"
        type="text"
        name="search"
        placeholder="Enter topic"
        value={keyword}
        onChange={handleChange}
      />

      <button
        className="search-form__button"
        type="submit"
        disabled={!keyword.trim()}
      >
        Search
      </button>

      {searchError === "Please enter a keyword" && (
        <span className="search-form__error">{searchError}</span>
      )}
    </form>
  );
}

export default SearchForm;
