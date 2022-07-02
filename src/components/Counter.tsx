import React from "react";
import styled from "styled-components";
import useActions from "../hooks/useActions";
import { ICounterItem } from "../models/CounterModel";

interface ICounterProps {
  counter: ICounterItem;
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  background: #141414;
  border-radius: 12px;
  z-index: 0;
  overflow: hidden;
`;

const Value = styled.p`
  font-size: 36px;
  font-weight: 600;
`;

const Background = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-60%, -50%);
  font-size: 186px;
  font-weight: 900;
  opacity: 0.05;
  font-style: italic;
  text-align: center;
`;

const Buttons = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Button = styled.button`
  height: 30px;
  width: calc(50% - 5px);
  border: none;
  background: #070707;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  font-weight: 700;
  &:hover,
  &:active {
    background: #2e2e2e;
  }
`;

const Counter: React.FC<ICounterProps> = (props) => {
  const { counter } = props;
  const { value } = counter;
  const { incrementCounterAction, decrementCounterAction } = useActions();

  return (
    <Container>
      <Value>{value}</Value>
      <Background>{value}</Background>
      <Buttons>
        <Button onClick={() => decrementCounterAction(counter.id)}>-</Button>
        <Button onClick={() => incrementCounterAction(counter.id)}>+</Button>
      </Buttons>
    </Container>
  );
};

export default Counter;
