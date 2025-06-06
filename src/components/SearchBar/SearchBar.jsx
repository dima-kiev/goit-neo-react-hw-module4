import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import css from "./SearchBar.module.css";

const SearchBar = ({ callbackOnSubmit }) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!searchText || searchText.trim().length === 0) {
      toast.error("Please, enter the search string.");
    } else {
      callbackOnSubmit(searchText.trim());
    }
  };

  const handleChange = (evt) => {
    setSearchText(evt.target.value);
  };

  return (
    <header className={css.header}>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchText}
          onChange={handleChange}
        />
        <button type="submit" className={css.submitBtn}>
          <FaSearch className={css.searchIcon} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
