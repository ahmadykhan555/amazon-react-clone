import React, { useEffect } from "react";
import "./App.scss";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import BannerComponent from "./components/banner/Banner";
import { connect } from "react-redux";
import { setProducts } from "./store/platform/actions";
import { fetchProducts } from "./services/products";

const App = ({ setProducts }) => {
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await fetchProducts();
    setProducts(data);
  };
  return (
    <div className="app app-amazon">
      <div className="app-amazon__header">
        <NavBar></NavBar>
      </div>
      <div className="app-amazon__body">
        <BannerComponent
          text="We are delivering to your region with limited shipping options. Please expect extended delivery time."
          cta={"learn more"}
        ></BannerComponent>
        <Main></Main>
      </div>
      <Footer></Footer>
    </div>
  );
};

const connection = connect(
  null,
  {
    setProducts
  }
);

export default connection(App);
