import {
  HomeHeader,
  NameText,
  UserContainer,
  UserImage,
  UserInfoContainer,
  WelcomeText,
} from "./Header";

export default function Header() {
  return (
    <HomeHeader
      colors={["#60BFC5", "#496BBA"]}
      start={{ x: -0.05, y: 1.08 }}
      end={{ x: 1, y: 0 }}
    >
      <UserContainer>
        <UserImage source={require("../../../assets/Perfil.png")} />
        <UserInfoContainer>
          <WelcomeText>Bem vindo</WelcomeText>
          <NameText>Dr. Claudio</NameText>
        </UserInfoContainer>
      </UserContainer>
    </HomeHeader>
  );
}
