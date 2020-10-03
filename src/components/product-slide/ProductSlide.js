import React from "react";
import "./ProductSlide.scss";

const ProductSlide = ({
  name,
  id,
  category,
  price,
  discountAvailable,
  discountPercentage,
  description,
  photos,
  itemsInView,
}) => {
  // slide styles
  const computeStyles = () => {
    const styles = {
      flexBasis: "100%",
      flexShrink: 0,
    };
    // add extra 0.25% to make the last slide slightly hidden
    styles.flexBasis = 100 / itemsInView + 0.25 + "%";
    return styles;
  };
  return (
    <div
      className="slide"
      id={`${category}-slide-${id}`}
      style={{
        ...computeStyles(id),
      }}
      key={id}
    >
      <img className="product-img" src={`${photos[0]}`} alt="" />
      <p className="collection-label">
        {category}-{name}-${price}
      </p>
    </div>
  );
};

export default ProductSlide;
