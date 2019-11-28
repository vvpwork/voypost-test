import React from "react";
import T from "prop-types";

export const Button = ({ type = "text", value = "", click = () => {} }) => {
  return (
    <button onClick={click} type={type}>
      {value}
    </button>
  );
};

Button.propTypes = {
  type: T.string,
  value: T.string,
  click: T.func
};
