import { useState } from "react";
import Card from "../cards/Card";
import NumberOfCards from "../number-cards";
import AddCard from "../add-a-card/AddCard";
import { useDrop } from "react-dnd";
import { CardType, DragItem } from "../../../../types";
import apiHelper from "../../../../api/apiHelper";
import {
  CardWrapper,
  Container,
  Title,
  TitleWrapper,
  AddCardButtonWrapper,
  AddCardButton,
  IconAdd,
} from "./styles";

interface CardListProps {
  title: string;
  numberOfCards: number;
  numberOfFilteredCards: number;
  cards: CardType[];
  status: number;
  projectKey: string;
  boardId: string;
  onUpdate: (card: CardType) => void;
  onDelete: (id: string) => void;
  addedCard: (card: CardType) => void;
}

function CardList(props: CardListProps) {
  const [showAdd, setShowAdd] = useState(false);
  function dynamicAddCard() {
    setShowAdd(true);
  }
  function closeAddCard() {
    setShowAdd(false);
  }

  async function updateStatus(id: string, status: number) {
    const response = await apiHelper.updateCard(id, status);
    if (response.ok && response.data) {
      props.onUpdate(response.data);
    } else {
      console.error("Failed to update card:", response);
    }
  }

  const [, drop] = useDrop<DragItem>({
    accept: "CARD",
    drop: (item) => {
      updateStatus(item.id, props.status);
    },
  });

  return (
    <Container ref={drop}>
      <TitleWrapper>
        <Title>{props.title}</Title>
        <NumberOfCards
          numberOfCards={props.numberOfCards}
          numberOfFilteredCards={props.numberOfFilteredCards}
        />
      </TitleWrapper>
      <CardWrapper>
        {props.cards?.map((card, index) => (
          <Card
            onUpdate={props.onUpdate}
            onDelete={props.onDelete}
            id={card._id}
            key={index}
            content={card.content}
            labels={card.labels}
            userId={card.userId}
            userName={card.userId.fullName}
          />
        ))}
      </CardWrapper>
      <AddCardButtonWrapper>
        {showAdd ? (
          <AddCard
            addedCard={props.addedCard}
            projectKey={props.projectKey}
            onClose={closeAddCard}
            status={props.status}
            boardId={props.boardId}
          />
        ) : (
          <AddCardButton onClick={dynamicAddCard} type="submit">
            <IconAdd /> Create issue
          </AddCardButton>
        )}
      </AddCardButtonWrapper>
    </Container>
  );
}
export default CardList;
