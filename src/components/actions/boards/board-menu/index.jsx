import React, { useState, useEffect } from "react";
import { useUserContext } from "../../../../contexts/UserContext";
import MemberPhoto from "../../../tools/user/member-photo";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Container,
  AddBoardWrapper,
  ListWrapper,
  UserInfo,
  MemberName,
  ArrowIcon,
  PlusIcon,
} from "./styles";
import BoardCreate from "../board-add/create";
import BoardList from "../board-list/index";

function BoardMenu(props) {
  const { user } = useUserContext();
  const [key, setKey] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);

  function handlerClick() {
    setKey(true);
  }

  useEffect(() => {
    loadBoards();
    // eslint-disable-next-line
  }, []);

  async function loadBoards() {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "board?userId=" + user._id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      props.setBoards(data);
    }
  }

  function onDelete(id) {
    props.setBoards(props.boards.filter((board) => board._id !== id));
  }

  function onCreate(data) {
    props.setBoards([data, ...props.boards]);
    setKey(false);
  }

  const userFullName = user.fullName;
  const chars = userFullName.split(" ");
  const firstName = chars[0];

  return (
    <Container $hidden={hideMenu}>
      <UserInfo $hidden={hideMenu}>
        <MemberPhoto
          $userPhotoWidth="40px"
          $userPhotoHeight="40px"
          $userPhotoFontSize="15px"
          $userBorderadius="5px"
          $hidden={hideMenu}
        />
        <MemberName $hidden={hideMenu}>Hello {firstName}</MemberName>
        <ArrowIcon
          $hidden={hideMenu}
          as={hideMenu ? KeyboardArrowRightIcon : KeyboardArrowLeftRoundedIcon}
          onClick={() => {
            setHideMenu(!hideMenu);
          }}
        />
      </UserInfo>
      <AddBoardWrapper $hidden={hideMenu}>
        <div>Your Boards</div>
        <PlusIcon onClick={handlerClick} />
      </AddBoardWrapper>
      {key && <BoardCreate onCreate={onCreate} />}
      <ListWrapper $hidden={hideMenu}>
        <BoardList
          onBoardChange={props.onBoardChange}
          boards={props.boards}
          onDelete={onDelete}
        />
      </ListWrapper>
    </Container>
  );
}
export default BoardMenu;
