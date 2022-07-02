import styled from "styled-components";

const Button = styled.button`
  height: 30px;
  min-width: 100px;
  background: #141414;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
  transition: background 0.3s ease-in-out;
  padding: 5px 10px;
  &:hover,
  &:active {
    background: #2e2e2e;
  }
`;

export default Button;
