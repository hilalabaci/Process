import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colour.background.default};
  color: ${(props) => props.theme.fontColour};
`;
export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  max-width: 100%;
  @media only screen and (max-width: 768px) {
    margin-left: 7px;
    overflow-x: scroll;
  }
`;
export const Breadcrumbs = styled.div``;
