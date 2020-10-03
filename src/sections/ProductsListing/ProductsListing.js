import React from "react";
import { connect } from "react-redux";
import "./ProductsListing.scss";
import CarouselComponent from "../../components/carousel/Carousel";
const ProductsListing = ({ products }) => {
  return (
    <div className="products-list-wrapper">
      {products.length && (
        <div className="carousel-wrapper">
          <CarouselComponent
            products={products}
            collectionName="Prod"
            configuration={{ itemsInView: 3 }}
          ></CarouselComponent>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  products: state.root.products,
});
const connection = connect(mapStateToProps);
export default connection(ProductsListing);
