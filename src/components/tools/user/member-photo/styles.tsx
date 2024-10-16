import styled from "styled-components";

interface ContainerProps {
  $hidden?: boolean;
  $userBorder?: string;
  $marginLeft?: string;
}

// Memberphoto için props arayüzünü tanımla
interface MemberphotoProps {
  $userPhotoWidth?: string;
  $userPhotoHeight?: string;
  $userPhotoFontSize?: string;
  $userBorderadius?: string;
  $userBorder?: string;
  $fontWeight?: string;
}
export const Container = styled.div<ContainerProps>`
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  margin-left: ${(props) => props.$marginLeft};
  &:hover {
    border: ${(props) => props.$userBorder};
  }
`;
export const Memberphoto = styled.div<MemberphotoProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$userPhotoWidth};
  height: ${(props) => props.$userPhotoHeight};
  font-size: ${(props) => props.$userPhotoFontSize};
  border-radius: ${(props) => props.$userBorderadius};
  border: ${(props) => props.$userBorder};
  //background: linear-gradient(135deg, #71b7e6, #9b59b6);
  background-color: #de835d;
  position: relative;
  color: #182a4e;
  text-transform: uppercase;
  font-weight: ${(props) => props.$fontWeight};

  @media only screen and (max-width: 768px) {
    width: 25px;
    height: 25px;
    font-size: 10px;
  }
`;
