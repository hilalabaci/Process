import React from "react";
import { Container, Title, Wrapper } from "./styles";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

function Move(props) {
  async function updateStatus(status) {
    const id = props.cardId;
    const body = { status,id };
    const response = await fetch(process.env.REACT_APP_API_URL + "card", {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      props.onUpdate(id,data)
    }
  }
  return (
    <Container>
      <Wrapper onClick={() => updateStatus(1)}>
        <RestartAltIcon />
        <Title>To Do</Title>
      </Wrapper>
      <Wrapper onClick={() => updateStatus(2)}>
        <RotateRightIcon />
        <Title>In Progress</Title>
      </Wrapper>
      <Wrapper onClick={() => updateStatus(3)}>
        <PublishedWithChangesIcon />
        <Title>Done</Title>
      </Wrapper>
    </Container>
  );
}
export default Move;
