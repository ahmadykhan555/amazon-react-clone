import React from "react";
import "./HeroCard.scss";

const HeroCard = () => {
  const categories = [
    {
      title: "macbook pro"
    },
    {
      title: "smart watches"
    },
    {
      title: "iPad pro"
    },
    {
      title: "android"
    }
  ];
  return (
    <div className="hero-card">
      <h3 className="hero-card__card-title">Shop By Category</h3>
      <div className="hero-card__categories-wrapper">
        {categories.map((category, index) => (
          <div className="category" key={index}>
            <img
              className="category__img"
              src={category.imgUrl + "?random=" + Math.random()}
              alt=""
            />
            <h3 className="category__text">{category.title}</h3>
            <a className="category__overlay"></a>
          </div>
        ))}
      </div>
      <a href="#" className="hero-card__cta">
        View Detail
      </a>
    </div>
  );
};

export default HeroCard;
