import styled from "styled-components";
import { Button, ButtonTitle } from "../Button/Button";

export const GoogleButton = styled(Button)`
  background-color: #fafafa;
  border: 1px solid #496bba;
  margin: 5%;
  flex-direction: row;
  gap: 12px;
`;

export const GoogleButtonTitle = styled.Text`
  color: #496bba;
  text-transform: uppercase;
  font-size: 14px;
  font-family: "MontserratAlternates_700Bold";
`;
