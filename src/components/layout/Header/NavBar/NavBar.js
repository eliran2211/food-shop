import { useState } from "react";
import classes from "./NavBar.module.css";
import NavItem from "./NavItem";
import SvgNavItem from "../NavUI/SvgNavItem";
import Cart from "../../../CartShopping/Cart";
import { ReactComponent as LoginSvg } from "../../../../assets/login-svg.svg";
const navItems = [
  {
    id: "ni1",
    title: "Demo",
    dropDownContent: ["Demo1", "Demo2", "Demo3", "Demo4"],
    showContent: false,
  },
  {
    id: "ni2",
    title: "Product",
    dropDownContent: ["Simple Product", "Gallery", "Video", "External"],
    showContent: false,
  },
  {
    id: "ni3",
    title: "Pages",
    dropDownContent: ["About", "Contact", "Wish List"],
    showContent: false,
  },
  {
    id: "ni4",
    title: "Blog",
    dropDownContent: ["Recent Photos", "Blog Post"],
    showContent: false,
  },
];

function NavBar() {
  const [, setHoverNavItems] = useState(false);

  const hoverNavItemHandler = (id) => {
    const navItem = navItems.find((navItem) => navItem.id === id);
    if (navItem) {
      navItem.showContent = true;
      setHoverNavItems(true);
    }
  };

  const exitNavItemHandler = (id) => {
    const navItem = navItems.find((navItem) => navItem.id === id);
    if (navItem) {
      navItem.showContent = false;
      setHoverNavItems(false);
    }
  };

  const items = navItems.map((navItem) => (
    <NavItem
      key={navItem.id}
      onHover={hoverNavItemHandler}
      onExitHover={exitNavItemHandler}
      showContent={navItem.showContent}
      id={navItem.id}
      title={navItem.title}
      content={navItem.dropDownContent.map((item) => (
        <NavItem title={item} />
      ))}
    />
  ));
  return (
    <div className={classes["nav-bar"]}>
      <div className={classes["nav-bar__items"]}>{items}</div>

      <div className={classes["actions"]}>
        <SvgNavItem
          Svg={LoginSvg}
          svgClasses={classes["action-svg-item"]}
          itemClasses={classes["action-item"]}
          title="Login"
        />

        <Cart
          itemClassName={classes["action-item"]}
          svgClassName={classes["action-svg-item"]}
        />
      </div>
    </div>
  );
}

export default NavBar;
