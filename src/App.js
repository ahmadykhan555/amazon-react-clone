import React from "react";
import "./App.scss";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import BannerComponent from "./components/banner/Banner";
import { connect } from "react-redux";

const App = ({}) => {
  const renderBanner = () => {
    return (
      <BannerComponent
        text="We are delivering to your region with limited shipping options. Please expect extended delivery time."
        cta={"learn more"}
      ></BannerComponent>
    );
  };

  const renderNavbar = () => {
    return <NavBar></NavBar>;
  };

  return (
    <div className="app app-amazon">
      <div className="app-amazon__header">{renderNavbar()}</div>
      {renderBanner()}
      <div className="app-amazon__body">
        <Main></Main>
      </div>
      <Footer></Footer>
    </div>
  );
};

const connection = connect(null, {});

export default connection(App);
