// import { useRef } from "react";
import { useHistory } from "react-router-dom";
import classes from './SearchButton.module.css';
import { FaSearch } from 'react-icons/fa';
import { useState } from "react/cjs/react.development";


const SearchButton = () => {
  const [searchInput, setSearchInput] = useState('');
  // const searchInputRef = useRef();
  let history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    // const searchString = searchInputRef.current.value;
    history.push(`/search/${searchInput}`);
    // searchInputRef.current.value='';
    setSearchInput('')
  };

  return (
    <div >
      <form onSubmit={submitHandler} className={classes.search_container}>
        <input
          type="text"
          placeholder="Search..."
          id="search"
          value={searchInput}
          // ref={searchInputRef}
          onChange={(e) => setSearchInput(e.target.value)}
          className={classes.text_field}
        />

        <button type="submit" className={classes.search_button}>
          <FaSearch/>
        </button>
      </form>
    </div>
  );
};

export default SearchButton;
