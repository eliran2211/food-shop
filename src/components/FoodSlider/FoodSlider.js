import classes from "./FoodSlider.module.css";
import FoodAction from "./FoodAction";
import FoodBoard from "./FoodBoard";
import useSlider from "../../hooks/use-slider";
import { useState } from "react";

import { ReactComponent as RightSlide } from "../../assets/image-slide/right-arrow-slide.svg";
import { ReactComponent as LeftSlide } from "../../assets/image-slide/left-arrow-slide.svg";

function FoodSlider(props) {
  const {
    itemsInPage,
    actionPosition = "top",
    foodItems,
    width = "40rem",
  } = props;
  const { prevSlide, nextSlide } = useSlider(foodItems.length, itemsInPage);
  const [slidePosition, setSlidePosition] = useState(0);

  return (
    <div className={classes["food-slider"]} style={{ width: width }}>
      <div className={classes[`actions-${actionPosition}`]}>
        <FoodAction
          onClick={() =>
            setSlidePosition((prevState) => prevSlide(slidePosition))
          }
          itemClasses={classes["action-item"]}
          svgClasses={classes["svg-action"]}
          svg={LeftSlide}
        />
        <FoodAction
          onClick={() =>
            setSlidePosition((prevState) => nextSlide(slidePosition))
          }
          itemClasses={classes["action-item"]}
          svgClasses={classes["svg-action"]}
          svg={RightSlide}
        />
      </div>

      <FoodBoard
        positionToMove={slidePosition}
        itemsInPage={itemsInPage}
        items={foodItems}
      />
    </div>
  );
}

export default FoodSlider;
