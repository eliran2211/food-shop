import { Fragment } from "react";

import ImageSlider from "../components/ImageSlider/ImageSlider";
import ChefRecommended from "../components/ChefRecommendeds/ChefRecommended";
import HomeBanner from "../components/HomeBanner/HomeBanner";

function Home() {
  return (
    <Fragment>
      <ImageSlider />
      <ChefRecommended />
      <HomeBanner />
    </Fragment>
  );
}

export default Home;
