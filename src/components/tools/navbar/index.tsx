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
  NavbarLeftSideWrapper,
  IconNotification,
  NotificationCount,
  NotificationContainer,
  NotificationWrapper,
  Title,
  ButtonforNotification,
  CreateWrapper,
  CreateButton,
  MemberButtonWrapper,
} from "./styles";
import Search from "../search";
import Modal from "../../actions/modal";
import Notification from "../../actions/notification";
import { useUserContext } from "../../../contexts/UserContext";
import BoardCreate from "../../actions/boards/board-add/create";
import { BoardType, NotificationType } from "../../../types";
type NavbarPropsType = {
  onSearch: (value: string) => void;
  onCreate: (board: BoardType) => void;
  isMemberButtoOpen: boolean;
};

function Navbar(props: NavbarPropsType) {
  const { user } = useUserContext();
  const notificationIconRef = useRef<HTMLButtonElement | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [memberMenu, setMemberMenu] = useState(false);
  function openMemberMenu() {
    setMemberMenu(true);
  }
  function closeMemberMenu() {
    setMemberMenu(false);
  }

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
      process.env.REACT_APP_API_URL + "notification?userId=" + user?._id,
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
    <HeaderContainer>
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
      <NavbarLeftSideWrapper>
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
        <MemberButtonWrapper $isMemberButtonOpen={memberMenu}>
          <MemberButton
            onClick={openMemberMenu}
            closeMenu={closeMemberMenu}
            showMenu={memberMenu}
          />
        </MemberButtonWrapper>
      </NavbarLeftSideWrapper>
      {showModalforCreateButton && (
        <Modal onClose={closeModalforCreateButton}>
          <BoardCreate
            onCreate={props.onCreate}
            onClose={closeModalforCreateButton}
          />
        </Modal>
      )}
      {showModal && (
        <Modal
          onClose={closeModal}
          excludedRef={notificationIconRef}
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-end",
            top: "60px",
            right: "70px",
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
