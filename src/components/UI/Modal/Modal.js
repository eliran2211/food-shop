import classes from "./Modal.module.css";

function Modal(props) {
  return (
    <div className={classes["modal"]}>
      <div className={classes["backdrop"]} onClick={props.onClose}></div>
      <div className={classes["overlay"]}>{props.children}</div>
    </div>
  );
}

export default Modal;
