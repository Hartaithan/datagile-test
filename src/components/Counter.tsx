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
  z-index: 0;
  overflow: hidden;
  clip-path: polygon(
    10% 0%,
    90% 0%,
    100% 10%,
    100% 90%,
    90% 100%,
    10% 100%,
    0% 90%,
    0% 10%
  );
`;

const Value = styled.p`
  font-size: 48px;
  font-weight: 500;
`;

const Background = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-60%, -50%);
  font-size: 186px;
  font-weight: 700;
  opacity: 0.05;
  font-style: italic;
  text-align: center;
  -webkit-text-stroke: 8px #ffffff;
`;

const Buttons = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 12px;
`;

const Button = styled.button`
  height: 30px;
  width: calc(50% - 5px);
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  font-weight: 700;
  background: #070707;
  background: linear-gradient(45deg, transparent 4px, #070707 4px),
    linear-gradient(135deg, transparent 4px, #070707 4px),
    linear-gradient(225deg, transparent 4px, #070707 4px),
    linear-gradient(315deg, transparent 4px, #070707 4px);
  background-position: bottom left, top left, top right, bottom right;
  background-size: 50% 50%;
  background-repeat: no-repeat;
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
