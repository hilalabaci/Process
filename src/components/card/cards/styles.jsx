import styled, { createGlobalStyle } from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const GlobalStyle = createGlobalStyle`

`;

export const MoreIcon = styled(MoreHorizIcon)`
  opacity: 1;
  display: flex;
`;
export const Container = styled.div`
  background-color: #181b1e;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  width: 200px;
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.8);
  :hover {
    background-color: #22262a;
  }
  :hover ${MoreIcon} {
    opacity: 1;
  }

`;
export const NoteWrapper = styled.div`
  flex: 1;
  display: flex;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.065em;
  color: rgba(255, 255, 255, 0.7);
  resize: none;
  outline: none;
  border: none;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
`;
export const iconButton = styled;
