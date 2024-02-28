import styled, { css } from "styled-components";

export const ButtonTabStyle = styled.TouchableOpacity`
  padding: 12px 14px;
  border-radius: 5px;

  ${(props) =>
    props.clickButton
      ? css`
          background-color: #496bba;
        `
      : css`
          background-color: transparent;
          border: 2px solid #607ec5;
        `}
`;
export const ButtonTabAppointmentStyle = styled.TouchableOpacity`
  padding: 12px 14px;
  border-radius: 5px;

  ${(props) =>
    props.clickButton
      ? css`
          background-color: #496bba;
        `
      : css`
          background-color: transparent;
          border: 2px solid #60bfc5;
        `}
`;

export const ButtonTextStyle = styled.Text`
  font-size: 12px;
  font-family: "MontserratAlternates_600SemiBold";

  ${(props) =>
    props.clickButton
      ? css`color: #fbfbfb;
          
        `
      : css`
          color: #607EC5 ;
        `}
`;
export const ButtonTextAppointmentStyle = styled.Text`
  font-size: 12px;
  font-family: "MontserratAlternates_600SemiBold";

  ${(props) =>
    props.clickButton
      ? css`color: #fbfbfb;
        `
      : css`
          color:#34898F ;
        `}
`;
