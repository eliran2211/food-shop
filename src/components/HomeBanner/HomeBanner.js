import classes from "./HomeBanner.module.css";

import Banner from "./Banner";
import burgerBanner from "../../assets/banners/burger.jpg";
import steakBanner from "../../assets/banners/steak.jpg";

function HomeBanner() {
  return (
    <div className={classes["home-banner"]}>
      <Banner
        title="BURGERS"
        description="BUY 2 GET 3"
        imgSrc={burgerBanner}
        bannerDetailsStyle={{ top: "5%", left: "4%" }}
      />

      <Banner
        title="STEAKS"
        description="TRADITIONAL"
        imgSrc={steakBanner}
        bannerStyle={{ flexGrow: "2" }}
        bannerDetailsStyle={{ bottom: "10%", right: "3%" }}
      />
      {/* <div
        className={classes["image-banner-container"]}
        onMouseEnter={() => hoverBannerHandler(burgerBannerRef)}
        onMouseLeave={() => exitHoverBannerHandler(burgerBannerRef)}
      >
        <BannerDetails
          description="BUY 2 GET 3"
          title="BURGERS"
          style={{ top: "5%", left: "4%" }}
        />
        <img src={burgerBanner} alt={burgerBanner} ref={burgerBannerRef} />
      </div> */}
      {/* <div
        className={classes["image-banner-container"]}
        style={{ flexGrow: "2" }}
        onMouseEnter={() => hoverBannerHandler(steakBannerRef)}
        onMouseLeave={() => exitHoverBannerHandler(steakBannerRef)}
      >
        <BannerDetails
          description="TRADITIONAL"
          title="STEAKS"
          style={{ bottom: "10%", right: "3%" }}
        />
        <img src={steakBanner} alt={steakBanner} ref={steakBannerRef} />
      </div> */}
    </div>
  );
}

export default HomeBanner;
