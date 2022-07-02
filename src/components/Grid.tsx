import styled from "styled-components";

const Grid = styled.div`
  height: min-content;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
`;

export default Grid;
