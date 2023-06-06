import React,{useState} from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { GlobalStyle, Label, Wrapper } from "./styles";

function BoardLabel(props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <Wrapper onClick={props.onClick}>
      <GlobalStyle />
      <Label>{props.title}</Label>
      <div>
        
        <DeleteIcon onClick={props.onDelete} className="editicon" />
      </div>
    </Wrapper>
  );
}
export default BoardLabel;
