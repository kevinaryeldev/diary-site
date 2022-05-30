import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: url(https://www.linkpicture.com/q/Banner-React-Small.png) top
    right no-repeat #17181a;
  opacity: 0.9;
  @media (min-width: 1024px) {
    background: url(https://www.linkpicture.com/q/Banner-React_1.png) top center
      no-repeat #17181a;
  }
`;

export const HeaderMain = styled.div`
  min-height: 300px;
  display: flex;
  width: fit-content;
  height: fit-content;
`;

export const HeaderTitle = styled.div`
  margin-left: 30%;
  margin-top: 10%;

  h2 {
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
    margin-block-start: 0px;
    margin-block-end: 0px;
    color: #bac1d8;
    padding: 2px 5px;
    border-radius: 5px;
  }
`;
