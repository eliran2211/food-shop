import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SvgNavItem.module.css";
import DropDownContent from "../NavBar/DropDownContent";
function SvgNavItem(props) {
  const {
    Svg,
    svgClasses = "",
    itemClasses = "",
    title = "",
    content = "",
    href = "#",
  } = props;
  const [showContent, setShowContent] = useState(false);

  const navItemClasses = `${itemClasses || ""} ${classes["nav-item"]}`;
  const svgIconClasses = `${classes["svg-icon"]} ${svgClasses || ""}`;

  const hoverSvgHandler = () => {
    setShowContent(true);
  };

  const exitHoverSvgHandler = () => {
    setShowContent(false);
  };

  return (
    <Link to={href}>
      <div
        onClick={props.onClick}
        onMouseEnter={content ? hoverSvgHandler : null}
        onMouseLeave={content ? exitHoverSvgHandler : null}
        className={navItemClasses}
      >
        <Svg className={svgIconClasses} />
        {title && <span className={classes["nav-item__label"]}>{title}</span>}
        {content && <DropDownContent show={showContent} items={content} />}
      </div>
    </Link>
  );
}

export default SvgNavItem;
