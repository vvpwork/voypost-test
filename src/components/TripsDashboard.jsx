import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { allTrips } from "../redux/asynOperetion";
import { Item } from "./Item";
import { Message } from "./Message";

export const TripsDashboard = () => {
  const { from, to } = useSelector(state => state.filter);
  let trips = useSelector(state => state.allTrips);

  if (from && to)
    trips = trips.filter(trip => {
      return (
        trip.fromName.toLowerCase().includes(from.toLowerCase().trim()) &&
        trip.toName.toLowerCase().includes(to.toLowerCase().trim())
      );
    });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allTrips());
  }, [dispatch]);

  return (
    <StyledList>
      {trips.length > 0 ? (
        trips.map((trip, index) => <Item {...{ trip }} key={index} />)
      ) : (
        <Message />
      )}
    </StyledList>
  );
};

// style
const StyledList = styled.ul`
  list-style: none;
  width: 305px;
  margin: 0 auto;
  & li {
    box-sizing: border-box;
    width: 100%;
    border: 0.5px solid rgba(255, 90, 89, 0.6);
    margin-bottom: 30px;
    padding: 20px 15px;

    & p {
      font: 300 12px var(--main-font);
      & > span {
        color: var(--mainWhite);
        font-size: 14px;
      }
    }
  }
  @media (min-width: 480px) {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 5%;
  }
`;
