import "./styles.scss";
import React from "react";

export const Button = ({ variant = "primary", ...props }) => {
  switch (variant) {
    case "primary":
      return <button className="button" {...props} />;
    case "secondary":
      return <button className="button button-secondary" {...props} />;
    case "tertiary":
      return <button className="button button-tertiary" {...props} />;
    default:
      return <></>;
  }
};

export default Button;
