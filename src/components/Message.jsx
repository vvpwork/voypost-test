import React from "react";
import styled from "styled-components";

import img from "../assets/img/delivery.png";

export const Message = () => {
  return (
    <StyledContainer>
      <h2>Sorry, not found</h2>
      <img src={img} alt="delivery" />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  & > h2 {
    text-align: center;
    color: var(--mainWhite);
    margin-bottom: 50px;
  }

  & > img {
    display: block;
    width: 300px;
    object-fit: cover;
  }
  @media (min-width: 480px) {
    grid-column: 2;
  }
`;
