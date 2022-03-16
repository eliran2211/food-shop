import classes from "./CartItem.module.css";

function CartItem(props) {
  const { itemDetails } = props;
  const { title, price, imgSrc, quantity } = itemDetails;
  return (
    <div className={classes["cart-item"]}>
      <img className={classes["cart-item__img"]} src={imgSrc} />
      <div className={classes["cart-item__name__title_remove"]}>
        <p className={classes["cart-item__title"]}>{title}</p>
        <p className={classes["cart-item__price-per-item"]}>Price: ${price}</p>
        <p className={classes["cart-item__remove"]}>Remove</p>
      </div>
      <div className={classes["cart-item__quantity-actions"]}>
        <p className={classes["cart-item__quantity-sub"]}>-</p>
        <p className={classes["cart-item__quantity"]}>{quantity}</p>
        <p className={classes["cart-item__quantity-add"]}>+</p>
      </div>
      <p className={classes["cart-item__sub-total"]}>${quantity * price}</p>
    </div>
  );
}

export default CartItem;
