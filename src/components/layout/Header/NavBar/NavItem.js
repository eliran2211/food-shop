import classes from "./NavItem.module.css";

import DropDownContent from "./DropDownContent";

function NavItem(props) {
  return (
    <li
      onMouseEnter={props.onHover ? () => props.onHover(props.id) : null}
      onMouseLeave={
        props.onExitHover ? () => props.onExitHover(props.id) : null
      }
      className={`${classes["nav-item"]} ${props.classes}`}
    >
      <p>{props.title}</p>
      <DropDownContent
        show={props.showContent || false}
        items={props.content || []}
      />
    </li>
  );
}

export default NavItem;
