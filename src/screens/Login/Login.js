import { Container } from "../../components/Container/Container";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../components/Logo/Logo";
import { Title } from "../../components/Title/Title";

import LogoImage from '../../../assets/Logo.png'
import { LinkMedium } from "../../components/Link/Link";
import { Button, ButtonTitle } from "../../components/Button/Button";
import { GoogleButton, GoogleButtonTitle } from "../../components/GoogleButton/GoogleButton";

export const Login = () => {
    return (
      <Container>
        <Logo source={LogoImage} />
        <Title>Entrar ou criar conta</Title>
        
       
          <Input placeholder="Usuário ou Email" />
          <Input placeholder="Senha" />
  
          <LinkMedium>Esqueceu sua senha ?</LinkMedium>
  
          <Button>
            <ButtonTitle> Entrar</ButtonTitle>
          </Button>
  
          <GoogleButton>
            <GoogleButtonTitle>Entrar com Google</GoogleButtonTitle>
          </GoogleButton>
  
          {/* <ContentAccount>
            <TextAccount></TextAccount>
          </ContentAccount>  */}
      </Container>
    );
  };