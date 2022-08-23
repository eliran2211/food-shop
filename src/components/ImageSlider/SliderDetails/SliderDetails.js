import classes from './SliderDetails.module.css';
import ButtonSlide from '../../UI/ButtonSlide/ButtonSlide';

import { CSSTransition } from 'react-transition-group';

const durationFadeIn = 600;
const delayFadeIn = 500;

const animateFadeIn = (i) =>
  `${classes['openDetails']} ${durationFadeIn}ms ease-out ${
    delayFadeIn * i
  }ms forwards`;

function SliderDetails(props) {
  const { Svg, title, style } = props;
  const svgAnimation = { animation: animateFadeIn(0) };
  const titleAnimation = { animation: animateFadeIn(1) };
  const btnAnimation = { animation: animateFadeIn(2) };
  return (
    <CSSTransition
      unmountOnExit
      in={props.show}
      timeout={1000}
      classNames={{
        exit: classes['details-exit-active'],
        exitDone: classes['details-exit'],
      }}
    >
      <div className={classes['details']} style={style}>
        <Svg className={classes['svg-icon']} style={svgAnimation} />
        <p style={titleAnimation}>{title}</p>
        <ButtonSlide style={btnAnimation} btnClasses={classes['button']}>
          ORDER NOW
        </ButtonSlide>
      </div>
    </CSSTransition>
  );
}

export default SliderDetails;
