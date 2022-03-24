import classes from "./Header.module.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import NavigationFood from "./NavigationFood/NavigationFood";

function Header() {
  return (
    <div className={classes.header}>
      <NavigationBar />
      <NavigationFood />
    </div>
  );
}

export default Header;
