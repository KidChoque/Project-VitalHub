import { Button, ButtonTitle } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";

import { Logo } from "../../components/Logo/Logo";
import { Subtitle, SubtitleBox } from "../../components/Subtitle/Subtitle";
import { Title } from "../../components/Title/Title";

import LogoImage from '../../../assets/Logo.png'
import { CodeInput, CodeInputBox } from "../../components/CodeInputBox/CodeInputBox";



export const VerifyEmail = () => {
  return (
    <Container>
      <Logo source={LogoImage} />

      <Title>Verifique seu E-mail</Title>

      <SubtitleBox>
        <Subtitle>
          Digite o código de 4 dígitos enviado para username@email.com
        </Subtitle>
      </SubtitleBox>

      <CodeInputBox>
        <CodeInput placeholder="0"/>
        <CodeInput />
        <CodeInput />
        <CodeInput />
      </CodeInputBox>

      <Button>
        <ButtonTitle>Entrar</ButtonTitle>
      </Button>
    </Container>
  );
};
