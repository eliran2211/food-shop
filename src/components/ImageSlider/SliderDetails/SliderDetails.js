import './SliderDetails.css';
import ButtonSlide from '../../UI/ButtonSlide/ButtonSlide';

import { CSSTransition } from 'react-transition-group';

const animateFadeIn = (i) => {
  const durationFadeIn = 600;
  const delayFadeIn = 500;
  return `${'openDetails'} ${durationFadeIn}ms forwards`;
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
        exit: 'details-exit-active',
        exitDone: 'details-exit',
      }}
    >
      <div className={'details'} style={style}>
        <Svg className={'svg-icon'} style={svgAnimation} />
        <p style={titleAnimation}>{title}</p>
        <ButtonSlide style={btnAnimation} btnClasses={'button'}>
          ORDER NOW
        </ButtonSlide>
      </div>
    </CSSTransition>
  );
}

export default SliderDetails;
