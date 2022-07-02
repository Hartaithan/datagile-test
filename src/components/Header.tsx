import React from "react";
import styled from "styled-components";
import useActions from "../hooks/useActions";
import Button from "./Button";
import Heading from "./Heading";

const Container = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const Header: React.FC = () => {
  const { addCounterAction } = useActions();
  return (
    <Container>
      <Heading>Counter</Heading>
      <Button onClick={() => addCounterAction()}>Add counter</Button>
    </Container>
  );
};

export default Header;
