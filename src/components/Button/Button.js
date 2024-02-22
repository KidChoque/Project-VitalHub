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

export const ModalButton = styled(Button)`
  width: 80%;
`;
