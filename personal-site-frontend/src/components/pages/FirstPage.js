import React from "react";
import IdealImage from "react-ideal-image";
import landing from "../../media/landing.jpg";
import Tiles from "../Tiles";

const theme = {
  placeholder: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
};

export default () => {
  return (
    <div className="first-page">
      <h2 className="main-title h2">Julian Callin</h2>
      <IdealImage
        className="landing-image"
        theme={theme}
        placeholder={{ lqip: landing.preSrc }}
        width={1920}
        height={1080}
        srcSet={[
          { width: 1000, src: "./media/landing.jpg" },
          { width: 1000, src: "./media/landing.webp" }
        ]}
      />
      <Tiles />
    </div>
  );
};
