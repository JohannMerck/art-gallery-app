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

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledNavigationWrapper = styled.nav`
   font-size: 18px;
   background-image: linear-gradient(260deg,  rgb(42,244,152,255) 0%, #3498db 100%); 
   border: 1px solid rgba(0,0,0,0.2);
   padding-bottom: 10px;
   @media (min-width: 768px) {
     display: flex;
     justify-content: space-between;
     padding-bottom: 0;
     height: 70px;
     align-items: center;
     margin-bottom: 15px; 
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