import classes from "./SlideAction.module.css";

function SlideAction(props) {
  const { Svg, className } = props;
  return (
    <Svg
      onMouseEnter={props.onMouseEnter}
      onClick={props.onClick}
      className={`${classes["svg"]} ${className}`}
    />
  );
}

export default SlideAction;
