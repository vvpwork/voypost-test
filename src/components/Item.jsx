import React from "react";
import T from "prop-types";

export const Item = ({ trip = {} }) => {
  const { fromName, toName, departAt, vehicle } = trip;
  const date = departAt ? departAt.slice(0, 10) : departAt;
  return (
    <li>
      <p>
        <span>From: </span>
        {fromName}
      </p>
      <p>
        <span>To: </span>
        {toName}
      </p>
      <p>
        <span>Depart at: </span>
        {date}
      </p>
      <p>
        <span>Vehicle: </span>
        {vehicle}
      </p>
    </li>
  );
};

Item.propTypes = {
  trip: T.shape({
    fromName: T.string,
    toName: T.string,
    departAt: T.string,
    vehicle: T.string
  }).isRequired
};
