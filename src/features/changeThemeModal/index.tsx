import { Container, Wrapper, ImgforTheme } from "./styles";
import { useTheme } from "../../contexts/ThemeContext";

function ChangeThemeModal() {
  const { changeMode, mode, theme } = useTheme();
  const HandlerChangeLight = () => {
    if (mode === "dark") {
      changeMode("light");
    }
  };
  const HandlerChangeDark = () => {
    if (mode === "light") {
      changeMode("dark");
    }
  };
  return (
    <Container color={theme.colour}>
      <Wrapper onClick={HandlerChangeLight} active={mode === "light"}>
        <ImgforTheme src="/icons/ligt.png" />
        Light
      </Wrapper>
      <Wrapper onClick={HandlerChangeDark} active={mode === "dark"}>
        <ImgforTheme src="/icons/dark.png" />
        Dark
      </Wrapper>
    </Container>
  );
}
export default ChangeThemeModal;
