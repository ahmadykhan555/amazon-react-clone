import React from "react";
import "./Navbar.scss";
import logo from "../../assets/images/amazon-logo.png";
import NavbarActionItem from "./component/navbar-action-item/NavbarActionItem";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
const NavBar = () => {
  const row1Actions = [
    {
      title: "hello, Sign in",
      cta: "accounts & lists",
    },
    {
      title: "returns",
      cta: "& orders",
    },
  ];

  const row2Actions = [
    { title: `today's deals` },
    { title: "customer service" },
    { title: "gift card" },
    { title: "registry" },
    { title: "sell" },
  ];
  return (
    <div className="app__header__navbar">
      <div className="app__header__navbar__row app__header__navbar--row1">
        <div className="amazon-logo">
          <img src={logo} alt="" />
        </div>
        <div className="search-bar"></div>
        <div className="actions">
          {row1Actions.map((action, index) => (
            <NavbarActionItem
              key={index}
              title={action.title}
              cta={action.cta}
            ></NavbarActionItem>
          ))}
          <div className="shopping-cart-cta">
            <p className="items-in-cart-label">10</p>
            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
          </div>
        </div>
      </div>
      <div className="app__header__navbar__row app__header__navbar--row2">
        <div className="deliver-to">Deliver to</div>
        <div className="actions">
          {row2Actions.map((action, index) => (
            <NavbarActionItem
              key={index}
              title={action.title}
            ></NavbarActionItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
