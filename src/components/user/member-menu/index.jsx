import React from "react";
import { useUserContext } from "../../../contexts/UserContext";
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
} from "../member-menu/styles";

function MemberMenu() {
  const { setUser } = useUserContext();
  const { user } = useUserContext();
  const userFullName = user.fullName;
  const userEmail = user.email;
  const chars = userFullName.split(" ");
  const firstName = chars[0];
  const lastName = chars[1];

  function logOut() {
    setUser(undefined);
  }
  return (
    <Container>
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
      <Options> Manage account</Options>
      <Logout onClick={logOut}> Log out</Logout>
    </Container>
  );
}
export default MemberMenu;