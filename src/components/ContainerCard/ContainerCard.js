import styled from "styled-components";
import { Title } from "../Title/Title";


export const ContainerCardList = styled.View`
width: 90%;
justify-content: center;
align-items: center;
flex-direction: row;
color: yellow;
margin-bottom: 12px;
padding: 10px 10px;
gap: 10px;
border-radius: 5px;
background-color: #ffff;
box-shadow: 4px 4px 15px rgba(0,0,0,0.08)
;
`

export const ProfileImage = styled.Image`
width: 77px;
height: 80px;
border-radius: 5px;
`

export const ContentCard = styled.View`
width: 70%;

background-color: red;
`

export const DataProfileCard = styled.View`

`

export const ProfileName = styled(Title)`
font-size: 16px;
`

export const ProfileData = styled.View`
  flex-direction: row;
  gap: 15px;
`

export const TextAge = styled.Text`
font-size: 14px;
color: #8C8A97;
font-family: 'Quicksand_400Regular';
`

export const TextBold = styled.Text`
font-family: 'Quicksand_600Semibold';
font-size: 14px;
`

export const ViewRow = styled.View`
flex-direction: row;
width: 100%;
align-items: center;
justify-content: space-between;
`

export const ClockCard = styled.View`
flex-direction: row;
padding: 4px 23px;
gap: 6px;

`
export const ButtonCard = styled.View`

`
export const ButtonText = styled.Text`
font-size: 12px;
color: ${(props) => props.situacao == "pendente" ? "#C81D25" : "#344F8F"};
font-family: 'MontserratAlternates_500Medium';
`