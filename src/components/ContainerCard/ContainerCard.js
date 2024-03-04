import styled, { css } from "styled-components";
import { Title } from "../Title/Title";

export const ContainerCardList = styled.TouchableOpacity`
  width: 90%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 12px;
  padding: 10px 10px;
  gap: 10px;
  border-radius: 5px;
  border: 1px transparent;
  background-color: #F1F0F5;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.85);
`;

export const DrContainerCardList = styled(ContainerCardList)`
height: 102px;
`

export const DrCardSelected = styled(DrContainerCardList)`
border: 2px solid #496BBA;
`

export const ContainerClinicCard = styled(ContainerCardList)`
  margin-top: 5%;
  width: 85%;
  height: 84px;
`;

export const ClinicSelected = styled(ContainerClinicCard)`
border: 2px solid #496BBA;
`

export const ProfileImage = styled.Image`
  width: 77px;
  height: 80px;
  border-radius: 5px;
`;

export const ContentCard = styled.View`
  width: 70%;
`;

export const ContentClinicCard = styled.View`
  width: 55%;
`;

export const DataProfileCard = styled.View``;

export const ProfileName = styled(Title)`
  font-size: 16px;
`;

export const ProfileData = styled.View`
  flex-direction: row;
  gap: 15px;
`;

export const TextAge = styled.Text`
  font-size: 14px;
  color: #8c8a97;
  font-family: "Quicksand_400Regular";
`;

export const TextBold = styled.Text`
  font-family: "Quicksand_600Semibold";
  color: #33303E;
  font-size: 14px;
`;

export const YellowText = styled(TextBold)`
color: #F9A620;
`

export const ViewRow = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const IconCard = styled.View`
  flex-direction: row;
  padding: 4px 23px;
  gap: 6px;
  background-color: #e8fcfd;
`;
export const ButtonCard = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: ${(props) => (props.situacao == "pendente" ? "#C81D25" : "#344F8F")};
  font-family: "MontserratAlternates_500Medium";
`;
