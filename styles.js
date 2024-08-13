import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;

export const StyledArtPiecesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
