import React from "react";
import "./Main.scss";
import Hero from "./components/hero/Hero";
import CarouselComponent from "../carousel/Carousel";

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

const Main = () => {
  return (
    <div className="app-amazon__main" id="app-amazon__main">
      <Hero></Hero>
      <CarouselComponent
        size="regular"
        collectionName="products"
        items={items}
        configuration={{ itemsInView: 2 }}
      ></CarouselComponent>
      <CarouselComponent
        collectionName="electronics"
        items={items.slice(0, 4)}
        configuration={{ itemsInView: 3 }}
      ></CarouselComponent>
      <CarouselComponent
        collectionName="kitchenware"
        items={items}
        configuration={{ itemsInView: 4 }}
      ></CarouselComponent>
      <CarouselComponent
        collectionName="sports"
        items={items}
        configuration={{ itemsInView: 5 }}
      ></CarouselComponent>
    </div>
  );
};

export default Main;
