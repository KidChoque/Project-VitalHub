import styled from "styled-components";

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 44px;
  border-radius: 5px;
  background-color: #496bba;
  /* margin: 5%; */
`;

export const ScheduleBtn = styled(Button)`
margin-top: 30%;
`

export const IconButton = styled.TouchableOpacity`
`




export const ScheduleButtonView = styled.View`

position: fixed;

margin-bottom:10%;
left: 37%;

background-color: #49B3BA;



justify-content: center;
align-items: center;

border-radius: 8px;
width: 60px;
height: 60px;

`

export const ArrowXIconView = styled.View`

position: fixed;

margin-top: 5%;
right: 42%;

background-color: #49B3BA;


justify-content: center;
align-items: center;

border-radius: 10px;
width:30px;
height:30px;

`


export const Continue = styled(Button)`
  margin: 5%;
`;

export const ModalCancelButton = styled.TouchableOpacity`
  color: transparent;
  margin: 5%;
  align-self: center;
  align-self: center;
`;


export const ButtonTitle = styled.Text`
  color: #ffffff;
  text-transform: uppercase;
  font-size: 14px;
  font-family: "MontserratAlternates_700Bold";
`;
export const ModalButtonTitle = styled(ButtonTitle)`
  color: #344f8f;
  font-size: 14px;
  font-family: "MontserratAlternates_500Medium";
  color: #8c8a97;
  text-transform: none;
`;

export const ModalBlueTitle = styled(ModalButtonTitle)`
color: #344f8f;
`

export const ModalButton = styled(Button)`
  width: 80%;
`;

