import classes from './SliderDetails.module.css';
import ButtonSlide from '../../UI/ButtonSlide/ButtonSlide';

import { CSSTransition } from 'react-transition-group';

const animateFadeIn = (i) => {
  const durationFadeIn = 600;
  const delayFadeIn = 500;
  return `${classes['openDetails']} ${durationFadeIn}ms forwards`;
};

function SliderDetails(props) {
  const { Svg, title, style } = props;
  const svgAnimation = { animation: animateFadeIn(0), animationDelay: '0' };
  const titleAnimation = {
    animation: animateFadeIn(1),
    animationDelay: '1000ms',
  };
  const btnAnimation = {
    animation: animateFadeIn(2),
    animationDelay: '2000ms',
  };
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
