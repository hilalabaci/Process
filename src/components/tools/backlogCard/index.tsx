import { useDrag } from "react-dnd";
import {
  BacklogDragItems,
  CardStatus,
  CardType,
  DragDropCollect,
  DragItem,
  UserType,
} from "../../../types";
import { getStatusLabel } from "../../../utils/label";
import CheckboxRadixUi from "../checkboxRadixUI";
import SelectDemo from "../selectDemo";
import { ToolTip } from "../toolstip";
import MemberPhoto from "../user/member-photo";
import {
  BacklogCardListItems,
  CheckboxWrapper,
  CardKey,
  ContentWrapper,
  Content,
  ContentText,
  IconEdit,
  Status,
  MemberWrapper,
  MoreIcon,
} from "./styles";
import { useState } from "react";
import { DropdownMenu } from "../dropdownMenu";
import apiHelper from "../../../api/apiHelper";

type BacklogCardPropsType = {
  cardKey: string;
  content: string;
  status: number;
  user: UserType;
  id: string;
  sprintId?: string;
  boardId: string;
  updateCardsAfterDelete: (id: string) => void;
  onUpdateCardStatus: (id: string, status: number) => void;
  updateCardAfterDrag: (id: string) => void;
};

function BacklogCard({
  cardKey,
  content,
  status,
  user,
  id,
  sprintId,
  boardId,
  updateCardsAfterDelete,
  onUpdateCardStatus,
  updateCardAfterDrag,
}: BacklogCardPropsType) {
  const [{ isDragging }, drag] = useDrag<
    BacklogDragItems,
    unknown,
    DragDropCollect
  >({
    type: "BACKLOG_CARD",
    item: { cardId: id, oldSprintId: sprintId, boardId: boardId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end(_, monitor) {
      if (!monitor.didDrop()) {
        return;
      }

      const dropResult = monitor.getDropResult<{
        droppedCard: Promise<CardType | undefined>;
      }>();

      if (!dropResult?.droppedCard) return;

      dropResult.droppedCard.then((card) => {
        console.log("result is here", card);
        if (!card) return;
        updateCardAfterDrag(card._id);
      });
    },
  });
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }
  const statusOptions = [
    { label: getStatusLabel(CardStatus.Backlog), value: CardStatus.Backlog },
    { label: getStatusLabel(CardStatus.ToDo), value: CardStatus.ToDo },
    {
      label: getStatusLabel(CardStatus.InProgress),
      value: CardStatus.InProgress,
    },
    { label: getStatusLabel(CardStatus.Done), value: CardStatus.Done },
  ];

  async function updateCard(id: string, status: number) {
    const response = await apiHelper.updateCard(id, status);
    if (response.ok && response.data) {
      onUpdateCardStatus(response.data._id, response.data.status);
    } else {
      console.error("Failed to update card:", response);
    }
  }
  const handleStatusChange = async (status: CardStatus) => {
    await updateCard(id, status);
  };

  async function deleteCard() {
    const cardId = id;
    const response = await fetch(
      process.env.REACT_APP_API_URL + "card?id=" + cardId,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      updateCardsAfterDelete(id);
    }
  }

  return (
    <BacklogCardListItems role="button" ref={drag}>
      <CheckboxWrapper>
        <CheckboxRadixUi />
      </CheckboxWrapper>
      <CardKey>{cardKey}</CardKey>
      <ContentWrapper>
        <ToolTip
          contentStyle={{ zIndex: 0 }}
          trigger={
            <Content>
              <ContentText>{content}</ContentText>
              <IconEdit />
            </Content>
          }
          content={content}
        ></ToolTip>
      </ContentWrapper>
      <Status status={status}>
        <SelectDemo
          items={statusOptions}
          onSelect={(val) => handleStatusChange(val as CardStatus)}
          selectedValue={status}
        />
      </Status>
      <MemberWrapper>
        <ToolTip
          trigger={
            <MemberPhoto
              user={user}
              $userPhotoWidth="25px"
              $userPhotoHeight="25px"
              $userPhotoFontSize="7px"
              $userBorderadius="50px"
            />
          }
          content={user.fullName}
        ></ToolTip>
      </MemberWrapper>
      <DropdownMenu
        trigger={<MoreIcon onClick={openModal} />}
        items={[
          {
            label: "Move to",
            action: () => console.log("Go to settings"),
            subItems: [
              {
                action: () => {
                  updateCard(id, CardStatus.ToDo);
                },
                label: "To Do",
              },
              {
                action: () => {
                  updateCard(id, CardStatus.InProgress);
                },
                label: "In progress",
              },
              {
                action: () => {
                  updateCard(id, CardStatus.Done);
                },
                label: "Done",
              },
            ],
          },
          {
            label: "Add label",
            action: () => console.log("Go to settings"),
          },
          {
            label: "Delete",
            action: () => {
              deleteCard();
            },
          },
        ]}
      />
    </BacklogCardListItems>
  );
}
export default BacklogCard;
