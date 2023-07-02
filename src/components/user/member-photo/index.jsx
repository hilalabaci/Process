import React from "react";
import { useUserContext } from "../../../contexts/UserContext";
import { Container, Memberphoto } from "./styles";

function MemberPhoto(props) {
  const { user } = useUserContext();
  const userFullName = user.fullName;
  const chars = userFullName.split(" ");
  const firstName = chars[0];
  const lastName = chars[1];
  return (
    <Container $hidden={props.$hidden}>
      <Memberphoto>
        {firstName[0]}
        {lastName[0]}
      </Memberphoto>
    </Container>
  );
}
export default MemberPhoto;
