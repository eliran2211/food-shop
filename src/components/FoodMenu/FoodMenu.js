import classes from "./FoodMenu.module.css";
import FoodItem from "../FoodItem/FoodItem";
import MenuLayout from "../../components/layout/MenuLayout/MenuLayout";

function FoodMenu(props) {
  const { title, foodItems } = props;
  const items = foodItems.map((item) => (
    <FoodItem style={{ width: "17rem" }} key={item.id} itemDetails={item} />
  ));
  return (
    <div className={classes["menu"]}>
      <h1 className={classes["title"]}>{title}</h1>
      <MenuLayout>
        <div className={classes["food-menu"]}>{items}</div>
      </MenuLayout>
    </div>
  );
}

export default FoodMenu;
