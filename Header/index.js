import "./styles.scss";
import React from "react";

export const Header = ({ variant = "primary", children }) => {
  switch (variant) {
    case "primary":
      return <h3 className="header">{children}</h3>;
    case "secondary":
      return <h3 className="header header-secondary">{children}</h3>;
    case "tertiary":
      return <h3 className="header header-tertiary">{children}</h3>;
    default:
      return <></>;
  }
};

export default Header;
