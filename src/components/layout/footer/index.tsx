import { WelcomeTexts } from "../../../constants/welcomeTexts";
import {
  BrandInfo,
  Brandlogo,
  FooterContainer,
  IconLanguage,
  IconSelect,
  LinkItem,
  LinkWrapper,
  CopyRigtWrapper,
} from "./styles";

function Footer() {
  return (
    <FooterContainer>
      <BrandInfo>
        <Brandlogo src="/logo/logo32.ico" />
        Manage all your projects in one place
      </BrandInfo>
      <LinkWrapper>
        <CopyRigtWrapper>{WelcomeTexts.footer.copyright}</CopyRigtWrapper>
        <LinkItem>{WelcomeTexts.footer.privacyPolicy}</LinkItem>
        <LinkItem>{WelcomeTexts.footer.terms}</LinkItem>
        <LinkItem>
          <IconLanguage /> English
          <IconSelect />
        </LinkItem>
      </LinkWrapper>
    </FooterContainer>
  );
}
export default Footer;
