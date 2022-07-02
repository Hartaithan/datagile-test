import styled from "styled-components";

const Button = styled.button`
  height: 30px;
  min-width: 100px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
  transition: background 0.3s ease-in-out;
  padding: 5px 10px;
  background: #141414;
  background: linear-gradient(45deg, transparent 4px, #141414 4px),
    linear-gradient(135deg, transparent 4px, #141414 4px),
    linear-gradient(225deg, transparent 4px, #141414 4px),
    linear-gradient(315deg, transparent 4px, #141414 4px);
  background-position: bottom left, top left, top right, bottom right;
  background-size: 50% 50%;
  background-repeat: no-repeat;
`;

export default Button;
