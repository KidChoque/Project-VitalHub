import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export const HomeHeader = styled(LinearGradient)`
  background-color: #60bfc5;
  height: 15%;
  border-radius: 0 0 15px 15px;
  padding: 22px 20px;
  width: 100%;
`;

export const UserContainer = styled.View`
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;

export const UserImage = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 5px;
`;

export const UserInfoContainer = styled.View`

`;

export const WelcomeText = styled.Text`
    font-size: 14px;
    font-family: 'Quicksand_500Medium';
    color: #4E4B59;
`;

export const NameText = styled.Text`
    font-size: 16px;
    font-family: 'MontserratAlternates_600SemiBold';
    color: #FBFBFB;
`;
