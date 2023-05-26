import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Label from "../card-label";
import Modal from "../../modal";
import { Container, NoteWrapper, IconWrapper, LabelWrapper } from "./styles";
import EditCard from "../edit-card";

function Card(props) {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }
  return (
    <Container>
      {showModal && (
        <Modal onClose={closeModal}>
          <EditCard
            onDelete={(id) => {
              props.onDelete(id);
              closeModal();
            }}
            id={props.id}
          />
        </Modal>
      )}
      <IconWrapper>
        <LabelWrapper>
          <Label color="#8D4116" />
          <Label color="#14641C" />
        </LabelWrapper>
        <MoreHorizIcon onClick={openModal} sx={{ color: "white" }} />
      </IconWrapper>
      <NoteWrapper>{props.title}</NoteWrapper>
    </Container>
  );
}
export default Card;
