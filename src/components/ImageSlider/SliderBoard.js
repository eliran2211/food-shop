import React from 'react';
import { Fragment, useEffect, useState } from 'react';
import classes from './SliderBoard.module.css';
import { CSSTransition } from 'react-transition-group';

import SliderDetails from './SliderDetails/SliderDetails';

function SliderBoard(props) {
  const [init, setInit] = useState(true);
  const [activate, setActivate] = useState(true);
  const [currImage, setCurrImage] = useState(0);

  const { images } = props;

  const image = (
    <img
      className={classes['image']}
      src={images[currImage].src}
      alt={images[currImage].src}
    />
  );

  useEffect(() => {
    setInit(false);
  }, []);
  useEffect(() => {
    if (!init) {
      setActivate(false);
    }
  }, [props.position]);
  return (
    //false - will fire onExit and onExited
    //true - will fire onEnter and onEntered
    <Fragment>
      <SliderDetails
        style={images[currImage].imageDetails.style}
        show={activate}
        title={images[currImage].title}
        Svg={images[currImage].imageDetails.svg}
      />
      <div
        onMouseEnter={props.onEnter}
        onMouseLeave={props.onLeave}
        className={classes['slider']}
      >
        <CSSTransition
          unmountOnExit
          in={activate}
          timeout={{
            enter: 1000,
            exit: 1000,
          }}
          classNames={{
            enterActive: classes['slide-enter-active'],
            enterDone: classes['slide-enter'],
            exitActive: classes['slide-exit-active'],
            exitDone: classes['slide-exit'],
          }}
          onEnter={() => {
            setCurrImage(props.position);
          }}
          onExited={() => {
            setActivate(true);
          }}
        >
          {image}
        </CSSTransition>
      </div>
    </Fragment>
  );
}

const areEqual = (prevProps, nextProps) => {
  return prevProps.position === nextProps.position;
};

export default React.memo(SliderBoard, areEqual);
