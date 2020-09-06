import React from "react";
import "./Banner.scss";
import { useState } from "react";
const BannerColors = {
  blue: "lightblue",
  green: "lightgreen",
  gray: "gray"
};
const BannerComponent = ({ text, cta }) => {
  const [bannerHidden, setBannerHidden] = useState(false);
  return (
    <div className="">
      {!bannerHidden && (
        <div className="banner-component">
          <p className="banner-component__text">
            {text}
            <a href="#" className="cta-link">
              {cta}
            </a>
          </p>
          <div
            className="banner-component__dismiss-banner action"
            onClick={() => setBannerHidden(true)}
          >
            x
          </div>
        </div>
      )}
    </div>
  );
};
export default BannerComponent;
