import { StyleSheet } from "react-native";
import styled from "styled-components";

export const CodeInputBox = styled.View`
  width: 80%;
  justify-content: center;
  flex-direction: row;
  margin: 5%;

`;
export const CodeInput = StyleSheet.create({
    // root: {flex: 1, padding: 20},
    // title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {gap:20},
    cell: {
      width: 65,
      height: 62,
      lineHeight: 38,
      fontSize: 40,
      borderWidth: 2,
      borderRadius: 5,
      borderColor: "#49B3BA",
      lineHeight:56.5,
      textAlign:"center",
      color: "#34898F",
    },
    focusCell: {
      borderColor: '#000',
    },
  });
  

