import classes from "./FoodBoard.module.css";
import FoodItem from "../FoodItem/FoodItem";

function FoodBoard(props) {
  const { itemsInPage } = props;
  const translatePosSlide = `translateX(${props.positionToMove}%)`;

  const items = props.items.map((foodItem, index) => (
    <FoodItem
      key={foodItem.id}
      style={{
        position: "absolute",
        width: `${100 / itemsInPage}%`,
        left: `${(100 / itemsInPage) * index}%`,
      }}
      itemDetails={foodItem}
    />
  ));

  return (
    <div className={classes["food-board"]}>
      <div
        className={classes["slides"]}
        style={{ transform: translatePosSlide }}
      >
        {items}
      </div>
    </div>
  );
}

export default FoodBoard;
