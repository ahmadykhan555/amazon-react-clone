import React from "react";
import "./App.scss";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import BannerComponent from "./components/banner/Banner";

const App = () => {
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

export default App;
