import React, { useRef, useState } from "react";
import classes from "./NavItem.module.css";

const NavItem = (props) => {
  const [showContent, setShowContent] = useState(false);
  const { content = [] } = props;
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
    <a key={contentItem} href="">
      {contentItem}
    </a>
  ));

  return (
    <div
      onMouseEnter={showContentHandler}
      onMouseLeave={closeContentHandler}
      className={classes["nav-item"]}
    >
      <div ref={titleRef}>{props.children}</div>
      {showContent && <div className={classes["content"]}>{contentList}</div>}
    </div>
  );
};

export default NavItem;
