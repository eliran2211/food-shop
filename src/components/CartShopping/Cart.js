import classes from "./Cart.module.css";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { Fragment, useState } from "react";
import Lottie from "lottie-react";

import { ReactComponent as ShoppingCartSvg } from "../../assets/navigation/navigation-bar/shopping-cart.svg";
import foodBascket from "../../assets/animations/food-bascket.json";

import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import NavItem from "../layout/Header/NavigationBar/NavItem";

const lottieStyle = {
  width: "350px",
  height: "fit-content",
  margin: "2rem auto",
};

function Cart() {
  const [showModal, setShowModal] = useState(false);
  const {
    items: foodItems,
    totalAmount,
    totalProducts,
  } = useSelector((state) => state);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const modalContent = (
    <div className={classes["shopping-cart"]}>
      {foodItems.map((foodItem) => (
        <CartItem key={foodItem.id} id={foodItem.id} />
      ))}
    </div>
  );

  const modal = createPortal(
    <Modal onClose={closeModalHandler}>
      {foodItems.length === 0 && (
        <Fragment>
          <Lottie style={lottieStyle} animationData={foodBascket} />
          <h1 className={classes["no-products-title"]}>
            Your Shopping Cart is empty
          </h1>
        </Fragment>
      )}
      {foodItems.length !== 0 && (
        <div className={classes["cart-items"]}>
          {modalContent}
          <div className={classes["bottom-line"]}></div>
          <div className={classes["summary"]}>
            <div className={classes["summary-item"]}>
              <p className={classes["title"]}>Total:</p>
              <p className={classes["total-amount"]}>
                ${totalAmount.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}
    </Modal>,
    document.getElementById("modal-root")
  );

  return (
    <Fragment>
      <NavItem onClick={openModalHandler}>
        <div className={classes["cart-container"]}>
          <span className={classes["number-of-items-popup"]}>
            {totalProducts}
          </span>
          <ShoppingCartSvg className={classes["cart-svg"]} />
          <p>Cart</p>
        </div>
      </NavItem>

      {showModal && modal}
    </Fragment>
  );
}

export default Cart;
