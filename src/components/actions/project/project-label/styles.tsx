import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";

export const Wrapper = styled.div`
  height: 45px;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  width: 150px;
  margin-bottom: 20px;
  background: linear-gradient(
    135deg,
    rgb(113, 183, 230, 0.3),
    rgb(155, 89, 182, 0.3)
  );
  //background-color: ${(props) => props.theme.projectBG};
  &:hover {
    background-color: rgba(255, 255, 255, 0.427);
  }
  @media only screen and (max-width: 768px) {
    width: 120px;
    padding: 10px 0;
    margin-bottom: 10px;
    justify-content: space-around;
  }
`;
export const Label = styled.label`
  border: none;
  color: ${(props) => props.theme.fontColour};
  font-size: 15px;
  outline: none;
  letter-spacing: 0.05em;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
export const EditIcon = styled(DeleteIcon)`
  color: ${(props) => props.theme.fontColour};
  opacity: 0.5;
  font-size: 20px !important;

  &:hover {
    opacity: 1;
  }
  @media only screen and (max-width: 768px) {
    font-size: 18px !important;
  }
`;
