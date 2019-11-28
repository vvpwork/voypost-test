import React from "react";
import T from "prop-types";

export const Input = ({
  value,
  change = () => {},
  style,
  placeholder = ""
}) => {
  return (
    <input
      value={value}
      onChange={change}
      {...{ style }}
      required
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  value: T.string.isRequired,
  change: T.func.isRequired,
  style: T.object,
  placeholder: T.string
};
