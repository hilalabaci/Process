import styled from "styled-components";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import CircleIcon from "@mui/icons-material/Circle";

export const Container = styled.div`
  height: 100vh;
`;
export const BrandLogo = styled(DashboardRoundedIcon)`
  font-size: 26px !important;
  margin: 0px 5px;
  //color: ${(props) => props.theme.colour.memberMenuFontColor} !important;
  color: #9b59b6;
  @media only screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0px 10px;
  }
`;
export const MainContainer = styled.main``;
export const SectionWrapper = styled.article`
  box-sizing: border-box;
  height: fit-content;
`;
export const StartTrial = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: auto 100%, auto;
  background-position: 100% 0, 0 0;
  height: 100vh;
  background-repeat: no-repeat;
  padding-top: 3.75rem;
  gap: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #567c8d;
  // background-image: linear-gradient(275deg, #b08ace -7.63%, #9b59b6 105.13%);
  /* @media only screen and (min-width: 1024px) {
    background-image: url(https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/pqscp5k83xxt7pq7f67jftr/JSM_BG_Graphics.webp),
      linear-gradient(
        287.15deg,
        #fafbfc,
        #deebff 8.06%,
        #b3d4ff 35.45%,
        #deebff 77.6%,
        #fafbfc
      );
  } */
  @media only screen and (max-width: 600px) {
    padding-top: 0;
  }
`;
export const StartTrialWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 75pc;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const TabSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  background: white;

  @media only screen and (max-width: 600px) {
    margin: 35px 0;
    margin-inline: 24px;
  }
`;
export const TabWrapper = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 50px 0;
  @media (min-width: 64rem) {
    max-width: 75pc;
  }
  @media only screen and (max-width: 600px) {
    height: min-content;
  }
`;
export const TabTitleWrapper = styled.div`
  text-align: center;
`;
export const TabContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(10px, 1fr));
  gap: 30px;
  align-items: stretch;
  justify-content: start;
  box-sizing: border-box;
  line-height: 1.5;
  margin-inline: 24px;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;
export const TabContent = styled.div`
  background: ${(props) => props.theme.colour.tabContentBGColour};
  border-radius: 12px;
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TabContent1 = styled.div`
  background: ${(props) => props.theme.colour.tabContentBGColour1};
  border-radius: 12px;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;
export const TabContent2 = styled.div`
  background: ${(props) => props.theme.colour.tabContentBGColour2};
  border-radius: 12px;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;
export const TabContent3 = styled.div`
  background: ${(props) => props.theme.colour.tabContentBGColour3};
  border-radius: 12px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  grid-column: span 2;
`;
export const TabContent4 = styled.div`
  background: ${(props) => props.theme.colour.tabContentBGColour4};
  border-radius: 12px;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;
export const TabContent5 = styled.div`
  background: ${(props) => props.theme.colour.tabContentBGColour5};
  border-radius: 12px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  grid-column: span 3;
`;
export const LineIcon = styled(CircleIcon)`
  width: 12px !important;
`;
export const TabContentTitle = styled.h4`
  color: #fff;
  font-size: 20px;
  font-weight: 800;
`;
export const TabParag = styled.div`
  color: #fff;
  text-align: start;
  font-size: 16px;
  font-weight: 500;
`;
export const WrapperParag = styled.div`
  display: flex;
  gap: 5px;
`;

export const TabTitle = styled.h2`
  font-size: 2.47rem;
  line-height: 1.243902439;
  font-weight: 600;
  color: ${(props) => props.theme.colour.fontColour2};
  cursor: default;
  @media only screen and (max-width: 600px) {
    padding: 0;
    font-size: 32px;
    color: black;
    font-weight: 700;
  }
`;
export const TitleDetail = styled.p`
  font-size: 19px;
  color: #2f4156;
  cursor: default;
`;
export const InfoSection = styled.div`
  background: linear-gradient(352deg, #c8d9e6 6.96%, #ffffff 107.25%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  @media only screen and (max-width: 600px) {
    height: min-content;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
export const CollapseParent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 75pc;
  padding: 70px 0 50px 0;
  @media only screen and (max-width: 600px) {
    margin: 0 25px;
    margin-inline: 24px;
    height: min-content;
    padding: 0;
    flex-direction: column;
  }
`;
export const CollapseNavigation = styled.div`
  margin-inline: 24px;
`;
export const CollapseItem = styled.div`
  padding: 10px 0;
  @media only screen and (max-width: 600px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;
type displayProps = {
  $display?: boolean;
};
export const CollapseTitle = styled.h3<displayProps>`
  cursor: pointer;
  font-size: 34px;
  font-weight: 800;
  background: rgb(127 118 174 / 60%);
  background: ${(props) =>
    props.$display
      ? "linear-gradient(269deg,#fa12e3 1.83%,#7612fa 53.68%,#12d0fa 106.48%)"
      : "rgb(127 118 174 / 60%)"};
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 1s ease;
  margin: 0;
  &:hover {
    background: linear-gradient(
      269deg,
      #fa12e3 1.83%,
      #7612fa 53.68%,
      #12d0fa 106.48%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media only screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

export const CollapseText = styled.div<displayProps>`
  display: ${(props) => (props.$display ? "flex" : "none")};
  opacity: ${(props) => (props.$display ? "1" : "0")};
  flex-direction: column;
  font-size: 16px;
  line-height: 1.5;
  transition: all 1s ease;
  cursor: default;
  padding: 10px 0;
  color: ${(props) => props.theme.colour.fontColour2};
`;
export const CollapseContentElementChild = styled.div<displayProps>`
  display: none;
  padding: 15px;
  border-radius: 14px;
  background: linear-gradient(
    247deg,
    #567c8d 17.39%,
    #2f4156 64.22%,
    #c8d9e6 97.73%
  );
  box-shadow: 0 3px 20px 0 rgba(67, 46, 134, 0.1);
  @media only screen and (max-width: 600px) {
    display: ${(props) => (props.$display ? "flex" : "none")};
    box-shadow: none;
    background: none;
    
  }
`;
export const CollapseContentElement = styled.div<displayProps>`
  display: ${(props) => (props.$display ? "flex" : "none")};
  padding: 15px;
  border-radius: 14px;
  background: linear-gradient(
    247deg,
    #567c8d 17.39%,
    #2f4156 64.22%,
    #c8d9e6 97.73%
  );
  box-shadow: 0 3px 20px 0 rgba(67, 46, 134, 0.1);
  @media only screen and (max-width: 600px) {
    display: none;
    box-shadow: none;
    background: none;
  }
`;

type CommonPropsType = {
  $hidden?: boolean;
};
export const SectionEntery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-inline: 24px;
  @media only screen and (max-width: 768px) {
  }
`;

export const GetStartWrapper = styled.div<CommonPropsType>`
  display: flex;
  flex-direction: column;
  //padding-bottom: ${({ $hidden }) => ($hidden ? "0" : " 5rem")};
  opacity: ${({ $hidden }) => ($hidden ? "0" : "1")};
  width: ${({ $hidden }) => ($hidden ? "0" : "auto")};
  height: ${({ $hidden }) => ($hidden ? "0" : "auto")};
`;
export const GetStartGmailWrapper = styled.div<CommonPropsType>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //padding-bottom: ${({ $hidden }) => ($hidden ? "0" : " 5rem")};
  opacity: ${({ $hidden }) => ($hidden ? "0" : "1")};
  height: ${({ $hidden }) => ($hidden ? "0" : "auto")};
  width: ${({ $hidden }) => ($hidden ? "0" : "auto")};
  transition: 750ms opacity;
  @media only screen and (max-width: 768px) {
  }
`;
export const Promotion = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
export const Title = styled.h1`
  color: #fff;
  line-height: 3.5rem;
  font-size: 3rem;
  margin-bottom: 0;
  cursor: default;
  margin: 0;
  text-shadow: 0.5px 0.5px #2f4156;
  @media only screen and (max-width: 600px) {
    font-size: 32px;
    line-height: 2rem;
  }
`;
export const TitleParag = styled.h3`
  color: #fff;
  margin-block-start: 24px;
  line-height: 1.33333333;
  letter-spacing: 0.3px;
  font-weight: 500;
  min-height: 80px;
  max-height: 100px;
  cursor: default;
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
//  background: linear-gradient(135deg, #71b7e6, #9b59b6);

export const ButtonForGetStart = styled.button`
  max-width: fit-content;
  border: none;
  outline: none;
  //color: ${(props) => props.theme.colour.primary};
  color: #2f4156;
  font-weight: 500;
  padding: 12px 50px;
  border-radius: 5px;
  font-size: 17px;
  //background: linear-gradient(135deg, #71b7e6, #9b59b6);
  background-color: #f5efeb;
  margin-top: 10px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31);
  &:hover {
    // background: linear-gradient(-135deg, #567c8d, #2f4156);
    color: #f5efeb;
    background-color: #2f4156;
    transition: 500ms background-color;
  }
  @media only screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 47px;
  }
`;
export const ImgForWelcome = styled.img`
  box-shadow: 0 4px 8px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31);
  max-width: 700px;
  @media only screen and (max-width: 600px) {
    max-width: 300px;
  }
`;
export const Footer = styled.footer`
  background: #ffffff;
`;

export const LoginText = styled.p`
  font-size: 17px;
  color: #f5efeb;
  //padding: 20px 0;
  font-weight: 400;
  cursor: default;
`;
export const LoginLink = styled.a`
  color: #fca700;
  font-size: 17px;
  margin-left: 5px;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #ff8b00;
  }
`;
