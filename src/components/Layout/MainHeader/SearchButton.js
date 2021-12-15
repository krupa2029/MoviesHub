import { useRef } from "react";
import { useHistory } from "react-router-dom";
import classes from './SearchButton.module.css';
import { FaSearch } from 'react-icons/fa';


const SearchButton = () => {
  const searchInputRef = useRef();
  let history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    const searchString = searchInputRef.current.value;
    history.push(`/search/${searchString}`);
  };

  return (
    <div >
      <form onSubmit={submitHandler} className={classes.search_container}>
        <input
          type="text"
          placeholder="Search..."
          id="search"
          ref={searchInputRef}
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
