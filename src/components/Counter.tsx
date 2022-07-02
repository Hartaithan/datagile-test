import React from "react";
import styled from "styled-components";
import { ICounterItem } from "../models/CounterModel";

interface ICounterProps {
  counter: ICounterItem;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  background: #141414;
  border-radius: 12px;
`;

const Counter: React.FC<ICounterProps> = (props) => {
  const { counter } = props;
  const { value } = counter;

  return <Container>{value}</Container>;
};

export default Counter;
