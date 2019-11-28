import React from "react";
import styled from "styled-components";

import { TripsDashboard } from "./components/TripsDashboard";
import { FilterForm } from "./components/FilterForm";
import logo from "./assets/img/logo.png";

export const App = () => {
  return (
    <StyledContainer>
      <img src={logo} alt="logo" />
      <FilterForm />
      <TripsDashboard trips={[]} />
    </StyledContainer>
  );
};

//styled
const StyledContainer = styled.div`
  box-sizing: border-box;
  padding-top: 60px;
  & > img {
    display: block;
    max-width: 100%;
    object-fit: cover;
    height: auto;
    margin: 0 auto;
    margin-bottom: 40px;
  }
`;
