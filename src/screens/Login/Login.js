import { Container } from "../../components/Container/Container";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../components/Logo/Logo";
import { Title } from "../../components/Title/Title";

import LogoImage from "../../../assets/Logo.png";
import { LinkAccount, LinkMedium } from "../../components/Link/Link";
import { Button, ButtonTitle } from "../../components/Button/Button";
import {
  GoogleButton,
  GoogleButtonTitle,
} from "../../components/GoogleButton/GoogleButton";
import { AntDesign } from "@expo/vector-icons";
import { ContentAccount, TextAccount } from "./Style";
import { Main } from "../Main/Main";

export const Login = ({ navigation }) => {
  async function Login() {
    navigation.replace("Main");
  }
  return (
    <Container>
      <Logo source={LogoImage} />
      <Title>Entrar ou criar conta  </Title>

      <Input placeholder="Usuário ou E-mail" />
      <Input placeholder="Senha" />

      <LinkMedium onPress={() => navigation.navigate("ForgotPassword")}>
        Esqueceu sua senha ? </LinkMedium>

      <Button onPress={Login}>
        <ButtonTitle> Entrar </ButtonTitle>
      </Button>

      <GoogleButton>
        <AntDesign name="google" size={24} color="#496BBA" />
        <GoogleButtonTitle>Entrar com Google </GoogleButtonTitle>
      </GoogleButton>

      <ContentAccount>
        <TextAccount>
          Não tem Conta ?
          <LinkAccount onPress={() => navigation.navigate("ConsultationLocation")}>
            Crie uma conta agora!
          </LinkAccount>{" "}
        </TextAccount>
      </ContentAccount>
    </Container>
  );
};
