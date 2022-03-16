import { Fragment } from "react";
import { CSSTransition } from "react-transition-group";
import "./DropDownContent.css";

function DropDownContent(props) {
  const { show } = props;
  const animationTiming = { enter: 300, exit: 300 };

  const items = props.items.map((item) => (
    <Fragment key={Math.random()}>{item}</Fragment>
  ));
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={animationTiming}
      classNames="content"
    >
      <ul className="list-item">{items}</ul>
    </CSSTransition>
  );
}

export default DropDownContent;
