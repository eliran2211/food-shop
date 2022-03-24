import React from "react";
import classes from "./NavigationBar.module.css";
import NavItem from "./NavItem";
import { ReactComponent as PhoneSvg } from "../../../../assets/navigation/navigation-bar/phone-contact.svg";
import { ReactComponent as LoginSvg } from "../../../../assets/navigation/navigation-bar/login-svg.svg";

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

const NavigationBar = () => {
  const items = navItems.map((navItem) => (
    <NavItem key={navItem.id} content={navItem.dropDownContent}>
      {navItem.title}
    </NavItem>
  ));

  return (
    <div className={classes["nav-bar"]}>
      <div className={classes["nav-items"]}>{items}</div>
      <div className={classes["contact"]}>
        <PhoneSvg className={classes["contact-svg"]} />
        <p>+1 (800) 312-2121</p>
        <NavItem>Contact Us</NavItem>
      </div>
      <NavItem>
        <div className={classes["login"]}>
          <LoginSvg className={classes["login-svg"]} />
          <p>Login</p>
        </div>
      </NavItem>
    </div>
  );
};

export default NavigationBar;
