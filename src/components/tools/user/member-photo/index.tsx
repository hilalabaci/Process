import { useUserContext } from "../../../../contexts/UserContext";
import { UserType } from "../../../../types";
import { Container, Memberphoto } from "./styles";
interface MemberPhotoProps {
  user?: UserType;
  $hidden?: boolean;
  $userPhotoWidth?: string;
  $userPhotoHeight?: string;
  $userPhotoFontSize?: string;
  $userBorderadius?: string;
  $userBorder?: string;
  $fontWeight?: string;
  $marginLeft?: string;
  style?: { zIndex?: number };
}

function MemberPhoto(props: MemberPhotoProps) {
  const { user: contextUser } = useUserContext();
  const user = props.user ?? contextUser;

  const chars = user?.fullName?.split(" ") ?? ["Undefined"];
  const firstName = chars[0];
  const lastName = chars.length > 1 ? chars[1] : "";

  return (
    <Container
      style={{ zIndex: props.style?.zIndex }}
      $hidden={props.$hidden}
      $marginLeft={props.$marginLeft}
    >
      <Memberphoto
        $userPhotoWidth={props.$userPhotoWidth}
        $userPhotoHeight={props.$userPhotoHeight}
        $userPhotoFontSize={props.$userPhotoFontSize}
        $userBorderadius={props.$userBorderadius}
        $userBorder={props.$userBorder}
        $fontWeight={props.$fontWeight}
      >
        {firstName[0]}
        {lastName[0]}
      </Memberphoto>
    </Container>
  );
}
export default MemberPhoto;
