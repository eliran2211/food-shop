import classes from "./Header.module.css";
import NavBar from "./NavBar/NavBar";
import NavFood from "./NavFood/NavFood";

function Header() {
  return (
    <div className={classes.header}>
      <NavBar />
      <NavFood />
    </div>
  );
}

export default Header;
