import HeaderLogo from './HeaderLogo';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <HeaderLogo/>
      <nav>
        <ul>
          <li>
            <button>Search Button</button> 
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;