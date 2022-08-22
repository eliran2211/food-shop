import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.css";

const NavItem = (props) => {
  const [showContent, setShowContent] = useState(false);
  const { content = [], href = "#" } = props;
  const titleRef = useRef();

  const showContentHandler = () => {
    titleRef.current.style.opacity = "0.7";
    if (content.length !== 0) setShowContent(true);
  };

  const closeContentHandler = () => {
    titleRef.current.style.opacity = "1";
    setShowContent(false);
  };

  const contentList = content.map((contentItem) => (
    <NavLink key={contentItem} to="/" className={classes["content"]}>
      {contentItem}
    </NavLink>
  ));

  return (
    <div
      className={classes["nav-item-container"]}
      onMouseEnter={showContentHandler}
      onMouseLeave={closeContentHandler}
      onClick={props.onClick || null}
    >
      <NavLink to={href} className={classes["nav-item"]}>
        <div ref={titleRef}>{props.children}</div>
      </NavLink>
      {showContent && <div className={classes["contents"]}>{contentList}</div>}
    </div>
  );
};

export default NavItem;
