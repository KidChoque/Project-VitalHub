import {
  HomeHeader,
  NameText,
  UserContainer,
  UserImage,
  UserInfoContainer,
  WelcomeText,
} from "./Header";

import Profile from "../../../assets/Perfil.png";




export default function Header() {
  return (
    <HomeHeader
      colors={["#60BFC5", "#496BBA"]}
      start={{ x: -0.05, y: 1.08 }}
      end={{ x: 1, y: 0 }}
    >
      <UserContainer>
        <UserImage source={Profile} />
        <UserInfoContainer>
          <WelcomeText>Bem vindo</WelcomeText>
          <NameText> Roberto Nunes </NameText>
        </UserInfoContainer>
      </UserContainer>
    </HomeHeader>
  );
}
