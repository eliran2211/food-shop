import classes from "./Banner.module.css";
import BannerDetails from "./BannerDetails";

import { useRef } from "react";

function Banner(props) {
  const { title, description, bannerDetailsStyle, bannerStyle, imgSrc } = props;
  const imageBannerRef = useRef();

  const hoverBannerHandler = () => {
    imageBannerRef.current.style.transform = "scale(1.1)";
  };

  const exitHoverBannerHandler = () => {
    imageBannerRef.current.style.transform = "scale(1)";
  };
  return (
    <div
      className={classes["banner"]}
      style={bannerStyle}
      onMouseEnter={() => hoverBannerHandler()}
      onMouseLeave={() => exitHoverBannerHandler()}
    >
      <BannerDetails
        description={description}
        title={title}
        style={bannerDetailsStyle}
      />
      <img ref={imageBannerRef} src={imgSrc} alt={title} />
    </div>
  );
}

export default Banner;
