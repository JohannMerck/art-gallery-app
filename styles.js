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
    background-image: linear-gradient(260deg, rgb(42,244,152,255) 0%, #3498db 100%);
  }
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledNavigationWrapper = styled.nav`
  font-size: 18px;
  background-image: linear-gradient(260deg, #cddb0a 0%, #3498db 100%);
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
    margin-bottom: 15px;
  }
`;

export const StyledUlWrapper = styled.ul`
  list-style-type: none;
  display: ${(props) => props.display};
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const StyledLi = styled.li`
  text-align: center;
  margin: 15px;
  font-size: large;
  border-radius: 15px;
`;

export const StyledSpan = styled.span`
  background-color: orange;
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  color: purple;
  margin: 15px;
  display: flex;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  width: 150px;
  justify-content: center;
  line-height: 1rem;
  padding: 0.75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;

  &:focus {
    outline: 0;
  }

  &:after {
    content: "";
    position: absolute;
    border: 1px solid #000000;
    bottom: 4px;
    left: 4px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
  }

  &:hover:after {
    bottom: 2px;
    left: 2px;
  }
`;

export const StyledPiecesSpan = styled(StyledSpan)`
  background-color: #b61111;
`;

export const StyledFavoritesSpan = styled(StyledSpan)`
  background-color: #d1d40c;
`;

export const StyledCommentSpan = styled.span`
  margin-left: 15px;
  font-size: large;
  border: 1px solid #000000;
  margin: 20px;
  background-color: white;
  width: 50px;
  padding: 0.5rem 1.2rem;
`;

export const StyledWrapper = styled.section`
  display: flex;
`;

export const StyledArtPiecesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const StyelePieces = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding-left: 50px;
`;

export const ItemStyle = styled.div`
  max-width: 300px;
  overflow: hidden;
  text-align: center;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// ==================================
