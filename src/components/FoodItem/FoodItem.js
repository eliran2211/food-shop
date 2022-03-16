import { ReactComponent as CartSvg } from "../../assets/shopping-cart-svg.svg";

import classes from "./FoodItem.module.css";
import ButtonSlide from "../UI/ButtonSlide/ButtonSlide";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";

import { cartActions } from "../../store/index";
import { useDispatch } from "react-redux";

function FoodItem(props) {
  const [isHoverItem, setIsHoverItem] = useState(true);
  const { itemDetails } = props;
  const { imageSrc, title, price, description } = itemDetails;

  const dispatch = useDispatch();

  const ingredients = itemDetails.ingredients
    ? itemDetails.ingredients.map((ingredient) => (
        <li key={Math.random()} className={classes["ingredient"]}>
          {ingredient}
        </li>
      ))
    : [];

  const addFoodToCart = () => {
    dispatch(cartActions.addItem(itemDetails));
  };

  //show description inline or list of ingredients
  let content = "";
  if (description)
    content = <div className={classes["description"]}>{description}</div>;
  else if (ingredients.length > 0)
    content = <ul className={classes["ingredients"]}>{ingredients}</ul>;

  useEffect(() => {
    setIsHoverItem(false);
  }, []);

  return (
    <div
      style={props.style}
      className={classes["food-item"]}
      onMouseEnter={() => setIsHoverItem(true)}
      onMouseLeave={() => setIsHoverItem(false)}
    >
      <img className={classes["food-image"]} src={imageSrc} alt="food image" />
      <div className={classes["food-details"]}>
        <h1>{title}</h1>
        {content}
        <h1>${price}</h1>
      </div>

      <CSSTransition
        in={isHoverItem}
        timeout={{
          enter: 150,
          exit: 350,
        }}
        classNames={{
          enterActive: classes["checkout-enter-active"],
          exitActive: classes["checkout-exit-active"],
          exitDone: classes["checkout-exit"],
          enterDone: classes["checkout-enter"],
        }}
      >
        <ButtonSlide style={{ width: "90%" }} onClick={addFoodToCart}>
          <div className={classes["checkout-btn"]}>
            <CartSvg className={classes["svg-checkout"]} />
            <p>Add to cart</p>
          </div>
        </ButtonSlide>
      </CSSTransition>
    </div>
  );
}

export default FoodItem;
