import { useCallback } from "react";

function useSlider(itemCount, imagesPerPage) {
  const lastItemPosition = -((100 / imagesPerPage) * (itemCount - 1));
  const nextSlide = useCallback(
    (sliderPosition) => {
      if (lastItemPosition === sliderPosition) return sliderPosition;
      return sliderPosition - 100 / imagesPerPage;
    },
    [lastItemPosition, imagesPerPage]
  );

  const prevSlide = useCallback(
    (sliderPosition) => {
      if (sliderPosition === 0) return sliderPosition;
      return sliderPosition + 100 / imagesPerPage;
    },
    [imagesPerPage]
  );

  return {
    nextSlide,
    prevSlide,
  };
}

export default useSlider;
