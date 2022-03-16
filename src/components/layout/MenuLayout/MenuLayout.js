import classes from "./MenuLayout.module.css";

function MenuLayout(props) {
  return (
    <div className={classes["layout"]}>
      <main>{props.children}</main>
    </div>
  );
}

export default MenuLayout;
