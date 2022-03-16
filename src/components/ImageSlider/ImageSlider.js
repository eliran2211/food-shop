import classes from "./ImageSlider.module.css";
import { useState } from "react";
import SliderBoard from "./SliderBoard";
import ImageActions from "./ImageActions";
import useSlider from "../../hooks/use-slider";

import pizzaImg from "../../assets/image-slide/pizza.jpg";
import burgerImg from "../../assets/image-slide/burger.jpg";
import sushiImg from "../../assets/image-slide/sushi.jpg";

import { ReactComponent as SvgPizza } from "../../assets/pizza-svg.svg";
import { ReactComponent as SvgBurger } from "../../assets/burger-svg.svg";
import { ReactComponent as SvgSushi } from "../../assets/sushi-svg.svg";

const images = [
  { id: "burger-slider", src: burgerImg, title: "Burger", svg: SvgBurger },
  { id: "sushi-slider", src: sushiImg, title: "Sushi", svg: SvgSushi },
  { id: "pizza-slider", src: pizzaImg, title: "Pizza", svg: SvgPizza },
];

function ImageSlider() {
  const [currImage, setCurrImage] = useState(0);
  const [isHoverSlider, setIsHoverSlide] = useState(true);

  const nextSlide = () => {
    setCurrImage((currImage + 1) % images.length);
  };

  const prevSlide = () => {
    if (currImage === 0) return setCurrImage(images.length - 1);
    setCurrImage((currImage - 1) % images.length);
  };

  return (
    <div className={classes["main-slider"]}>
      <SliderBoard
        onEnter={() => setIsHoverSlide(true)}
        onLeave={() => setIsHoverSlide(false)}
        position={currImage}
        images={images}
      />
      <ImageActions
        isHoverSlider={isHoverSlider}
        onEnteredSlide={() => setIsHoverSlide(true)}
        onPrevClicked={prevSlide}
        onNextClicked={nextSlide}
      />
    </div>
  );
}

export default ImageSlider;
