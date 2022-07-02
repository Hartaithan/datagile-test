import React from "react";
import styled from "styled-components";
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
  return (
    <Container>
      <Heading>Counter</Heading>
      <Button>Add counter</Button>
    </Container>
  );
};

export default Header;
