import React, { useState } from "react";
import {
  CloseIcon,
  Button,
  ButtonWrapper,
  Container,
  Textarea,
} from "./styles";
import { useUserContext } from "../../../../contexts/UserContext";
import { CardType } from "../../../../types";
import apiHelper from "../../../../api/apiHelper";
type AddCardPropsType = {
  projectKey: string;
  status: number;
  onClose: () => void;
  addedCard: (card: CardType) => void;
  boardId?: string;
  sprintId: string;
};

function AddCard(props: AddCardPropsType) {
  const [content, setContent] = useState("");
  const { user } = useUserContext();
  const userId = user?._id;
  function handleChange(value: string) {
    setContent(value);
  }
  async function submitNote() {
    try {
      const cardData = {
        userId: userId,
        content: content,
        projectKey: props.projectKey,
        status: props.status,
        boardId: props.boardId,
        sprintId: props.sprintId,
      };

      const { ok, data } = await apiHelper.addCard(cardData);
      if (ok && data) {
      }
      setContent("");
      props.addedCard(data as CardType);
      props.onClose();
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  }
  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
        submitNote();
        setInterval(() => {
          props.onClose();
        }, 1000);
      }}
    >
      <Textarea
        name="addCardArea"
        value={content}
        onChange={(e) => handleChange(e.target.value)}
        id="w3review"
        placeholder="What needs to be done?"
      ></Textarea>
    </Container>
  );
}
export default AddCard;
