import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/index";

function CartItem(props) {
  const dispatch = useDispatch();
  const foodItems = useSelector((state) => state.items);
  const { id } = props;

  const item = foodItems.find((item) => item.id === id);
  const decrementHandler = (e) => {
    dispatch(cartActions.decrement({ id }));
  };

  const incrementHandler = (e) => {
    dispatch(cartActions.increment({ id }));
  };

  const removeItem = (e) => {
    dispatch(cartActions.removeItem({ id }));
  };
  return (
    <div className={classes["cart-item"]}>
      <img className={classes["cart-item__img"]} src={item.imageSrc} />
      <div className={classes["cart-item__name__title_remove"]}>
        <p className={classes["cart-item__title"]}>{item.title}</p>
        <p className={classes["cart-item__price-per-item"]}>
          Price: ${item.price}
        </p>
        <p className={classes["cart-item__remove"]} onClick={removeItem}>
          Remove
        </p>
      </div>
      <div className={classes["cart-item__quantity-actions"]}>
        <p
          className={classes["cart-item__quantity-sub"]}
          onClick={decrementHandler}
        >
          -
        </p>
        <p className={classes["cart-item__quantity"]}>{item.quantity}</p>
        <p
          className={classes["cart-item__quantity-add"]}
          onClick={incrementHandler}
        >
          +
        </p>
      </div>
      <p className={classes["cart-item__sub-total"]}>
        ${item.totalAmount.toFixed(2)}
      </p>
    </div>
  );
}

export default CartItem;
