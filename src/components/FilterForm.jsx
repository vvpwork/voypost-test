import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FILTER } from "../redux/actions";
import styled from "styled-components";

import { Input } from "./Input";
import { Button } from "./Button";

export const FilterForm = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleChangeInput = ({ target: { value } }, set) => {
    set(value);
  };
  const dispatch = useDispatch();
  const submitForm = ev => {
    ev.preventDefault();
    dispatch(
      FILTER({
        from,
        to
      })
    );
    console.log(to, from);
  };

  return (
    <StyledForm onSubmit={submitForm}>
      <Input
        value={from}
        change={ev => handleChangeInput(ev, setFrom)}
        placeholder="From"
      />
      <Input
        value={to}
        change={ev => handleChangeInput(ev, setTo)}
        placeholder="To"
      />
      <Button type="submit" value="Search" />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 289px;
  box-sizing: border-box;
  margin: 0 auto;
  & input {
    width: 289px;
    background: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    color: var(--mainWhite);
    margin-bottom: 20px;
    font: 300 18px var(--main-font);
    letter-spacing: 2px;
  }

  & button {
    display: block;
    width: 163px;
    height: 32px;
    color: var(--mainWhiteOpacity);
    border: 1px solid rgba(255, 90, 89, 0.4);
    font: 300 20px var(--main-font);
    margin: 0 auto;
    margin-bottom: 45px;
    transition: all 0.4s linear;
    &:hover {
      cursor: pointer;
      background: var(--mainRed);
      color: var(--mainWhite);
    }
  }
  @media (min-width: 480px) {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & input {
      margin-right: 20%;
    }
  }
`;
