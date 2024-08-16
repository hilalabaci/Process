import React, { useState } from "react";
import { useUserContext } from "../../../../contexts/UserContext";
import useOutsideClick from "../../../../hooks/useOutsideClick";
import ChangeThemeModal from "../../../actions/changeThemeModal";
import {
  Container,
  Title,
  Accountdetails,
  Options,
  Memberphoto,
  Memberinfo,
  MemberName,
  MemberEmail,
  Logout,
  ButtonforTheme,
  ArrowforButton,
  IconforManaAccount,
} from "./styles";
import Modal from "../../../actions/modal";

function MemberMenu(props) {
  const [showModal, setShowModal] = useState(false);
  const { setUser } = useUserContext();
  const { user } = useUserContext();
  const ref = useOutsideClick(props.onClose);
  const userFullName = user.fullName;
  const userEmail = user.email;
  const chars = userFullName.split(" ");
  const firstName = chars[0];
  const lastName = chars.length > 1 ? chars[1] : "";

  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }

  function logOut() {
    setUser(undefined);
  }
  return (
    <Container ref={ref}>
      <Title>Account</Title>
      <Accountdetails>
        <Memberphoto>
          {firstName[0]}
          {lastName[0]}
        </Memberphoto>
        <Memberinfo>
          <MemberName>{userFullName}</MemberName>
          <MemberEmail>{userEmail}</MemberEmail>
        </Memberinfo>
      </Accountdetails>
      <Options>
        Manage account <IconforManaAccount />
      </Options>
      <Options>
        <ButtonforTheme onClick={openModal}>
          Theme
          <ArrowforButton />
        </ButtonforTheme>
      </Options>
      <Options>
        <Logout onClick={logOut}> Log out</Logout>
      </Options>
      {showModal && (
        <Modal
          style={{
            background: "none",
          }}
          onClose={closeModal}
        >
          <ChangeThemeModal />
        </Modal>
      )}
    </Container>
  );
}
export default MemberMenu;
