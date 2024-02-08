import { Button, ButtonTitle, Continue } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../components/Logo/Logo";
import { Title } from "../../components/Title/Title";

import LogoImage from '../../../assets/Logo.png'
import { Subtitle, SubtitleBox } from "../../components/Subtitle/Subtitle";


export const ResetPassaword = () => {

    return(

        <Container>
        
          <Logo source={LogoImage}/>

          <Title>Redefinir Senha</Title>

           <SubtitleBox>

          <Subtitle>Insira e confirme a sua nova senha</Subtitle>
            
           </SubtitleBox>

          <Input placeholder=" Nova Senha"/>
        
          <Input placeholder="Confirmar nova senha"/>

          <Continue >
            <ButtonTitle>Confirmar Nova Senha</ButtonTitle>
          </Continue>
        
        
        
        
        </Container>
    

    );
};