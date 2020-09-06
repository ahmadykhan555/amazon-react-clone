import React from "react";
import "./HeroCard.scss";

const HeroCard = () => {
  const categories = [
    {
      title: "computers & accessories",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg"
    },
    {
      title: "computers & accessories",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg"
    },
    {
      title: "computers & accessories",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg"
    },
    {
      title: "computers & accessories",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg"
    }
  ];
  return (
    <div className="hero-card">
      <h3 className="hero-card__card-title">Shop By Category</h3>
      <div className="hero-card__categories-wrapper">
        {categories.map((category, index) => (
          <div className="category" key={index}>
            <img className="category__img" src={category.imgUrl} alt="" />
            <h3 className="category__text">{category.title}</h3>
            <a className="category__overlay"></a>
          </div>
        ))}
      </div>
      <a href="#" className="hero-card__cta">
        CTA
      </a>
    </div>
  );
};

export default HeroCard;
