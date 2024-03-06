import { ArrowXIconView, Button, ButtonTitle, IconButton } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";

import { Logo } from "../../components/Logo/Logo";
import { Title } from "../../components/Title/Title";

import LogoImage from "../../../assets/Logo.png";
import { CodeInputBox } from "../../components/CodeInputBox/CodeInputBox";
import { VerificationCode } from "../../components/CodeInputBox/CodeIndex";
import {
  EmailBlueText,
  Subtitle,
  SubtitleBox,
} from "../../components/Subtitle/Subtitle";

import { AntDesign } from "@expo/vector-icons";

export const VerifyEmail = ({ navigation }) => {
  return (
    <Container>
      <ArrowXIconView>
        <IconButton onPress={() => navigation.navigate("Login")}>
          <AntDesign name="close" size={24} color="black" />
        </IconButton>
      </ArrowXIconView>
      <Logo source={LogoImage} />

      <Title>Verifique seu E-mail</Title>

      <SubtitleBox>
        <Subtitle>
          Digite o código de 4 dígitos enviado para{" "}
          <EmailBlueText>username@email.com</EmailBlueText>
        </Subtitle>
      </SubtitleBox>

      <CodeInputBox>
        <VerificationCode />
      </CodeInputBox>

      <Button onPress={() => navigation.navigate("ResetPassword")}>
        <ButtonTitle>Entrar</ButtonTitle>
      </Button>
    </Container>
  );
};
