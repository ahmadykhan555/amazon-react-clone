import React, { useState } from "react";
import "./Carousel.scss";
import PropTypes from "prop-types";
import { useEffect } from "react";
const defaultConfiguration = {
  itemsInView: 1
};

const CarouselComponent = ({ items, collectionName, configuration, size }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [navDirection, setNavDirection] = useState("");

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  const navigate = (direction, index = null) => {
    let newIndex;
    if (index === null) {
      setNavDirection(direction);
      if (direction === "back") {
        newIndex = activeIndex - 1 > -1 ? activeIndex - 1 : 0;
      } else if (direction === "forward") {
        newIndex = activeIndex + 1 < items.length ? activeIndex + 1 : 0;
      }
    } else {
      newIndex = index;
    }
    setActiveIndex(newIndex);
  };

  const handlePagerClick = index => {
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
            ? ele.scrollLeft + scrollWidth
            : ele.scrollLeft - scrollWidth;
      }
    }
  };

  // slide styles
  const computeStyles = () => {
    const styles = {
      flexBasis: "100%",
      flexShrink: 0
    };

    // add extra 0.25% to make the last slide in view slightly hidden
    styles.flexBasis = 100 / configuration.itemsInView + 0.25 + "%";
    return styles;
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
        {items.map((item, index) => (
          <div
            className="slide"
            id={`${collectionName}-slide-${index}`}
            style={computeStyles(index)}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="carousel-component__slides-pager">
        {items.map((item, index) => (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            onClick={() => handlePagerClick(index)}
            key={index}
            className={`pager-dot ${index === activeIndex ? "active" : ""}`}
          ></a>
        ))}
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
  items: PropTypes.array.isRequired,
  collectionName: PropTypes.string.isRequired,
  configuration: PropTypes.shape({
    itemsInView: PropTypes.number
  })
};

CarouselComponent.defaultProps = {
  configuration: defaultConfiguration
};
export default CarouselComponent;
