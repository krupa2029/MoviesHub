import { Link } from "react-router-dom/cjs/react-router-dom.min";
import HeaderLogo from "./HeaderLogo";
import classes from "./MainHeader.module.css";
import SearchButton from "./SearchButton";

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
      <Link to={"/"} style={{ textDecoration: 'none' }}>
        <HeaderLogo />
      </Link>
      </div>
      <nav>
        <ul>
          <li>
            <SearchButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
