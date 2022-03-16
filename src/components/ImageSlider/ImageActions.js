import classes from "./ImageActions.module.css";
import { CSSTransition } from "react-transition-group";

import { ReactComponent as LeftArrow } from "../../assets/image-slide/left-arrow-slide.svg";
import { ReactComponent as RightArrow } from "../../assets/image-slide/right-arrow-slide.svg";

import SlideAction from "./SlideAction";

function ImageActions(props) {
  return (
    <CSSTransition
      unmountOnExit
      in={props.isHoverSlider}
      classNames={{
        enterActive: classes["image-slider-enter-active"],
        exitActive: classes["image-slider-exit-active"],
        enterDone: classes["image-slider-enter"],
        exitDone: classes["image-slider-exit"],
      }}
      timeout={{
        enter: 700,
        exit: 500,
      }}
    >
      <div onMouseEnter={props.onEnteredSlide} className={classes["actions"]}>
        <SlideAction
          onClick={props.onPrevClicked}
          className={classes["left-action"]}
          Svg={LeftArrow}
        />
        <SlideAction
          onClick={props.onNextClicked}
          className={classes["right-action"]}
          Svg={RightArrow}
        />
      </div>
    </CSSTransition>
  );
}

export default ImageActions;
