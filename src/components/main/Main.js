import React, { useEffect } from "react";
import "./Main.scss";
import Hero from "./components/hero/Hero";
import { connect } from "react-redux";
import ProductsListing from "../../sections/ProductsListing/ProductsListing";
import { products } from "../../services/products";
import { setProducts } from "../../store/platform/actions";

const Main = ({ platform, productCount, setProducts }) => {
  // load products into state
  useEffect(() => {
    setProducts(products());
  }, []);

  return (
    <div className="app-amazon__main" id="app-amazon__main">
      <Hero></Hero>
      <ProductsListing></ProductsListing>
    </div>
  );
};

const mapStateToProps = (state) => ({
  platform: state.root.platform,
  productCount: state.root.productCount,
});

const connector = connect(mapStateToProps, { setProducts });

export default connector(Main);
