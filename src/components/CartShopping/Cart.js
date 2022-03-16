import classes from "./Cart.module.css";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { Fragment, useState } from "react";

import { ReactComponent as ShoppingCartSvg } from "../../assets/shopping-cart-svg.svg";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import SvgNavItem from "../layout/Header/NavUI/SvgNavItem";

function Cart(props) {
  const [showModal, setShowModal] = useState(false);
  const foodItems = useSelector((state) => state.items);
  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const modalContent = (
    <div className={classes["shopping-cart"]}>
      {foodItems.map((foodItem) => (
        <CartItem
          key={foodItem.id}
          itemDetails={{
            imgSrc: foodItem.imageSrc,
            price: foodItem.price,
            title: foodItem.title,
            quantity: foodItem.quantity,
          }}
        />
      ))}
    </div>
  );

  const modal = createPortal(
    <Modal onClose={closeModalHandler}>{modalContent}</Modal>,
    document.getElementById("modal-root")
  );

  return (
    <Fragment>
      <SvgNavItem
        onClick={openModalHandler}
        Svg={ShoppingCartSvg}
        svgClasses={props.svgClassName}
        itemClasses={props.itemClassName}
        content={[<p style={{ color: "white" }}>No products in the cart</p>]}
      />
      {showModal && modal}
    </Fragment>
  );
}

export default Cart;
