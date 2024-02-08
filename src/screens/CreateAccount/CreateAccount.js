import { Button, ButtonTitle, Continue } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../components/Logo/Logo";
import { Title } from "../../components/Title/Title";

import LogoImage from '../../../assets/Logo.png'
import { Subtitle, SubtitleBox } from "../../components/Subtitle/Subtitle";


export const CreateAccount = () => {

    return(

        <Container>
        
          <Logo source={LogoImage}/>

          <Title>Criar Conta</Title>

           <SubtitleBox>

          <Subtitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Subtitle>
            
           </SubtitleBox>

          <Input placeholder="  Usuário ou E-mail"/>
        
          <Input placeholder="Senha"/>

          <Input placeholder="Confirmar Senha"/>

          <Continue >
            <ButtonTitle>Cadastrar</ButtonTitle>
          </Continue>
        
        
        
        
        </Container>
    

    );
};