import { Button, ButtonTitle } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";

import { Logo } from "../../components/Logo/Logo";
import { EmailText, Subtitle, SubtitleBox } from "../../components/Subtitle/Subtitle";
import { Title } from "../../components/Title/Title";

import LogoImage from '../../../assets/Logo.png'
import { CodeInputBox } from "../../components/CodeInputBox/CodeInputBox";
import { VerificationCode } from "../../components/CodeInputBox/CodeIndex";



export const VerifyEmail = () => {
  return (
    <Container>
      <Logo source={LogoImage} />

      <Title>Verifique seu E-mail</Title>

      <SubtitleBox>
        <Subtitle>
          Digite o código de 4 dígitos enviado para <EmailText>username@email.com</EmailText>
        </Subtitle>
      </SubtitleBox>

      <CodeInputBox>
        <VerificationCode placeholder="0"/>
  
      </CodeInputBox>

      <Button>
        <ButtonTitle>Entrar</ButtonTitle>
      </Button>
    </Container>
  );
};
