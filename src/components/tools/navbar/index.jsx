import React, { useCallback, useEffect, useRef, useState } from "react";
import MemberButton from "../user/member-button";

import {
  BrandContainer,
  BrandLogo,
  HeaderContainer,
  NavbarContainer,
  Presentation,
  Projects,
  ProjectsButton,
  ProjectsSpan,
  GlobalStyle,
  SearchUser,
  LightMode,
  DarkMode,
  IconNotification,
  NotificationCount,
  NotificationContainer,
  NotificationWrapper,
  Title,
  ButtonforTheme,
  ButtonforNotification,
  CreateWrapper,
  CreateButton,
} from "./styles";
import { Button } from "@mui/material";
import { useTheme } from "../../../contexts/ThemeContext";
import Search from "../search";
import Modal from "../../actions/modal";
import Notification from "../../actions/notification";
import { useUserContext } from "../../../contexts/UserContext";
import BoardCreate from "../../actions/boards/board-add/create";

function Navbar(props) {
  const { user } = useUserContext();
  const notificationIconRef = useRef(null);
  const { changeMode, mode, theme } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showModalforCreateButton, setShowModalforCreateButton] =
    useState(false);

  function openModalforCreateButton() {
    setShowModalforCreateButton(true);
  }
  function closeModalforCreateButton() {
    setShowModalforCreateButton(false);
  }
  function closeModal() {
    setShowModal(false);
  }

  function toggleModal() {
    setShowModal(!showModal);

    if (!showModal && unReadNotificationCount > 0) {
      markNotificationsRead();
    }
  }
  const loadNotificatios = useCallback(async () => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "notification?userId=" + user._id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      setNotifications(data);
    }
  }, [user]);

  useEffect(() => {
    if (user?._id) {
      loadNotificatios();
    }
  }, [user, loadNotificatios]);

  async function markNotificationsRead() {
    const unReadNotificationIds = notifications
      .filter((n) => !n.isRead)
      .map((n) => n._id);
    if (unReadNotificationIds.length <= 0) return;
    const body = { notificationIds: unReadNotificationIds };
    const response = await fetch(
      process.env.REACT_APP_API_URL + "notification/mark-read",
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      setTimeout(() => {
        setNotifications(notifications.map((n) => ({ ...n, isRead: true })));
      }, 5000);
    }
  }

  const unReadNotificationCount = notifications.filter((n) => !n.isRead).length;

  return (
    <HeaderContainer color={theme.primary}>
      {showModalforCreateButton && (
        <Modal onClose={closeModalforCreateButton}>
          <BoardCreate
            onCreate={props.onCreate}
            onClose={closeModalforCreateButton}
          />
        </Modal>
      )}
      <NavbarContainer>
        <GlobalStyle />
        <BrandContainer>
          <BrandLogo />
          Process
        </BrandContainer>
        <Presentation>
          <Projects>
            <ProjectsButton>
              Projects
              <ProjectsSpan />
            </ProjectsButton>
          </Projects>
          <CreateWrapper>
            <CreateButton onClick={openModalforCreateButton}>
              Create
            </CreateButton>
          </CreateWrapper>
        </Presentation>
      </NavbarContainer>
      <SearchUser>
        <Search onSearch={props.onSearch} />
        <ButtonforNotification
          $isNotificationModalOpen={showModal}
          onClick={toggleModal}
          ref={notificationIconRef}
        >
          {unReadNotificationCount > 0 && (
            <NotificationCount>{unReadNotificationCount}</NotificationCount>
          )}

          <IconNotification $isNotificationModalOpen={showModal} />
        </ButtonforNotification>
        <ButtonforTheme>
          <Button
            style={{ minWidth: "0px", padding: "0" }}
            onClick={() => {
              changeMode(mode === "light" ? "dark" : "light");
            }}
          >
            {mode === "light" ? <DarkMode /> : <LightMode />}
          </Button>
        </ButtonforTheme>

        <MemberButton />
      </SearchUser>
      {showModal && (
        <Modal
          onClose={closeModal}
          excludedRef={notificationIconRef}
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-end",
            top: "61px",
            right: "-220px",
            background: "none",
          }}
        >
          <NotificationContainer>
            <Title>Notification</Title>
            <NotificationWrapper>
              {notifications.map((n) => {
                return <Notification key={n._id} notification={n} />;
              })}
            </NotificationWrapper>
          </NotificationContainer>
        </Modal>
      )}
    </HeaderContainer>
  );
}
export default Navbar;
