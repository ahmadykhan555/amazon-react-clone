import React, { useState } from "react";
import "./Carousel.scss";
import PropTypes from "prop-types";
import { useEffect } from "react";
import ProductSlide from "../product-slide/ProductSlide";

const defaultConfiguration = {
  itemsInView: 5,
};

const CarouselComponent = ({
  products,
  configuration,
  size,
  collectionName = "",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [navDirection, setNavDirection] = useState("");
  const [dots, setDots] = useState([]);

  // active index
  useEffect(() => {
    setActiveIndex(0);
  }, []);

  // dots
  useEffect(() => {
    if (products.length) {
      const dotsArray = [
        ...new Array(
          Math.floor(products.length / configuration.itemsInView)
        ).map(() => ""),
      ];
      setDots(dotsArray);
    }
  }, [products]);

  // navigation
  const navigate = (direction, index = null) => {
    let newIndex;
    if (index === null) {
      setNavDirection(direction);
      if (direction === "back") {
        newIndex = activeIndex - 1 > -1 ? activeIndex - 1 : 0;
      } else if (direction === "forward") {
        newIndex = activeIndex + 1 < products.length ? activeIndex + 1 : 0;
      }
    } else {
      newIndex = index;
    }
    setActiveIndex(newIndex);
  };

  // click handler
  const handlePagerClick = (index) => {
    index < activeIndex ? navigate("back", index) : navigate("forward", index);
  };

  // handle scrolling
  useEffect(() => {
    scrollToSlide();
  }, [activeIndex]);
  const scrollToSlide = () => {
    const ele = document.getElementById(collectionName + "-carousel");
    const slide = document.querySelector(`#${collectionName}-carousel .slide`);
    let slideWidth = 0;
    if (slide) {
      slideWidth = slide.offsetWidth;
    }
    if (ele) {
      if (activeIndex === 0) {
        ele.scrollLeft = 0;
      } else {
        const scrollWidth = slideWidth;
        ele.scrollLeft =
          navDirection === "forward"
            ? ele.scrollLeft + configuration.itemsInView * scrollWidth
            : ele.scrollLeft - configuration.itemsInView * scrollWidth;
      }
    }
  };

  const renderDot = (params) => {
    const { index } = params;
    return (
      <div
        onClick={() => handlePagerClick(index)}
        key={index}
        className={`pager-dot ${index === activeIndex ? "active" : ""}`}
      ></div>
    );
  };

  return (
    <div
      className={`carousel-component ${
        size ? `carousel-component--${size}` : ""
      }`}
    >
      <div
        className="carousel-component__navigation carousel-component__navigation--before"
        onClick={() => navigate("back")}
      >
        {"<"}
      </div>
      <div
        className="carousel-component__slides-wrapper"
        id={collectionName + "-carousel"}
      >
        {products.map((product) =>
          ProductSlide({ ...product, itemsInView: configuration.itemsInView })
        )}
      </div>
      <div className="carousel-component__slides-pager">
        {dots.map((item, index) => renderDot({ index }))}
        {renderDot({ index: products.legth })}
      </div>
      <div
        className="carousel-component__navigation carousel-component__navigation--after"
        onClick={() => navigate("forward")}
      >
        {">"}
      </div>
    </div>
  );
};

CarouselComponent.propTypes = {
  products: PropTypes.array.isRequired,
  collectionName: PropTypes.string.isRequired,
  configuration: PropTypes.shape({
    itemsInView: PropTypes.number,
  }),
};

CarouselComponent.defaultProps = {
  configuration: defaultConfiguration,
};

export default CarouselComponent;
