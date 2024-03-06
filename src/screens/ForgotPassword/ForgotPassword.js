import {
  ArrowXIconView,
  Button,
  ButtonTitle,
  Continue,
  IconButton,
} from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../components/Logo/Logo";
import { Title } from "../../components/Title/Title";

import LogoImage from "../../../assets/Logo.png";
import { AntDesign } from "@expo/vector-icons";

import { Subtitle, SubtitleBox } from "../../components/Subtitle/Subtitle";

export const ForgotPassaword = ({ navigation }) => {
  return (
    <Container>
      <ArrowXIconView>
        <IconButton  onPress={() => navigation.navigate("Login")}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </IconButton>
      </ArrowXIconView>

      <Logo source={LogoImage} />

      <Title>Recuperar Senha</Title>

      <SubtitleBox>
        <Subtitle>
          Digite abaixo seu email cadastrado que enviaremos um link para
          recuperação de senha
        </Subtitle>
      </SubtitleBox>

      <Input placeholder="Usuário ou E-mail" />

      <Continue onPress={() => navigation.navigate("VerifyEmail")}>
        <ButtonTitle>Continuar</ButtonTitle>
      </Continue>
    </Container>
  );
};
