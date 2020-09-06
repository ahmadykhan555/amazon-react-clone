import React from "react";
import "./NavbarActionItem.scss";

const NavbarActionItem = ({ title, cta }) => {
  return (
    <div className="navbar-action-item">
      <p className="title">{title}</p>
      <p className="cta">{cta}</p>
    </div>
  );
};

export default NavbarActionItem;
