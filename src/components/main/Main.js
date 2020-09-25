import React from "react";
import "./Main.scss";
import Hero from "./components/hero/Hero";
import CarouselComponent from "../carousel/Carousel";
import { connect } from "react-redux";
import { togglePlatform, incrementCounter } from "../../store/platform/actions";
import ProductsListing from "../../sections/ProductsListing/ProductsListing";

const itemStyles = index => {
  return {
    background: "#d3d3d342",
    color: "black",
    padding: "20px",
    boxSizing: "border-box",
    height: "100%",
    width: "100%",
    borderRadius: "6px"
  };
};

const collection = ["Alpha", "Beta", "Gama", "Delta", "Peta", "Giga", "Mega"];
const items = collection.map((item, index) => (
  <div className="collection-item" style={{ ...itemStyles(index) }}>
    {item}
  </div>
));

const Main = ({
  platform,
  productCount,
  togglePlatform,
  incrementCounter,
  products
}) => {
  const handleClick = () => {
    togglePlatform();
    incrementCounter();
  };

  return (
    <div className="app-amazon__main" id="app-amazon__main">
      <p className="action" onClick={handleClick}>
        {platform} - {productCount}
      </p>
      <Hero></Hero>
      <ProductsListing></ProductsListing>
    </div>
  );
};

const mapStateToProps = state => ({
  platform: state.root.platform,
  productCount: state.root.productCount,
  products: state.root.products
});

const connector = connect(
  mapStateToProps,
  {
    togglePlatform,
    incrementCounter
  }
);

export default connector(Main);
