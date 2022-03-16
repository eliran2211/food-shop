import classes from "./ButtonSlide.module.css";

function ButtonSlide(props) {
  const { btnClasses } = props;
  return (
    <button
      style={props.style}
      onClick={props.onClick}
      className={`${classes["button"]} ${btnClasses}`}
    >
      {props.children}
    </button>
  );
}

export default ButtonSlide;
