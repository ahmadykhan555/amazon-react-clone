import React from "react";
import { connect } from "react-redux";
import "./ProductsListing.scss";
import CarouselComponent from "../../components/carousel/Carousel";
const ProductsListing = ({ products }) => {
  // items, collectionName, configuration, size
  return (
    <div className="products-list-wrapper">
      <CarouselComponent
        collectionName={"Alpha"}
        items={products.slice(0, 10)}
        configuration={{ itemsInView: 3 }}
      ></CarouselComponent>
    </div>
  );
};
const mapStateToProps = state => ({
  products: state.root.products
});
const connection = connect(mapStateToProps);
export default connection(ProductsListing);
