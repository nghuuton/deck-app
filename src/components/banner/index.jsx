import React from "react";
import banner from "../../assets/images/AuvUX.jpg";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__image-banner">
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
